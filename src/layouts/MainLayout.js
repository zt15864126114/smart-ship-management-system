import React, { useState } from 'react';
import { Layout, Menu, Typography, Avatar, Dropdown, Space, Badge } from 'antd';
import { 
  DashboardOutlined, 
  RocketOutlined, 
  BankOutlined, 
  RadarChartOutlined, 
  AlertOutlined, 
  ThunderboltOutlined, 
  AreaChartOutlined, 
  FileTextOutlined, 
  FundOutlined, 
  WifiOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  // 获取当前路径
  const currentPath = location.pathname;
  
  // 用户下拉菜单
  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        个人资料
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  
  // 通知下拉菜单
  const notificationMenu = (
    <Menu>
      <Menu.Item key="notification1">
        <Text strong>系统更新通知</Text>
        <div>系统将于今晚22:00-23:00进行例行维护更新</div>
      </Menu.Item>
      <Menu.Item key="notification2">
        <Text strong>安全演习通知</Text>
        <div>定于明天下午14:00在梁山港区进行安全应急演习</div>
      </Menu.Item>
      <Menu.Item key="notification3">
        <Text strong>会议提醒</Text>
        <div>港口运营月度例会将于本周五上午9:00举行</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="all-notifications">
        <Link to="/notifications">查看所有通知</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ 
          height: '64px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: collapsed ? 'center' : 'flex-start',
          padding: collapsed ? '0' : '0 16px',
        }}>
          {collapsed ? (
            <RocketOutlined style={{ color: 'white', fontSize: '24px' }} />
          ) : (
            <Title level={4} style={{ color: 'white', margin: 0 }}>船舶管理系统</Title>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentPath]}
          defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        >
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to="/">仪表盘</Link>
          </Menu.Item>
          <Menu.Item key="/ship-management" icon={<RocketOutlined />}>
            <Link to="/ship-management">船舶管理</Link>
          </Menu.Item>
          <Menu.Item key="/port-management" icon={<BankOutlined />}>
            <Link to="/port-management">港口管理</Link>
          </Menu.Item>
          <Menu.Item key="/monitoring-system" icon={<RadarChartOutlined />}>
            <Link to="/monitoring-system">监控系统</Link>
          </Menu.Item>
          <Menu.Item key="/alert-system" icon={<AlertOutlined />}>
            <Link to="/alert-system">预警系统</Link>
          </Menu.Item>
          <Menu.Item key="/emergency-response" icon={<ThunderboltOutlined />}>
            <Link to="/emergency-response">应急响应</Link>
          </Menu.Item>
          <Menu.Item key="/data-visualization" icon={<AreaChartOutlined />}>
            <Link to="/data-visualization">数据可视化</Link>
          </Menu.Item>
          <Menu.Item key="/report-generation" icon={<FileTextOutlined />}>
            <Link to="/report-generation">报表生成</Link>
          </Menu.Item>
          <Menu.Item key="/data-analysis" icon={<FundOutlined />}>
            <Link to="/data-analysis">数据分析</Link>
          </Menu.Item>
          <Menu.Item key="/communication-system" icon={<WifiOutlined />}>
            <Link to="/communication-system">通信系统</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="/system-settings" icon={<SettingOutlined />}>
            <Link to="/system-settings">系统设置</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <Header style={{ 
          background: '#fff', 
          padding: '0 16px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
        }}>
          <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
              style: { fontSize: '18px' }
            })}
          </div>
          <Space size="large">
            <Dropdown overlay={notificationMenu} trigger={['click']}>
              <Badge count={3} overflowCount={99}>
                <Avatar 
                  icon={<BellOutlined />} 
                  style={{ backgroundColor: '#fff', color: '#1890ff', cursor: 'pointer' }} 
                />
              </Badge>
            </Dropdown>
            <Dropdown overlay={userMenu} trigger={['click']}>
              <Space style={{ cursor: 'pointer' }}>
                <Avatar icon={<UserOutlined />} />
                <Text>管理员</Text>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          background: '#fff', 
          minHeight: 280 
        }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 