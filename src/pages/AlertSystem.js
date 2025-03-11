import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Table, 
  Badge, 
  Space, 
  Button, 
  Typography, 
  Modal, 
  Form, 
  Input,
  Row, 
  Col,
  Statistic,
  Alert,
  Tabs,
  Descriptions,
  notification
} from 'antd';
import { 
  ExclamationCircleOutlined, 
  CheckCircleOutlined,
  ClockCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { alerts, ships} from '../mock/data';

const { Title } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;

const AlertSystem = () => {
  const [alertData, setAlertData] = useState([...alerts]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [isHandlingModalVisible, setIsHandlingModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [handlingForm] = Form.useForm();
  
  // 模拟实时预警
  useEffect(() => {
    const interval = setInterval(() => {
      // 随机生成新预警的概率
      if (Math.random() < 0.3) { // 30%的概率生成新预警
        const alertTypes = ['碰撞预警', '风暴预警', '设备故障预警', '超速预警', '偏航预警'];
        const alertLevels = ['高', '中', '低'];
        const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        const randomLevel = alertLevels[Math.floor(Math.random() * alertLevels.length)];
        const randomShip = ships[Math.floor(Math.random() * ships.length)];
        
        const newAlert = {
          id: alertData.length + 1,
          type: randomType,
          level: randomLevel,
          time: new Date().toLocaleString(),
          location: randomShip.position,
          ship: randomShip.name,
          description: `${randomType}：${randomShip.name} 需要注意安全`,
          status: '未处理'
        };
        
        setAlertData(prevAlerts => [newAlert, ...prevAlerts]);
        
        // 显示通知
        showNotification(newAlert);
      }
    }, 30000); // 每30秒检查一次
    
    return () => clearInterval(interval);
  }, [alertData]);
  
  // 模拟通知
  const showNotification = (alert) => {
    Modal.info({
      title: `新的${alert.level}级预警`,
      content: (
        <div>
          <p><strong>类型：</strong> {alert.type}</p>
          <p><strong>时间：</strong> {alert.time}</p>
          <p><strong>相关船舶：</strong> {alert.ship}</p>
          <p><strong>描述：</strong> {alert.description}</p>
        </div>
      ),
      okText: '知道了',
    });
  };

  // 表格列定义
  const columns = [
    {
      title: '预警类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
      render: (level) => {
        let color = 'success';
        if (level === '高') {
          color = 'error';
        } else if (level === '中') {
          color = 'warning';
        }
        return <Badge status={color} text={level} />;
      },
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '相关船舶',
      key: 'relatedShips',
      render: (_, record) => {
        if (record.ships) {
          return record.ships.join(', ');
        } else if (record.ship) {
          return record.ship;
        } else {
          return '-';
        }
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'success';
        if (status === '处理中') {
          color = 'processing';
        } else if (status === '未处理') {
          color = 'error';
        }
        return <Badge status={color} text={status} />;
      },
    },
    {
      title: '处理人',
      dataIndex: 'handler',
      key: 'handler',
      render: (handler) => handler || '-',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button 
            type="primary" 
            size="small"
            onClick={() => handleViewAlert(record)}
          >
            查看
          </Button>
          {record.status === '未处理' && (
            <Button 
              size="small"
              onClick={() => handleProcessAlert(record)}
            >
              处理
            </Button>
          )}
        </Space>
      ),
    },
  ];

  // 处理查看预警
  const handleViewAlert = (alert) => {
    setSelectedAlert(alert);
    setIsModalVisible(true);
  };

  // 处理预警
  const handleProcessAlert = (alert) => {
    setSelectedAlert(alert);
    handlingForm.resetFields();
    setIsHandlingModalVisible(true);
  };

  // 提交处理结果
  const handleSubmitProcessing = () => {
    handlingForm.validateFields().then(values => {
      const updatedAlerts = alertData.map(alert => {
        if (alert.id === selectedAlert.id) {
          return {
            ...alert,
            status: '已处理',
            handler: values.handler,
            handlingTime: new Date().toLocaleString(),
            handlingMeasures: values.measures
          };
        }
        return alert;
      });
      
      setAlertData(updatedAlerts);
      setIsHandlingModalVisible(false);
      
      notification.success({
        message: '处理成功',
        description: '预警已成功处理！',
      });
    });
  };

  // 添加新预警
  const handleAddAlert = () => {
    form.resetFields();
    setSelectedAlert(null);
    setIsModalVisible(true);
  };

  // 预警类型分布图表选项
  const alertTypeOption = {
    title: {
      text: '预警类型分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['碰撞预警', '风暴预警', '设备故障预警', '超速预警', '偏航预警']
    },
    series: [
      {
        name: '预警类型',
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
        data: [
          { 
            value: alertData.filter(a => a.type === '碰撞预警').length, 
            name: '碰撞预警' 
          },
          { 
            value: alertData.filter(a => a.type === '风暴预警').length, 
            name: '风暴预警' 
          },
          { 
            value: alertData.filter(a => a.type === '设备故障预警').length, 
            name: '设备故障预警' 
          },
          { 
            value: alertData.filter(a => a.type === '超速预警').length, 
            name: '超速预警' 
          },
          { 
            value: alertData.filter(a => a.type === '偏航预警').length, 
            name: '偏航预警' 
          }
        ]
      }
    ]
  };

  // 预警处理状态图表选项
  const alertStatusOption = {
    title: {
      text: '预警处理状态',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['已处理', '处理中', '未处理']
    },
    series: [
      {
        name: '处理状态',
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
        data: [
          { 
            value: alertData.filter(a => a.status === '已处理').length, 
            name: '已处理',
            itemStyle: { color: '#52c41a' }
          },
          { 
            value: alertData.filter(a => a.status === '处理中').length, 
            name: '处理中',
            itemStyle: { color: '#1890ff' }
          },
          { 
            value: alertData.filter(a => a.status === '未处理').length, 
            name: '未处理',
            itemStyle: { color: '#ff4d4f' }
          }
        ]
      }
    ]
  };

  return (
    <div>
      <Title level={2}>安全预警系统</Title>
      
      {/* 预警统计 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总预警数"
              value={alertData.length}
              prefix={<BellOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="高级别预警"
              value={alertData.filter(a => a.level === '高').length}
              valueStyle={{ color: '#ff4d4f' }}
              prefix={<ExclamationCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="未处理预警"
              value={alertData.filter(a => a.status === '未处理').length}
              valueStyle={{ color: alertData.filter(a => a.status === '未处理').length > 0 ? '#ff4d4f' : '#52c41a' }}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="已处理预警"
              value={alertData.filter(a => a.status === '已处理').length}
              valueStyle={{ color: '#52c41a' }}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>
      
      {/* 高级别未处理预警提醒 */}
      {alertData.filter(a => a.level === '高' && a.status === '未处理').length > 0 && (
        <Alert
          message="高级别预警提醒"
          description={`当前有 ${alertData.filter(a => a.level === '高' && a.status === '未处理').length} 个高级别预警未处理，请及时处理！`}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
          action={
            <Button size="small" danger>
              立即处理
            </Button>
          }
        />
      )}
      
      {/* 图表展示 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Card>
            <ReactECharts option={alertTypeOption} style={{ height: 300 }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactECharts option={alertStatusOption} style={{ height: 300 }} />
          </Card>
        </Col>
      </Row>
      
      {/* 预警列表 */}
      <Card 
        title="预警列表" 
        extra={
          <Button 
            type="primary" 
            icon={<BellOutlined />}
            onClick={handleAddAlert}
          >
            添加预警
          </Button>
        }
      >
        <Table 
          columns={columns} 
          dataSource={alertData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          rowClassName={(record) => {
            if (record.level === '高' && record.status !== '已处理') {
              return 'ant-table-row-danger';
            }
            return '';
          }}
        />
      </Card>
      
      {/* 查看预警详情 */}
      <Modal
        title={selectedAlert ? `预警详情 - ${selectedAlert.type}` : '预警详情'}
        open={isModalVisible && selectedAlert}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={700}
      >
        {selectedAlert && (
          <Tabs defaultActiveKey="basic">
            <TabPane tab="基本信息" key="basic">
              <Descriptions bordered column={2}>
                <Descriptions.Item label="预警类型">{selectedAlert.type}</Descriptions.Item>
                <Descriptions.Item label="预警级别">
                  <Badge 
                    status={
                      selectedAlert.level === '高' ? 'error' : 
                      selectedAlert.level === '中' ? 'warning' : 'success'
                    } 
                    text={selectedAlert.level} 
                  />
                </Descriptions.Item>
                <Descriptions.Item label="预警时间">{selectedAlert.time}</Descriptions.Item>
                <Descriptions.Item label="预警状态">
                  <Badge 
                    status={
                      selectedAlert.status === '已处理' ? 'success' : 
                      selectedAlert.status === '处理中' ? 'processing' : 'error'
                    } 
                    text={selectedAlert.status} 
                  />
                </Descriptions.Item>
                <Descriptions.Item label="相关船舶" span={2}>
                  {selectedAlert.ships ? selectedAlert.ships.join(', ') : selectedAlert.ship || '-'}
                </Descriptions.Item>
                <Descriptions.Item label="预警描述" span={2}>
                  {selectedAlert.description}
                </Descriptions.Item>
                {selectedAlert.location && (
                  <Descriptions.Item label="位置" span={2}>
                    经度: {selectedAlert.location.lng.toFixed(5)}, 纬度: {selectedAlert.location.lat.toFixed(5)}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </TabPane>
            
            <TabPane tab="处理信息" key="handling">
              {selectedAlert.status === '已处理' ? (
                <div>
                  <Descriptions bordered column={2}>
                    <Descriptions.Item label="处理人">{selectedAlert.handler}</Descriptions.Item>
                    <Descriptions.Item label="处理时间">{selectedAlert.handlingTime}</Descriptions.Item>
                    <Descriptions.Item label="处理措施" span={2}>
                      {selectedAlert.handlingMeasures}
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              ) : (
                <Alert
                  message="未处理"
                  description="该预警尚未处理或正在处理中。"
                  type="warning"
                  showIcon
                />
              )}
            </TabPane>
          </Tabs>
        )}
      </Modal>
      
      {/* 处理预警表单 */}
      <Modal
        title={`处理预警 - ${selectedAlert?.type}`}
        open={isHandlingModalVisible}
        onCancel={() => setIsHandlingModalVisible(false)}
        onOk={handleSubmitProcessing}
        okText="提交"
        cancelText="取消"
      >
        <Form
          form={handlingForm}
          layout="vertical"
        >
          <Form.Item
            name="handler"
            label="处理人"
            rules={[{ required: true, message: '请输入处理人姓名' }]}
          >
            <Input placeholder="请输入处理人姓名" />
          </Form.Item>
          
          <Form.Item
            name="measures"
            label="处理措施"
            rules={[{ required: true, message: '请输入处理措施' }]}
          >
            <TextArea rows={4} placeholder="请输入处理措施" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AlertSystem; 