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
  Select, 
  Tabs, 
  Typography, 
  Tag, 
  Descriptions, 
  Badge,
  Divider,
  List
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  InfoCircleOutlined,
  HistoryOutlined,
  ToolOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { ships } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const ShipManagement = () => {
  const [selectedShip, setSelectedShip] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  
  // 过滤船舶数据
  const filteredShips = ships.filter(ship => 
    ship.name.toLowerCase().includes(searchText.toLowerCase()) ||
    ship.number.toLowerCase().includes(searchText.toLowerCase()) ||
    ship.captain.toLowerCase().includes(searchText.toLowerCase())
  );

  // 表格列定义
  const columns = [
    {
      title: '船名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: '船号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '吨位',
      dataIndex: 'tonnage',
      key: 'tonnage',
      render: (tonnage) => `${tonnage} 吨`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'green';
        if (status === '航行中') {
          color = 'blue';
        } else if (status === '维修中') {
          color = 'orange';
        }
        return <Badge status={color} text={status} />;
      },
    },
    {
      title: '船长',
      dataIndex: 'captain',
      key: 'captain',
    }
  ];

  // 处理查看船舶详情
  const handleView = (ship) => {
    setSelectedShip(ship);
    setIsViewModalVisible(true);
  };

  // 处理编辑船舶
  const handleEdit = (ship) => {
    setSelectedShip(ship);
    form.setFieldsValue({
      name: ship.name,
      number: ship.number,
      length: ship.length,
      width: ship.width,
      tonnage: ship.tonnage,
      enginePower: ship.enginePower,
      buildYear: ship.buildYear,
      type: ship.type,
      status: ship.status,
      captain: ship.captain,
      crewCount: ship.crewCount,
    });
    setIsModalVisible(true);
  };

  // 处理删除船舶
  const handleDelete = (ship) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除船舶 ${ship.name} 吗？`,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        // 在实际应用中，这里应该调用API删除船舶
        console.log('删除船舶:', ship);
        // 模拟删除成功提示
        Modal.success({
          content: `船舶 ${ship.name} 已成功删除！`,
        });
      },
    });
  };

  // 处理添加新船舶
  const handleAdd = () => {
    setSelectedShip(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  // 处理表单提交
  const handleFormSubmit = () => {
    form.validateFields().then(values => {
      console.log('表单值:', values);
      
      // 在实际应用中，这里应该调用API保存船舶信息
      if (selectedShip) {
        // 编辑现有船舶
        Modal.success({
          content: `船舶 ${values.name} 信息已成功更新！`,
        });
      } else {
        // 添加新船舶
        Modal.success({
          content: `新船舶 ${values.name} 已成功添加！`,
        });
      }
      
      setIsModalVisible(false);
    });
  };

  return (
    <div>
      <Title level={2}>船舶信息管理</Title>
      
      {/* 搜索和添加按钮 */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="搜索船名、船号或船长"
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
          添加船舶
        </Button>
      </Space>
      
      {/* 船舶列表 */}
      <Card>
        <Table 
          columns={columns} 
          dataSource={filteredShips}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
      
      {/* 添加/编辑船舶表单 */}
      <Modal
        title={selectedShip ? `编辑船舶 - ${selectedShip.name}` : '添加新船舶'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleFormSubmit}
        width={700}
        okText={selectedShip ? '保存' : '添加'}
        cancelText="取消"
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="船名"
            rules={[{ required: true, message: '请输入船名' }]}
          >
            <Input placeholder="请输入船名" />
          </Form.Item>
          
          <Form.Item
            name="number"
            label="船号"
            rules={[{ required: true, message: '请输入船号' }]}
          >
            <Input placeholder="请输入船号" />
          </Form.Item>
          
          <Form.Item
            name="type"
            label="船舶类型"
            rules={[{ required: true, message: '请选择船舶类型' }]}
          >
            <Select placeholder="请选择船舶类型">
              <Option value="货船">货船</Option>
              <Option value="集装箱船">集装箱船</Option>
              <Option value="油轮">油轮</Option>
              <Option value="客船">客船</Option>
            </Select>
          </Form.Item>
          
          <Space size="large" style={{ display: 'flex' }}>
            <Form.Item
              name="length"
              label="船长(米)"
              rules={[{ required: true, message: '请输入船长' }]}
            >
              <InputNumber min={0} placeholder="船长" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="width"
              label="船宽(米)"
              rules={[{ required: true, message: '请输入船宽' }]}
            >
              <InputNumber min={0} placeholder="船宽" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="tonnage"
              label="吨位(吨)"
              rules={[{ required: true, message: '请输入吨位' }]}
            >
              <InputNumber min={0} placeholder="吨位" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
          
          <Space size="large" style={{ display: 'flex' }}>
            <Form.Item
              name="enginePower"
              label="发动机功率(kW)"
              rules={[{ required: true, message: '请输入发动机功率' }]}
            >
              <InputNumber min={0} placeholder="发动机功率" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="buildYear"
              label="建造年份"
              rules={[{ required: true, message: '请输入建造年份' }]}
            >
              <InputNumber min={1900} max={new Date().getFullYear()} placeholder="建造年份" style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item
              name="status"
              label="当前状态"
              rules={[{ required: true, message: '请选择当前状态' }]}
            >
              <Select placeholder="请选择当前状态">
                <Option value="航行中">航行中</Option>
                <Option value="停泊中">停泊中</Option>
                <Option value="维修中">维修中</Option>
              </Select>
            </Form.Item>
          </Space>
          
          <Space size="large" style={{ display: 'flex' }}>
            <Form.Item
              name="captain"
              label="船长姓名"
              rules={[{ required: true, message: '请输入船长姓名' }]}
            >
              <Input placeholder="请输入船长姓名" />
            </Form.Item>
            
            <Form.Item
              name="crewCount"
              label="船员人数"
              rules={[{ required: true, message: '请输入船员人数' }]}
            >
              <InputNumber min={1} placeholder="船员人数" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
        </Form>
      </Modal>
      
      {/* 查看船舶详情 */}
      <Modal
        title={selectedShip ? `船舶详情 - ${selectedShip.name}` : '船舶详情'}
        open={isViewModalVisible}
        onCancel={() => setIsViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsViewModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={800}
      >
        {selectedShip && (
          <Tabs defaultActiveKey="basic">
            <TabPane tab="基本信息" key="basic">
              <Descriptions bordered column={2}>
                <Descriptions.Item label="船名">{selectedShip.name}</Descriptions.Item>
                <Descriptions.Item label="船号">{selectedShip.number}</Descriptions.Item>
                <Descriptions.Item label="船舶类型">{selectedShip.type}</Descriptions.Item>
                <Descriptions.Item label="建造年份">{selectedShip.buildYear}</Descriptions.Item>
                <Descriptions.Item label="船长">{selectedShip.length} 米</Descriptions.Item>
                <Descriptions.Item label="船宽">{selectedShip.width} 米</Descriptions.Item>
                <Descriptions.Item label="吨位">{selectedShip.tonnage} 吨</Descriptions.Item>
                <Descriptions.Item label="发动机功率">{selectedShip.enginePower} kW</Descriptions.Item>
                <Descriptions.Item label="当前状态">
                  <Badge 
                    status={
                      selectedShip.status === '航行中' ? 'processing' : 
                      selectedShip.status === '停泊中' ? 'success' : 'warning'
                    } 
                    text={selectedShip.status} 
                  />
                </Descriptions.Item>
                <Descriptions.Item label="当前位置">
                  {selectedShip.status === '航行中' ? 
                    `经度: ${selectedShip.position.lng.toFixed(3)}, 纬度: ${selectedShip.position.lat.toFixed(3)}` : 
                    (selectedShip.status === '停泊中' ? selectedShip.lastPort : selectedShip.lastPort)
                  }
                </Descriptions.Item>
                <Descriptions.Item label="上一港口">{selectedShip.lastPort}</Descriptions.Item>
                <Descriptions.Item label="下一港口">{selectedShip.nextPort}</Descriptions.Item>
              </Descriptions>
            </TabPane>
            
            <TabPane tab="船员信息" key="crew" icon={<TeamOutlined />}>
              <Descriptions bordered column={2}>
                <Descriptions.Item label="船长">{selectedShip.captain}</Descriptions.Item>
                <Descriptions.Item label="船员人数">{selectedShip.crewCount} 人</Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">船员名单</Divider>
              <Text type="secondary">此处应显示完整船员名单，当前为模拟数据</Text>
              <List
                bordered
                dataSource={[
                  { name: selectedShip.captain, position: '船长', age: 45, experience: 20 },
                  { name: '李工程', position: '轮机长', age: 42, experience: 18 },
                  { name: '王航海', position: '大副', age: 38, experience: 15 },
                  { name: '张电机', position: '电机员', age: 35, experience: 12 },
                ]}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={`${item.name} - ${item.position}`}
                      description={`年龄: ${item.age}岁, 航海经验: ${item.experience}年`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            
            <TabPane tab="安全设备" key="safety">
              <List
                bordered
                dataSource={selectedShip.safetyEquipment}
                renderItem={item => (
                  <List.Item>
                    <Tag color="green">{item}</Tag>
                  </List.Item>
                )}
              />
            </TabPane>
            
            <TabPane tab="维护记录" key="maintenance" icon={<ToolOutlined />}>
              <List
                bordered
                dataSource={selectedShip.maintenanceRecord}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={`${item.date} - ${item.type}`}
                      description={item.details}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            
            <TabPane tab="航行记录" key="voyage" icon={<HistoryOutlined />}>
              <List
                bordered
                dataSource={selectedShip.voyageHistory}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={`${item.from} → ${item.to}`}
                      description={`出发: ${item.departureTime}, 到达: ${item.arrivalTime}`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        )}
      </Modal>
    </div>
  );
};

export default ShipManagement; 