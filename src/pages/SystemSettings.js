import React from 'react';
import { 
  Card, 
  Typography, 
  Tabs, 
  Form, 
  Input, 
  Switch, 
  Select, 
  Button, 
  Row, 
  Col,
  TimePicker,
  InputNumber,
  Space,
  Divider,
  message,
  Badge,
  Tooltip
} from 'antd';
import {
  SecurityScanOutlined,
  DatabaseOutlined,
  BellOutlined,
  GlobalOutlined,
  SaveOutlined,
  UndoOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const SystemSettings = () => {
  const [form] = Form.useForm();

  // 处理表单提交
  const handleSubmit = (values) => {
    console.log('表单值：', values);
    message.success('设置已保存');
  };

  // 重置表单
  const handleReset = () => {
    form.resetFields();
    message.info('设置已重置');
  };

  return (
    <div style={{ padding: '24px', background: '#f5f5f5', minHeight: '100%' }}>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Space align="center" style={{ marginBottom: 16 }}>
          <Title level={2} style={{ margin: 0 }}>系统设置</Title>
          <Badge count="管理员" style={{ backgroundColor: '#52c41a' }} />
        </Space>
        <Paragraph type="secondary">
          在这里您可以配置系统的基本参数、安全选项、数据备份和通知设置等内容
        </Paragraph>
      </Card>

      <Tabs 
        defaultActiveKey="1"
        type="card"
        size="large"
        style={{ marginBottom: 24 }}
      >
        {/* 基本设置 */}
        <TabPane 
          tab={
            <span>
              <GlobalOutlined />
              基本设置
            </span>
          } 
          key="1"
        >
          <Card bordered={false}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={{
                systemName: '梁山港智能船舶管理系统',
                language: 'zh_CN',
                timezone: 'Asia/Shanghai',
                pageSize: 10,
                theme: 'light'
              }}
            >
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>系统名称</span>
                        <Tooltip title="设置系统显示的名称">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="systemName"
                    rules={[{ required: true, message: '请输入系统名称' }]}
                  >
                    <Input prefix={<InfoCircleOutlined />} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>系统语言</span>
                        <Tooltip title="选择系统界面语言">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="language"
                    rules={[{ required: true, message: '请选择系统语言' }]}
                  >
                    <Select>
                      <Option value="zh_CN">简体中文</Option>
                      <Option value="en_US">English</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>时区设置</span>
                        <Tooltip title="选择系统使用的时区">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="timezone"
                    rules={[{ required: true, message: '请选择时区' }]}
                  >
                    <Select>
                      <Option value="Asia/Shanghai">中国标准时间 (UTC+8)</Option>
                      <Option value="UTC">协调世界时 (UTC)</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>默认每页显示条数</span>
                        <Tooltip title="设置列表页面默认显示的数据条数">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="pageSize"
                    rules={[{ required: true, message: '请选择每页显示条数' }]}
                  >
                    <Select>
                      <Option value={10}>10条/页</Option>
                      <Option value={20}>20条/页</Option>
                      <Option value={50}>50条/页</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </TabPane>

        {/* 安全设置 */}
        <TabPane
          tab={
            <span>
              <SecurityScanOutlined />
              安全设置
            </span>
          }
          key="2"
        >
          <Card bordered={false}>
            <Form
              layout="vertical"
              initialValues={{
                passwordExpiry: 90,
                loginAttempts: 5,
                sessionTimeout: 30,
                twoFactorAuth: false
              }}
            >
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>密码有效期（天）</span>
                        <Tooltip title="设置密码需要更新的周期">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="passwordExpiry"
                    rules={[{ required: true, message: '请输入密码有效期' }]}
                  >
                    <InputNumber min={30} max={180} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>最大登录尝试次数</span>
                        <Tooltip title="超过此次数账号将被锁定">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="loginAttempts"
                    rules={[{ required: true, message: '请输入最大登录尝试次数' }]}
                  >
                    <InputNumber min={3} max={10} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>会话超时时间（分钟）</span>
                        <Tooltip title="超过此时间需要重新登录">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="sessionTimeout"
                    rules={[{ required: true, message: '请输入会话超时时间' }]}
                  >
                    <InputNumber min={15} max={120} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>双因素认证</span>
                        <Tooltip title="启用后登录需要验证码">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="twoFactorAuth"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </TabPane>

        {/* 数据备份 */}
        <TabPane
          tab={
            <span>
              <DatabaseOutlined />
              数据备份
            </span>
          }
          key="3"
        >
          <Card bordered={false}>
            <Form
              layout="vertical"
              initialValues={{
                backupTime: dayjs('02:00', 'HH:mm'),
                backupRetention: 30,
                autoBackup: true
              }}
            >
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>自动备份</span>
                        <Tooltip title="启用自动备份功能">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="autoBackup"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>备份时间</span>
                        <Tooltip title="设置每日自动备份的时间">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="backupTime"
                  >
                    <TimePicker format="HH:mm" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Space>
                        <span>备份保留天数</span>
                        <Tooltip title="超过天数的备份将被自动删除">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="backupRetention"
                    rules={[{ required: true, message: '请输入备份保留天数' }]}
                  >
                    <InputNumber min={7} max={365} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </TabPane>

        {/* 通知设置 */}
        <TabPane
          tab={
            <span>
              <BellOutlined />
              通知设置
            </span>
          }
          key="4"
        >
          <Card bordered={false}>
            <Form
              layout="vertical"
              initialValues={{
                emailNotification: true,
                smsNotification: false,
                systemNotification: true
              }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <Form.Item
                    label={
                      <Space>
                        <span>邮件通知</span>
                        <Tooltip title="启用邮件通知功能">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="emailNotification"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label={
                      <Space>
                        <span>短信通知</span>
                        <Tooltip title="启用短信通知功能">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="smsNotification"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label={
                      <Space>
                        <span>系统通知</span>
                        <Tooltip title="启用系统内部通知">
                          <QuestionCircleOutlined style={{ color: '#8c8c8c' }} />
                        </Tooltip>
                      </Space>
                    }
                    name="systemNotification"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </TabPane>
      </Tabs>

      <Card bordered={false}>
        <Row justify="center">
          <Space size="large">
            <Button 
              type="primary" 
              icon={<SaveOutlined />}
              onClick={() => form.submit()}
              size="large"
            >
              保存设置
            </Button>
            <Button 
              icon={<UndoOutlined />}
              onClick={handleReset}
              size="large"
            >
              重置设置
            </Button>
          </Space>
        </Row>
      </Card>
    </div>
  );
};

export default SystemSettings; 