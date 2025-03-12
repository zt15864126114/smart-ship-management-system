import React, { useState } from 'react';
import { 
  Card, 
  List, 
  Tag, 
  Space, 
  Typography, 
  Row, 
  Col, 
  Button, 
  Steps, 
  Alert,
  Modal,
  Descriptions,
  Badge,
  Timeline,
  message,
  Statistic
} from 'antd';
import { 
  ThunderboltOutlined, 
  AlertOutlined, 
  TeamOutlined, 
  PhoneOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { emergencyPlans } from '../mock/data';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const EmergencyResponse = () => {
  const [activeEmergencyPlan, setActiveEmergencyPlan] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [emergencyStatus, setEmergencyStatus] = useState('待启动');

  // 启动应急预案
  const activateEmergencyPlan = (plan) => {
    setActiveEmergencyPlan(plan);
    setModalVisible(true);
    setEmergencyStatus('进行中');
    message.success(`已启动${plan.name}应急预案`);
  };

  // 处理下一步
  const handleNextStep = () => {
    if (currentStep < activeEmergencyPlan?.procedures.length - 1) {
      setCurrentStep(currentStep + 1);
      message.success('已完成当前步骤');
    } else {
      setEmergencyStatus('已完成');
      message.success('应急预案已完成');
    }
  };

  // 重置应急预案
  const resetEmergencyPlan = () => {
    setCurrentStep(0);
    setEmergencyStatus('待启动');
    setModalVisible(false);
    setActiveEmergencyPlan(null);
  };

  return (
    <div className="emergency-response">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Alert
            message="应急响应中心"
            description="快速启动应急预案，协调救援资源，高效处理紧急情况"
            type="info"
            showIcon
            icon={<ThunderboltOutlined />}
            style={{ marginBottom: 16 }}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card 
            title={
              <Space>
                <AlertOutlined style={{ color: '#ff4d4f' }} />
                <span>应急预案列表</span>
              </Space>
            }
          >
            <List
              itemLayout="vertical"
              dataSource={emergencyPlans}
              renderItem={plan => (
                <List.Item
                  key={plan.id}
                  actions={[
                    <Button 
                      type="primary" 
                      danger 
                      icon={<ThunderboltOutlined />}
                      onClick={() => activateEmergencyPlan(plan)}
                    >
                      启动预案
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Space>
                        <span>{plan.name}</span>
                        <Tag color={plan.level === '一级' ? 'red' : plan.level === '二级' ? 'orange' : 'green'}>
                          {plan.level}
                        </Tag>
                      </Space>
                    }
                    description={
                      <Row>
                        <Col span={24}>
                          <Space direction="vertical" size="small">
                            <Text><TeamOutlined /> 负责部门: {plan.responsibleDepartment}</Text>
                            <Text><PhoneOutlined /> 联系人: {plan.contactPerson} ({plan.contactPhone})</Text>
                            <Text>适用范围: {plan.scope}</Text>
                          </Space>
                        </Col>
                      </Row>
                    }
                  />
                  <div style={{ marginTop: 16 }}>
                    <Text strong>应急资源配置:</Text>
                    <div style={{ marginTop: 8 }}>
                      {plan.resources.map((resource, index) => (
                        <Tag key={index} color="blue" style={{ marginRight: 8, marginBottom: 8 }}>
                          {resource.name}: {resource.count}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card 
            title={
              <Space>
                <ClockCircleOutlined style={{ color: '#1890ff' }} />
                <span>最近演练记录</span>
              </Space>
            }
          >
            <Timeline>
              {emergencyPlans.map(plan => (
                <Timeline.Item 
                  key={plan.id}
                  color="blue"
                  dot={<CheckCircleOutlined style={{ fontSize: '16px' }} />}
                >
                  <Text strong>{plan.name}</Text>
                  <br />
                  <Text type="secondary">上次演练: {plan.lastDrillDate}</Text>
                  <br />
                  <Text type="secondary">更新时间: {plan.lastUpdated}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>

      <Modal
        title={
          <Space>
            <ThunderboltOutlined style={{ color: '#ff4d4f' }} />
            <span>应急预案执行 - {activeEmergencyPlan?.name}</span>
          </Space>
        }
        visible={modalVisible}
        width={800}
        footer={[
          <Button key="reset" onClick={resetEmergencyPlan}>
            重置预案
          </Button>,
          <Button 
            key="next" 
            type="primary" 
            onClick={handleNextStep}
            disabled={emergencyStatus === '已完成'}
          >
            {currentStep < (activeEmergencyPlan?.procedures.length || 0) - 1 ? '下一步' : '完成'}
          </Button>
        ]}
        onCancel={() => setModalVisible(false)}
      >
        {activeEmergencyPlan && (
          <>
            <Alert
              message={
                <Space>
                  <Badge 
                    status={
                      emergencyStatus === '待启动' ? 'default' :
                      emergencyStatus === '进行中' ? 'processing' :
                      'success'
                    } 
                  />
                  <Text>当前状态: {emergencyStatus}</Text>
                </Space>
              }
              type={
                emergencyStatus === '待启动' ? 'info' :
                emergencyStatus === '进行中' ? 'warning' :
                'success'
              }
              style={{ marginBottom: 16 }}
            />

            <Descriptions bordered size="small" column={2}>
              <Descriptions.Item label="预案级别">
                <Tag color={activeEmergencyPlan.level === '一级' ? 'red' : 'orange'}>
                  {activeEmergencyPlan.level}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="负责部门">{activeEmergencyPlan.responsibleDepartment}</Descriptions.Item>
              <Descriptions.Item label="联系人">{activeEmergencyPlan.contactPerson}</Descriptions.Item>
              <Descriptions.Item label="联系电话">{activeEmergencyPlan.contactPhone}</Descriptions.Item>
            </Descriptions>

            <div style={{ margin: '24px 0' }}>
              <Steps current={currentStep} status={emergencyStatus === '已完成' ? 'finish' : 'process'}>
                {activeEmergencyPlan.procedures.map((step, index) => (
                  <Step 
                    key={index} 
                    title={`步骤 ${index + 1}`}
                    description={step}
                  />
                ))}
              </Steps>
            </div>

            <Card title="应急资源配置" size="small">
              <Row gutter={[16, 16]}>
                {activeEmergencyPlan.resources.map((resource, index) => (
                  <Col span={8} key={index}>
                    <Card size="small">
                      <Statistic
                        title={resource.name}
                        value={resource.count}
                        suffix="个"
                        valueStyle={{ color: '#1890ff' }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </>
        )}
      </Modal>
    </div>
  );
};

export default EmergencyResponse; 