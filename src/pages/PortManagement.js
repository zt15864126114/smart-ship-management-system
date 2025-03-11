import React, { useState } from 'react';
import { 
  Table, 
  Card, 
  Button, 
  Space, 
  Modal, 
  Form, 
  Input, 
  InputNumber, 
  Tabs, 
  Typography, 
  Descriptions, 
  Divider,
  List,
  Row,
  Col,
  Statistic
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { ports } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const PortManagement = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  
  // 过滤港口数据
  const filteredPorts = ports.filter(port => 
    port.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // 表格列定义
  const columns = [
    {
      title: '港口名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: '位置',
      key: 'location',
      render: (_, record) => `经度: ${record.location.lng.toFixed(3)}, 纬度: ${record.location.lat.toFixed(3)}`,
    },
    {
      title: '面积(平方米)',
      dataIndex: 'area',
      key: 'area',
      sorter: (a, b) => a.area - b.area,
      render: (area) => area.toLocaleString(),
    },
    {
      title: '泊位数',
      dataIndex: 'berthCount',
      key: 'berthCount',
      sorter: (a, b) => a.berthCount - b.berthCount,
    },
    {
      title: '最大船舶吨位',
      dataIndex: 'maxShipSize',
      key: 'maxShipSize',
      sorter: (a, b) => a.maxShipSize - b.maxShipSize,
      render: (maxShipSize) => `${maxShipSize} 吨`,
    },
    {
      title: '日吞吐量(吨)',
      key: 'dailyThroughput',
      render: (_, record) => record.operationData.dailyThroughput.toLocaleString(),
      sorter: (a, b) => a.operationData.dailyThroughput - b.operationData.dailyThroughput,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="primary" 
            icon={<InfoCircleOutlined />} 
            size="small"
            onClick={() => handleView(record)}
          >
            查看
          </Button>
          <Button 
            icon={<EditOutlined />} 
            size="small"
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            size="small"
            onClick={() => handleDelete(record)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  // 处理查看港口详情
  const handleView = (port) => {
    setSelectedPort(port);
    setIsViewModalVisible(true);
  };

  // 处理编辑港口
  const handleEdit = (port) => {
    setSelectedPort(port);
    form.setFieldsValue({
      name: port.name,
      area: port.area,
      berthCount: port.berthCount,
      maxShipSize: port.maxShipSize,
      dailyThroughput: port.operationData.dailyThroughput,
      address: port.contactInfo.address,
      phone: port.contactInfo.phone,
      email: port.contactInfo.email,
    });
    setIsModalVisible(true);
  };

  // 处理删除港口
  const handleDelete = (port) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除港口 ${port.name} 吗？`,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        // 在实际应用中，这里应该调用API删除港口
        console.log('删除港口:', port);
        // 模拟删除成功提示
        Modal.success({
          content: `港口 ${port.name} 已成功删除！`,
        });
      },
    });
  };

  // 处理添加新港口
  const handleAdd = () => {
    setSelectedPort(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  // 处理表单提交
  const handleFormSubmit = () => {
    form.validateFields().then(values => {
      console.log('表单值:', values);
      
      // 在实际应用中，这里应该调用API保存港口信息
      if (selectedPort) {
        // 编辑现有港口
        Modal.success({
          content: `港口 ${values.name} 信息已成功更新！`,
        });
      } else {
        // 添加新港口
        Modal.success({
          content: `新港口 ${values.name} 已成功添加！`,
        });
      }
      
      setIsModalVisible(false);
    });
  };

  // 生成港口吞吐量趋势图表选项
  const getThroughputChartOption = (port) => {
    return {
      title: {
        text: '港口吞吐量趋势',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c} 吨'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value',
        name: '吨'
      },
      series: [
        {
          name: '月吞吐量',
          type: 'line',
          data: [
            port.operationData.monthlyThroughput * 0.95,
            port.operationData.monthlyThroughput * 0.98,
            port.operationData.monthlyThroughput,
            port.operationData.monthlyThroughput * 0.97,
            port.operationData.monthlyThroughput * 1.02,
            port.operationData.monthlyThroughput
          ],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }
      ]
    };
  };

  // 生成港口设施分布图表选项
  const getFacilitiesChartOption = (port) => {
    return {
      title: {
        text: '港口设施分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: port.facilities.map(f => f.name)
      },
      series: [
        {
          name: '设施数量',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: port.facilities.map(f => ({ value: f.count, name: f.name }))
        }
      ]
    };
  };

  return (
    <div>
      <Title level={2}>海港信息管理</Title>
      
      {/* 搜索和添加按钮 */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="搜索港口名称"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 300 }}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={handleAdd}
        >
          添加港口
        </Button>
      </Space>
      
      {/* 港口列表 */}
      <Card>
        <Table 
          columns={columns} 
          dataSource={filteredPorts}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
      
      {/* 添加/编辑港口表单 */}
      <Modal
        title={selectedPort ? `编辑港口 - ${selectedPort.name}` : '添加新港口'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleFormSubmit}
        width={700}
        okText={selectedPort ? '保存' : '添加'}
        cancelText="取消"
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="港口名称"
            rules={[{ required: true, message: '请输入港口名称' }]}
          >
            <Input placeholder="请输入港口名称" />
          </Form.Item>
          
          <Space size="large" style={{ display: 'flex' }}>
            <Form.Item
              name="area"
              label="面积(平方米)"
              rules={[{ required: true, message: '请输入面积' }]}
            >
              <InputNumber min={0} placeholder="面积" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="berthCount"
              label="泊位数"
              rules={[{ required: true, message: '请输入泊位数' }]}
            >
              <InputNumber min={0} placeholder="泊位数" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="maxShipSize"
              label="最大船舶吨位"
              rules={[{ required: true, message: '请输入最大船舶吨位' }]}
            >
              <InputNumber min={0} placeholder="最大船舶吨位" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
          
          <Form.Item
            name="dailyThroughput"
            label="日吞吐量(吨)"
            rules={[{ required: true, message: '请输入日吞吐量' }]}
          >
            <InputNumber min={0} placeholder="日吞吐量" style={{ width: '100%' }} />
          </Form.Item>
          
          <Divider>联系信息</Divider>
          
          <Form.Item
            name="address"
            label="地址"
            rules={[{ required: true, message: '请输入地址' }]}
          >
            <Input placeholder="请输入地址" />
          </Form.Item>
          
          <Space size="large" style={{ display: 'flex' }}>
            <Form.Item
              name="phone"
              label="联系电话"
              rules={[{ required: true, message: '请输入联系电话' }]}
            >
              <Input placeholder="请输入联系电话" />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="电子邮箱"
              rules={[
                { required: true, message: '请输入电子邮箱' },
                { type: 'email', message: '请输入有效的电子邮箱' }
              ]}
            >
              <Input placeholder="请输入电子邮箱" />
            </Form.Item>
          </Space>
        </Form>
      </Modal>
      
      {/* 查看港口详情 */}
      <Modal
        title={selectedPort ? `港口详情 - ${selectedPort.name}` : '港口详情'}
        open={isViewModalVisible}
        onCancel={() => setIsViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsViewModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={800}
      >
        {selectedPort && (
          <Tabs defaultActiveKey="basic">
            <TabPane tab="基本信息" key="basic">
              <Descriptions bordered column={2}>
                <Descriptions.Item label="港口名称">{selectedPort.name}</Descriptions.Item>
                <Descriptions.Item label="位置">
                  经度: {selectedPort.location.lng.toFixed(3)}, 纬度: {selectedPort.location.lat.toFixed(3)}
                </Descriptions.Item>
                <Descriptions.Item label="面积">{selectedPort.area.toLocaleString()} 平方米</Descriptions.Item>
                <Descriptions.Item label="泊位数">{selectedPort.berthCount}</Descriptions.Item>
                <Descriptions.Item label="最大船舶吨位">{selectedPort.maxShipSize} 吨</Descriptions.Item>
              </Descriptions>
              
              <Divider orientation="left">联系信息</Divider>
              <p>
                <EnvironmentOutlined /> {selectedPort.contactInfo.address}
              </p>
              <p>
                <PhoneOutlined /> {selectedPort.contactInfo.phone}
              </p>
              <p>
                <MailOutlined /> {selectedPort.contactInfo.email}
              </p>
            </TabPane>
            
            <TabPane tab="设施和设备" key="facilities">
              <Row gutter={16}>
                <Col span={12}>
                  <Card title="港口设施">
                    <List
                      bordered
                      dataSource={selectedPort.facilities}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            title={item.name}
                            description={`数量: ${item.count}`}
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="港口设备">
                    <List
                      bordered
                      dataSource={selectedPort.equipment}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            title={item.name}
                            description={`数量: ${item.count}`}
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              </Row>
              
              <div style={{ marginTop: 16 }}>
                <ReactECharts option={getFacilitiesChartOption(selectedPort)} style={{ height: 300 }} />
              </div>
            </TabPane>
            
            <TabPane tab="运营数据" key="operation">
              <Row gutter={16}>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="日吞吐量"
                      value={selectedPort.operationData.dailyThroughput}
                      suffix="吨"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="月吞吐量"
                      value={selectedPort.operationData.monthlyThroughput}
                      suffix="吨"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="年吞吐量"
                      value={selectedPort.operationData.yearlyThroughput}
                      suffix="吨"
                    />
                  </Card>
                </Col>
              </Row>
              
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="日进港船舶"
                      value={selectedPort.operationData.shipEntryCount.daily}
                      suffix="艘"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="月进港船舶"
                      value={selectedPort.operationData.shipEntryCount.monthly}
                      suffix="艘"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="年进港船舶"
                      value={selectedPort.operationData.shipEntryCount.yearly}
                      suffix="艘"
                    />
                  </Card>
                </Col>
              </Row>
              
              <div style={{ marginTop: 16 }}>
                <ReactECharts option={getThroughputChartOption(selectedPort)} style={{ height: 300 }} />
              </div>
            </TabPane>
          </Tabs>
        )}
      </Modal>
    </div>
  );
};

export default PortManagement; 