import React from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Typography,
  Badge, 
  Space, 
  Button,
  Tabs,
  List,
  Tag,
  Progress,
  Divider
} from 'antd';
import { 
  ArrowUpOutlined, 
  ArrowDownOutlined,
  EnvironmentOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  RocketOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { ships, ports, alerts } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Dashboard = () => {
// 统计数据
  const statistics = {
    shipCount: ships.length,
    shipIncrease: 5.2,
    portCount: ports.length,
    portIncrease: 0,
    alertCount: alerts.filter(alert => alert.status === '未处理').length,
    alertDecrease: 12.5,
    cargoVolume: 125600,
    cargoIncrease: 8.1
  };
  
  // 最近预警
  const recentAlerts = alerts.slice(0, 5);
  
  // 船舶状态统计
  const shipStatusStats = {
    docked: ships.filter(ship => ship.status === '停泊中').length,
    sailing: ships.filter(ship => ship.status === '航行中').length,
    maintenance: ships.filter(ship => ship.status === '维修中').length
  };
  
  // 船舶状态图表选项
  const shipStatusOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['停泊中', '航行中', '维修中']
    },
    series: [
      {
        name: '船舶状态',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
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
          { value: shipStatusStats.docked, name: '停泊中' },
          { value: shipStatusStats.sailing, name: '航行中' },
          { value: shipStatusStats.maintenance, name: '维修中' }
        ]
      }
    ]
  };
  
  // 货物吞吐量趋势图表选项
  const cargoThroughputOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['散货', '集装箱', '液体货物']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '吨',
        min: 0,
        interval: 10000,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '散货',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [32000, 30000, 34000, 38000, 40000, 42000]
      },
      {
        name: '集装箱',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [18000, 19000, 20000, 22000, 23000, 25000]
      },
      {
        name: '液体货物',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [15000, 14000, 16000, 17000, 18000, 19000]
      }
    ]
  };
  
  // 港口利用率图表选项
  const portUtilizationOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['泊位利用率', '仓储利用率', '设备利用率']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ports.map(port => port.name)
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '%',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '泊位利用率',
        type: 'bar',
        data: [78, 65, 83]
      },
      {
        name: '仓储利用率',
        type: 'bar',
        data: [82, 70, 75]
      },
      {
        name: '设备利用率',
        type: 'bar',
        data: [85, 80, 90]
      }
    ]
  };
  
  // 最近任务
  const recentTasks = [
    { id: 1, name: '济宁港货物装卸', status: '进行中', progress: 65, deadline: '2023-06-15' },
    { id: 2, name: '微山港设备维护', status: '已完成', progress: 100, deadline: '2023-06-10' },
    { id: 3, name: '梁山港安全检查', status: '进行中', progress: 30, deadline: '2023-06-20' },
    { id: 4, name: '船舶年度检修计划', status: '待开始', progress: 0, deadline: '2023-06-25' },
    { id: 5, name: '港口扩建项目评估', status: '进行中', progress: 45, deadline: '2023-06-30' }
  ];

  return (
    <div>
      <Title level={2}>系统概览</Title>
      
      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="船舶总数"
              value={statistics.shipCount}
              precision={0}
              valueStyle={{ color: '#1890ff' }}
              prefix={<RocketOutlined />}
              suffix="艘"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#3f8600', marginLeft: 8 }}>
                  <ArrowUpOutlined /> {statistics.shipIncrease}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="港口数量"
              value={statistics.portCount}
              precision={0}
              valueStyle={{ color: '#52c41a' }}
              prefix={<EnvironmentOutlined />}
              suffix="个"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ marginLeft: 8 }}>
                  {statistics.portIncrease}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="未处理预警"
              value={statistics.alertCount}
              precision={0}
              valueStyle={{ color: '#ff4d4f' }}
              prefix={<AlertOutlined />}
              suffix="条"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#52c41a', marginLeft: 8 }}>
                  <ArrowDownOutlined /> {statistics.alertDecrease}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="本月货物吞吐量"
              value={statistics.cargoVolume}
              precision={0}
              valueStyle={{ color: '#faad14' }}
              prefix={<DashboardOutlined />}
              suffix="吨"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#3f8600', marginLeft: 8 }}>
                  <ArrowUpOutlined /> {statistics.cargoIncrease}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* 图表和列表 */}
      <Row gutter={16}>
        <Col span={12}>
          <Card title="船舶状态分布" style={{ marginBottom: 16 }}>
            <ReactECharts option={shipStatusOption} style={{ height: 300 }} />
          </Card>
          
          <Card title="最近预警" style={{ marginBottom: 16 }}>
            <List
              size="small"
              dataSource={recentAlerts}
              renderItem={alert => (
                <List.Item
                  actions={[
                    <Button size="small" type="link">
                      查看
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Space>
                        <Text>{alert.type}</Text>
                        <Badge 
                          status={
                            alert.level === '高' ? 'error' : 
                            alert.level === '中' ? 'warning' : 'success'
                          } 
                          text={alert.level} 
                        />
                      </Space>
                    }
                    description={
                      <Space>
                        <Text type="secondary">{alert.time}</Text>
                        <Text type="secondary">
                          {alert.ship || (alert.ships && alert.ships.join(', '))}
                        </Text>
                      </Space>
                    }
                  />
                  <Badge 
                    status={
                      alert.status === '未处理' ? 'error' : 
                      alert.status === '处理中' ? 'processing' : 'success'
                    } 
                    text={alert.status} 
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        
        <Col span={12}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="货物吞吐量趋势" key="1">
              <ReactECharts option={cargoThroughputOption} style={{ height: 300 }} />
            </TabPane>
            <TabPane tab="港口利用率" key="2">
              <ReactECharts option={portUtilizationOption} style={{ height: 300 }} />
            </TabPane>
          </Tabs>
          
          <Divider style={{ margin: '16px 0' }} />
          
          <Card title="最近任务">
            <List
              size="small"
              dataSource={recentTasks}
              renderItem={task => (
                <List.Item
                  actions={[
                    <Button size="small" type="link">
                      详情
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Space>
                        <Text>{task.name}</Text>
                        <Tag color={
                          task.status === '已完成' ? 'success' : 
                          task.status === '进行中' ? 'processing' : 'default'
                        }>
                          {task.status === '已完成' ? <CheckCircleOutlined /> : 
                           task.status === '进行中' ? <SyncOutlined spin /> : 
                           <ClockCircleOutlined />} {task.status}
                        </Tag>
                      </Space>
                    }
                    description={
                      <div>
                        <Progress percent={task.progress} size="small" />
                        <Text type="secondary">截止日期: {task.deadline}</Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 