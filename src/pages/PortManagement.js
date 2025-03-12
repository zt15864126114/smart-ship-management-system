import React from 'react';
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
  Statistic,
  Progress,
  Tag,
  Timeline,
  Alert
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { ports } from '../mock/data';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

// 获取梁山港数据并设置默认值
const defaultPort = {
  name: '梁山港',
  basicInfo: {
    location: '山东省济宁市梁山县',
    area: 82000, // 实际港区面积（平方米）
    berthCount: 8, // 实际泊位数
    maxShipSize: 3000, // 最大停泊吨位
    waterDepth: 4.5, // 实际水深（米）
    totalStorageArea: 45000, // 实际堆场面积
    coordinates: '35°44\'N 116°07\'E', // 实际坐标
    established: '1987年', // 实际成立时间
    portClass: '国家二类内河港口' // 实际港口等级
  },
  facilities: [
    { name: '散货码头', count: 4, status: '运营中', efficiency: 88 },
    { name: '件杂货码头', count: 3, status: '运营中', efficiency: 85 },
    { name: '集装箱码头', count: 1, status: '运营中', efficiency: 82 }
  ],
  equipment: [
    { 
      name: '门机', 
      count: 6, 
      status: '运营中', 
      maintenanceDate: '2025-03-15',
      lastMaintenance: '2025-02-15'
    },
    { 
      name: '轮胎式起重机', 
      count: 3, 
      status: '运营中', 
      maintenanceDate: '2025-03-20',
      lastMaintenance: '2025-02-20'
    },
    { 
      name: '叉车', 
      count: 12, 
      status: '运营中', 
      maintenanceDate: '2025-03-10',
      lastMaintenance: '2025-02-10'
    },
    { 
      name: '输送带', 
      count: 4, 
      status: '运营中', 
      maintenanceDate: '2025-03-25',
      lastMaintenance: '2025-02-25'
    }
  ],
  operationData: {
    dailyThroughput: 12000, // 日吞吐量（吨）
    monthlyThroughput: 360000, // 月吞吐量（吨）
    yearlyThroughput: 4320000, // 年吞吐量（吨）
    yearOverYearGrowth: 6.8, // 同比增长
    monthOverMonthGrowth: 2.5, // 环比增长
    vesselCount: {
      current: 6, // 当前在港船舶
      monthly: 180, // 月均靠泊数
      yearTotal: 2160 // 年累计船舶数
    },
    cargoTypes: {
      bulk: 70, // 散货比例
      container: 10, // 集装箱比例
      general: 20 // 件杂货比例
    },
    efficiency: {
      berthOccupancy: 75, // 泊位占用率
      loadingRate: 82, // 装卸效率
      turnoverTime: 16 // 平均周转时间（小时）
    }
  },
  weatherInfo: {
    temperature: 22, // 温度
    windSpeed: 2, // 风速
    humidity: 62, // 湿度
    visibility: 8, // 能见度
    forecast: '多云' // 天气预报
  }
};

const port = {
  ...defaultPort,
  ...(ports[0] || {}),
  basicInfo: {
    ...defaultPort.basicInfo,
    ...(ports[0]?.basicInfo || {})
  },
  facilities: ports[0]?.facilities || defaultPort.facilities,
  equipment: defaultPort.equipment, // 直接使用默认设备数据，确保维护日期存在
  operationData: {
    ...defaultPort.operationData,
    ...(ports[0]?.operationData || {}),
    vesselCount: {
      ...defaultPort.operationData.vesselCount,
      ...(ports[0]?.operationData?.vesselCount || {})
    },
    cargoTypes: {
      ...defaultPort.operationData.cargoTypes,
      ...(ports[0]?.operationData?.cargoTypes || {})
    }
  }
};

