import React from 'react';
import { Card, Row, Col, Typography, Button, Space, Statistic } from 'antd';
import { 
  RocketOutlined, 
  BankOutlined, 
  RadarChartOutlined, 
  AlertOutlined,
  DashboardOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { statistics } from '../mock/data';

const { Title, Paragraph } = Typography;

const Welcome = () => {
  return (
    <div className="welcome-page">
      {/* 欢迎标语 */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title>欢迎使用梁山港智慧船舶管控系统</Title>
        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          集成船舶监控、港口管理、预警系统于一体的现代化智能管理平台
        </Paragraph>
      </div>

      {/* 统计数据 */}
      <Row gutter={[24, 24]} style={{ marginBottom: 48 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="在航船舶"
              value={statistics.shipCount.sailing}
              prefix={<RocketOutlined />}
              valueStyle={{ color: '#1890ff' }}
              suffix="艘"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="泊位总数"
              value={statistics.portStatistics.totalBerths}
              prefix={<BankOutlined />}
              valueStyle={{ color: '#52c41a' }}
              suffix="个"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日预警"
              value={statistics.alertStatistics.total}
              prefix={<AlertOutlined />}
              valueStyle={{ color: '#faad14' }}
              suffix="条"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="通信系统在线"
              value={statistics.communicationStatistics.systemsOnline}
              prefix={<GlobalOutlined />}
              valueStyle={{ color: '#722ed1' }}
              suffix="个"
            />
          </Card>
        </Col>
      </Row>

      {/* 快速导航 */}
      <Title level={3} style={{ marginBottom: 24 }}>快速导航</Title>
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Link to="/monitoring-system">
            <Card hoverable>
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <RadarChartOutlined style={{ fontSize: 32, color: '#1890ff' }} />
                <Title level={4}>实时监控</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 0 }}>
                  查看船舶实时位置、航行状态和轨迹信息
                </Paragraph>
              </Space>
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/ship-management">
            <Card hoverable>
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <RocketOutlined style={{ fontSize: 32, color: '#52c41a' }} />
                <Title level={4}>船舶管理</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 0 }}>
                  管理船舶信息、证书和维护计划
                </Paragraph>
              </Space>
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/port-management">
            <Card hoverable>
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <BankOutlined style={{ fontSize: 32, color: '#faad14' }} />
                <Title level={4}>港口管理</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 0 }}>
                  港口设施、泊位和货物管理
                </Paragraph>
              </Space>
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/alert-system">
            <Card hoverable>
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <AlertOutlined style={{ fontSize: 32, color: '#ff4d4f' }} />
                <Title level={4}>预警系统</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 0 }}>
                  实时监测和处理各类预警信息
                </Paragraph>
              </Space>
            </Card>
          </Link>
        </Col>
      </Row>

      {/* 系统特点 */}
      <Title level={3} style={{ margin: '48px 0 24px' }}>系统特点</Title>
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Card>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <DashboardOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <Title level={5}>智能监控</Title>
              <Paragraph style={{ textAlign: 'center' }}>
                实时监控船舶位置和状态，支持智能跟踪和轨迹回放
              </Paragraph>
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <SafetyCertificateOutlined style={{ fontSize: 24, color: '#52c41a' }} />
              <Title level={5}>安全管理</Title>
              <Paragraph style={{ textAlign: 'center' }}>
                完善的预警机制和应急响应系统，确保航行安全
              </Paragraph>
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <GlobalOutlined style={{ fontSize: 24, color: '#faad14' }} />
              <Title level={5}>智能调度</Title>
              <Paragraph style={{ textAlign: 'center' }}>
                智能化的港口调度和资源分配，提高运营效率
              </Paragraph>
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <TeamOutlined style={{ fontSize: 24, color: '#722ed1' }} />
              <Title level={5}>协同管理</Title>
              <Paragraph style={{ textAlign: 'center' }}>
                多部门协同工作，提高管理效率和服务质量
              </Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome; 