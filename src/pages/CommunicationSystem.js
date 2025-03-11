import React, { useState } from 'react';
import { 
  Card, 
  List, 
  Typography, 
  Space, 
  Button, 
  Input, 
  Avatar,
  Badge,
  Tabs,
  Form,
  message,
  Modal,
  Row,
  Col,
  Tag,
  Statistic
} from 'antd';
import { 
  SendOutlined, 
  UserOutlined, 
  TeamOutlined,
  MessageOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  BellOutlined,
  WifiOutlined,
  DisconnectOutlined,
} from '@ant-design/icons';
import { messages, contacts, notifications, communicationSystems } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const CommunicationSystem = () => {
  const [messageList, setMessageList] = useState(messages);
  const [contactList, setContactList] = useState(contacts);
  const [notificationList, setNotificationList] = useState(notifications);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [isCallModalVisible, setIsCallModalVisible] = useState(false);
  const [callType, setCallType] = useState('audio');
  const [callStatus, setCallStatus] = useState('calling'); // calling, connected, ended
  const [activeChat, setActiveChat] = useState(null);
  
  // 处理发送消息
  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedContact) return;
    
    const newMessage = {
      id: messageList.length + 1,
      sender: 'me',
      receiver: selectedContact.id,
      content: messageInput,
      time: new Date().toLocaleTimeString(),
      status: 'sent'
    };
    
    setMessageList([...messageList, newMessage]);
    setMessageInput('');
    
    // 模拟对方回复
    setTimeout(() => {
      const replyMessage = {
        id: messageList.length + 2,
        sender: selectedContact.id,
        receiver: 'me',
        content: `收到你的消息: "${messageInput}"`,
        time: new Date().toLocaleTimeString(),
        status: 'received'
      };
      
      setMessageList(prevMessages => [...prevMessages, replyMessage]);
    }, 2000);
  };
  
  // 处理选择联系人
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setActiveChat(contact);
  };
  
  // 处理发起通话
  const handleInitiateCall = (type) => {
    setCallType(type);
    setCallStatus('calling');
    setIsCallModalVisible(true);
    
    // 模拟通话接通
    setTimeout(() => {
      setCallStatus('connected');
    }, 3000);
  };
  
  // 处理结束通话
  const handleEndCall = () => {
    setCallStatus('ended');
    
    // 延迟关闭模态框
    setTimeout(() => {
      setIsCallModalVisible(false);
    }, 1000);
  };
  
  // 处理阅读通知
  const handleReadNotification = (notification) => {
    const updatedNotifications = notificationList.map(item => {
      if (item.id === notification.id) {
        return { ...item, read: true };
      }
      return item;
    });
    
    setNotificationList(updatedNotifications);
  };
  
  // 过滤当前联系人的消息
  const filteredMessages = selectedContact 
    ? messageList.filter(msg => 
        (msg.sender === 'me' && msg.receiver === selectedContact.id) || 
        (msg.sender === selectedContact.id && msg.receiver === 'me')
      )
    : [];
  
  // 未读通知数量
  const unreadCount = notificationList.filter(notification => !notification.read).length;

  // 处理系统测试
  const handleSystemTest = (systemId) => {
    message.loading('正在测试系统连接...');
    
    // 模拟异步测试过程
    setTimeout(() => {
      message.success('系统连接测试成功');
    }, 2000);
    
    // 在实际应用中，这里应该调用API测试系统连接
  };
  
  // 处理系统维护
  const handleSystemMaintenance = (systemId) => {
    message.info('系统维护功能尚未实现');
    // 在实际应用中，这里应该调用API进行系统维护
  };
  
  // 渲染系统状态标签
  const renderSystemStatus = (status) => {
    if (status === 'active') {
      return <Badge status="success" text="正常运行中" />;
    } else if (status === 'standby') {
      return <Badge status="warning" text="待机中" />;
    } else {
      return <Badge status="error" text="离线" />;
    }
  };

  return (
    <div>
      <Title level={2}>通信系统</Title>
      
      <Tabs 
        activeKey={activeTab} 
        onChange={setActiveTab}
        tabBarExtraContent={
          activeTab === 'notifications' ? (
            <Button 
              type="primary" 
              onClick={() => {
                const updatedNotifications = notificationList.map(item => ({ ...item, read: true }));
                setNotificationList(updatedNotifications);
                message.success('已将所有通知标记为已读');
              }}
            >
              全部标为已读
            </Button>
          ) : null
        }
      >
        <TabPane 
          tab={
            <span>
              <MessageOutlined />
              消息
            </span>
          } 
          key="messages"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card title="联系人列表" style={{ height: '70vh', overflowY: 'auto' }}>
                <Form.Item>
                  <Input.Search
                    placeholder="搜索联系人"
                    onSearch={(value) => {
                      const filteredContacts = contactList.filter(contact =>
                        contact.name.toLowerCase().includes(value.toLowerCase())
                      );
                      setContactList(filteredContacts);
                    }}
                  />
                </Form.Item>
                
                <List
                  dataSource={contactList}
                  renderItem={contact => (
                    <List.Item 
                      onClick={() => handleSelectContact(contact)}
                      style={{ 
                        cursor: 'pointer',
                        backgroundColor: activeChat && activeChat.id === contact.id ? '#f0f5ff' : 'transparent'
                      }}
                    >
                      <List.Item.Meta
                        avatar={
                          <Badge dot={contact.online} color="green">
                            <Avatar icon={<UserOutlined />} />
                          </Badge>
                        }
                        title={
                          <Space>
                            <Text strong>{contact.name}</Text>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              {contact.position}
                            </Text>
                          </Space>
                        }
                        description={
                          <Text ellipsis style={{ width: '100%' }}>
                            {contact.lastMessage}
                          </Text>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            
            <Col span={16}>
              <Card 
                title={
                  activeChat ? (
                    <Space>
                      <Text strong>{activeChat.name}</Text>
                      <Tag color="blue">{activeChat.department}</Tag>
                      {activeChat.online ? (
                        <Badge status="success" text="在线" />
                      ) : (
                        <Badge status="default" text="离线" />
                      )}
                    </Space>
                  ) : '选择联系人开始聊天'
                } 
                style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}
              >
                {activeChat ? (
                  <>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
                      {filteredMessages.map(msg => (
                        <div 
                          key={msg.id}
                          style={{
                            display: 'flex',
                            justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                            marginBottom: 16
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: msg.sender === 'me' ? '#1890ff' : '#f0f0f0',
                              color: msg.sender === 'me' ? 'white' : 'black',
                              padding: '8px 12px',
                              borderRadius: 8,
                              maxWidth: '70%'
                            }}
                          >
                            <div>{msg.content}</div>
                            <div style={{ 
                              fontSize: '12px', 
                              textAlign: 'right',
                              marginTop: 4,
                              opacity: 0.8
                            }}>
                              {msg.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ padding: '16px 0 0 0', borderTop: '1px solid #f0f0f0' }}>
                      <Input.TextArea
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="输入消息..."
                        autoSize={{ minRows: 2, maxRows: 4 }}
                        onPressEnter={(e) => {
                          if (!e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <div style={{ marginTop: 8, textAlign: 'right' }}>
                        <Button 
                          type="primary" 
                          icon={<SendOutlined />}
                          onClick={handleSendMessage}
                        >
                          发送
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    height: '100%',
                    color: '#999'
                  }}>
                    <Text type="secondary">请从左侧选择联系人开始聊天</Text>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <TeamOutlined />
              联系人
            </span>
          } 
          key="contacts"
        >
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={contactList}
              renderItem={contact => (
                <List.Item
                  actions={[
                    <Button 
                      icon={<MessageOutlined />} 
                      onClick={() => {
                        handleSelectContact(contact);
                        setActiveTab('messages');
                      }}
                    >
                      发消息
                    </Button>,
                    <Button 
                      icon={<PhoneOutlined />}
                      onClick={() => handleInitiateCall('audio')}
                    >
                      语音通话
                    </Button>,
                    <Button 
                      icon={<VideoCameraOutlined />}
                      onClick={() => handleInitiateCall('video')}
                    >
                      视频通话
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Badge dot={contact.online}>
                        <Avatar icon={<UserOutlined />} size={48} />
                      </Badge>
                    }
                    title={<Text strong>{contact.name}</Text>}
                    description={
                      <Space direction="vertical">
                        <Text>职位: {contact.position || '未知'}</Text>
                        <Text>部门: {contact.department || '未知'}</Text>
                        <Text>状态: {contact.online ? '在线' : '离线'}</Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <Badge count={unreadCount} size="small" offset={[5, 0]}>
                <BellOutlined />
                通知
              </Badge>
            </span>
          } 
          key="notifications"
        >
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={notificationList}
              renderItem={notification => (
                <List.Item
                  actions={[
                    <Button 
                      type="link" 
                      onClick={() => handleReadNotification(notification)}
                    >
                      {notification.read ? '已读' : '标为已读'}
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Badge dot={!notification.read} color="red">
                        <Avatar icon={<BellOutlined />} style={{ backgroundColor: notification.read ? '#d9d9d9' : '#1890ff' }} />
                      </Badge>
                    }
                    title={
                      <Space>
                        <Text strong={!notification.read}>{notification.title}</Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {notification.time}
                        </Text>
                      </Space>
                    }
                    description={notification.content}
                  />
                </List.Item>
              )}
            />
          </Card>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <WifiOutlined />
              系统状态
            </span>
          } 
          key="system-status"
        >
          <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={6}>
              <Card>
                <Statistic
                  title="在线系统"
                  value={communicationSystems.filter(s => s.status === 'active').length}
                  suffix={`/ ${communicationSystems.length}`}
                  valueStyle={{ color: '#3f8600' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="平均可靠性"
                  value={communicationSystems.reduce((sum, s) => sum + parseFloat(s.reliability), 0) / communicationSystems.length}
                  suffix="%"
                  precision={1}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="连接船舶数"
                  value={communicationSystems.reduce((sum, s) => sum + (s.connectedShips ? s.connectedShips.length : 0), 0)}
                  valueStyle={{ color: '#722ed1' }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="待维护系统"
                  value={communicationSystems.filter(s => {
                    const nextMaintenance = new Date(s.nextMaintenance);
                    const now = new Date();
                    const diffDays = Math.ceil((nextMaintenance - now) / (1000 * 60 * 60 * 24));
                    return diffDays <= 7;
                  }).length}
                  valueStyle={{ color: communicationSystems.filter(s => {
                    const nextMaintenance = new Date(s.nextMaintenance);
                    const now = new Date();
                    const diffDays = Math.ceil((nextMaintenance - now) / (1000 * 60 * 60 * 24));
                    return diffDays <= 3;
                  }).length > 0 ? '#cf1322' : '#faad14' }}
                />
              </Card>
            </Col>
          </Row>
          
          <Card title="通信系统状态">
            <List
              itemLayout="horizontal"
              dataSource={communicationSystems}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button 
                      type="primary" 
                      size="small"
                      onClick={() => handleSystemTest(item.id)}
                    >
                      测试连接
                    </Button>,
                    <Button 
                      size="small"
                      onClick={() => handleSystemMaintenance(item.id)}
                    >
                      系统维护
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar 
                        icon={item.status === 'active' ? <WifiOutlined /> : <DisconnectOutlined />} 
                        style={{ 
                          backgroundColor: item.status === 'active' ? '#52c41a' : 
                                          item.status === 'standby' ? '#faad14' : '#f5222d' 
                        }} 
                      />
                    }
                    title={
                      <Space>
                        <Text strong>{item.name}</Text>
                        <Tag color="blue">{item.type}</Tag>
                        {renderSystemStatus(item.status)}
                      </Space>
                    }
                    description={
                      <>
                        <div>覆盖范围: {item.coverage}</div>
                        <div>带宽: {item.bandwidth} | 延迟: {item.latency} | 可靠性: {item.reliability}</div>
                        <div>
                          上次维护: {item.lastMaintenance} | 
                          下次维护: {item.nextMaintenance}
                        </div>
                        {item.connectedShips && item.connectedShips.length > 0 && (
                          <div>
                            已连接船舶: {item.connectedShips.join(', ')}
                          </div>
                        )}
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </TabPane>
      </Tabs>
      
      {/* 通话模态框 */}
      <Modal
        title={`${callType === 'audio' ? '语音' : '视频'}通话 - ${selectedContact ? selectedContact.name : ''}`}
        open={isCallModalVisible}
        footer={[
          <Button 
            key="end" 
            type="primary" 
            danger
            onClick={handleEndCall}
          >
            结束通话
          </Button>
        ]}
        onCancel={handleEndCall}
        centered
      >
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <div style={{ marginTop: 16 }}>
            <Title level={4}>{selectedContact ? selectedContact.name : ''}</Title>
            <Text>
              {callStatus === 'calling' ? '正在呼叫...' : 
               callStatus === 'connected' ? `通话时长: 00:00:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}` : 
               '通话已结束'}
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <Space>
              <Button icon={<AudioOutlined />} disabled={callType !== 'audio'}>静音</Button>
              <Button icon={<PhoneOutlined />} type="primary" danger onClick={handleEndCall}>挂断</Button>
              {callType === 'video' && <Button icon={<VideoCameraOutlined />}>关闭摄像头</Button>}
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CommunicationSystem; 