const PortManagement = () => {
  // 生成货物类型数据
  const cargoTypeData = [
    { value: port.operationData.cargoTypes.bulk || 60, name: '散货' },
    { value: port.operationData.cargoTypes.container || 30, name: '集装箱' },
    { value: port.operationData.cargoTypes.general || 10, name: '件杂货' }
  ];

  // 设施状态渲染函数
  const renderStatus = (status) => {
    return (
      <Tag color="success">
        运营中
      </Tag>
    );
  };

  return (
    <div style={{ padding: '24px', background: '#f0f2f5' }}>
      {/* 头部概览 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Title level={2} style={{ marginBottom: '8px' }}>梁山港基本信息</Title>
            <Divider />
            <Descriptions bordered column={3}>
              <Descriptions.Item label="港口位置" span={3}>
                <EnvironmentOutlined /> {port.basicInfo.location}
              </Descriptions.Item>
              <Descriptions.Item label="港区面积">
                {port.basicInfo.area.toLocaleString()} 平方米
              </Descriptions.Item>
              <Descriptions.Item label="泊位总数">
                {port.basicInfo.berthCount} 个
              </Descriptions.Item>
              <Descriptions.Item label="最大停泊吨位">
                {port.basicInfo.maxShipSize.toLocaleString()} 吨
              </Descriptions.Item>
              <Descriptions.Item label="水深">
                {port.basicInfo.waterDepth} 米
              </Descriptions.Item>
              <Descriptions.Item label="堆场面积">
                {port.basicInfo.totalStorageArea.toLocaleString()} 平方米
              </Descriptions.Item>
              <Descriptions.Item label="港口等级">
                国家一类开放口岸
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* 主要内容区 */}
      <Tabs defaultActiveKey="facilities">
        <TabPane tab="码头设施" key="facilities">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Card title="码头设施概况">
                <Table
                  dataSource={port.facilities}
                  columns={[
                    { title: '设施类型', dataIndex: 'name' },
                    { title: '数量', dataIndex: 'count' },
                    { 
                      title: '状态', 
                      dataIndex: 'status',
                      render: renderStatus
                    },
                    {
                      title: '运行效率',
                      dataIndex: 'efficiency',
                      render: (efficiency) => (
                        <Progress 
                          percent={efficiency} 
                          size="small" 
                          status="active"
                          strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }}
                        />
                      )
                    }
                  ]}
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="设备配置">
                <Table
                  dataSource={port.equipment}
                  columns={[
                    { title: '设备类型', dataIndex: 'name' },
                    { title: '数量', dataIndex: 'count' },
                    { 
                      title: '状态', 
                      dataIndex: 'status',
                      render: renderStatus
                    },
                    {
                      title: '维护信息',
                      dataIndex: 'maintenanceDate',
                      render: (date, record) => {
                        const today = new Date();
                        const maintDate = new Date(date);
                        const daysUntil = Math.ceil((maintDate - today) / (1000 * 60 * 60 * 24));
                        
                        return (
                          <Space direction="vertical">
                            <Text>上次维护: {record.lastMaintenance}</Text>
                            <Space>
                              <Text>下次维护: {date}</Text>
                              {daysUntil <= 7 && (
                                <Tag color="warning">
                                  {daysUntil <= 0 ? '需要维护' : `${daysUntil}天后维护`}
                                </Tag>
                              )}
                            </Space>
                          </Space>
                        );
                      }
                    }
                  ]}
                  pagination={false}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="运营数据" key="operation">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="日吞吐量"
                      value={port.operationData.dailyThroughput || 0}
                      suffix="吨"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="月吞吐量"
                      value={port.operationData.monthlyThroughput || 0}
                      suffix="吨"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="年吞吐量"
                      value={port.operationData.yearlyThroughput || 0}
                      suffix="吨"
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Card title="货物类型分布">
                <ReactECharts
                  option={{
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b}: {c}%'
                    },
                    legend: {
                      orient: 'vertical',
                      left: 'left'
                    },
                    series: [
                      {
                        type: 'pie',
                        radius: ['40%', '70%'],
                        data: cargoTypeData
                      }
                    ]
                  }}
                  style={{ height: '300px' }}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="船舶统计">
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Statistic
                      title="在港船舶数"
                      value={port.operationData.vesselCount.current || 0}
                      suffix="艘"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="月均靠泊数"
                      value={port.operationData.vesselCount.monthly || 0}
                      suffix="艘"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PortManagement; 