import React, { useState } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Typography, 
  Tabs, 
  Select, 
  Button, 
  Space,
  Table,
  Tooltip,
  Divider,
  List,
  Tag,
  Statistic
} from 'antd';
import { 
  AreaChartOutlined, 
  BarChartOutlined, 
  PieChartOutlined,
  ReloadOutlined,
  DownloadOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { analysisData, ports } from '../mock/data';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const DataAnalysis = () => {
  const [setTimeRange] = useState('month');
  const [setPortSelection] = useState(['all']);
  const [dataRefreshTime, setDataRefreshTime] = useState(new Date().toLocaleString());
  
  // 处理刷新数据
  const handleRefreshData = () => {
    setDataRefreshTime(new Date().toLocaleString());
  };
  
  // 处理下载数据
  const handleDownloadData = (dataType) => {
    console.log(`下载${dataType}数据`);
    // 在实际应用中，这里应该调用API下载数据
  };
  
  // 交通流量趋势图表选项
  const trafficTrendOption = {
    title: {
      text: '船舶交通趋势分析',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['货船', '集装箱船', '油轮', '客船', '总量'],
      top: 30
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
        boundaryGap: false,
        data: analysisData.trafficTrends.map(item => item.date)
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '船舶数量'
      }
    ],
    series: [
      {
        name: '货船',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: analysisData.trafficTrends.map(item => item.cargoShips)
      },
      {
        name: '集装箱船',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: analysisData.trafficTrends.map(item => item.containerShips)
      },
      {
        name: '油轮',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: analysisData.trafficTrends.map(item => item.tankers)
      },
      {
        name: '客船',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: analysisData.trafficTrends.map(item => item.passengerShips)
      },
      {
        name: '总量',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: analysisData.trafficTrends.map(item => 
          item.cargoShips + item.containerShips + item.tankers + item.passengerShips
        )
      }
    ]
  };
  
  // 安全分析图表选项
  const safetyAnalysisOption = {
    title: {
      text: '安全事件分析',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: analysisData.safetyAnalysis.map(item => item.name)
    },
    series: [
      {
        name: '事件类型',
        type: 'pie',
        radius: ['40%', '70%'],
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
        data: analysisData.safetyAnalysis
      }
    ]
  };
  
  // 安全趋势图表选项
  const getSafetyTrendOption = () => {
    return {
      title: {
        text: '安全事件趋势',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['碰撞事件', '搁浅事件', '火灾事件', '其他事件'],
        top: 30
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value',
        name: '事件数量'
      },
      series: [
        {
          name: '碰撞事件',
          type: 'bar',
          data: [3, 2, 4, 3, 5, 4],
          itemStyle: {
            color: '#ff4d4f'
          }
        },
        {
          name: '搁浅事件',
          type: 'bar',
          data: [2, 1, 2, 3, 2, 3],
          itemStyle: {
            color: '#faad14'
          }
        },
        {
          name: '火灾事件',
          type: 'bar',
          data: [1, 0, 1, 0, 1, 1],
          itemStyle: {
            color: '#ff7a45'
          }
        },
        {
          name: '其他事件',
          type: 'bar',
          data: [5, 4, 6, 5, 7, 6],
          itemStyle: {
            color: '#1890ff'
          }
        }
      ]
    };
  };
  
  // 效率分析雷达图表选项
  const getEfficiencyRadarOption = () => {
    return {
      title: {
        text: '港口效率雷达图',
        left: 'center'
      },
      tooltip: {},
      legend: {
        data: ['梁山港', '济宁港', '微山港'],
        top: 30
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '装卸效率', max: 100 },
          { name: '通关效率', max: 100 },
          { name: '仓储效率', max: 100 },
          { name: '运输效率', max: 100 },
          { name: '人员效率', max: 100 }
        ]
      },
      series: [
        {
          name: '港口效率对比',
          type: 'radar',
          data: [
            {
              value: [85, 78, 92, 88, 82],
              name: '梁山港'
            },
            {
              value: [80, 75, 85, 90, 78],
              name: '济宁港'
            },
            {
              value: [75, 82, 80, 85, 88],
              name: '微山港'
            }
          ]
        }
      ]
    };
  };
  
  // 燃油消耗图表选项
  const getFuelConsumptionOption = () => {
    return {
      title: {
        text: '船舶燃油消耗分析',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: {
        data: ['燃油消耗量', '平均速度', '航行距离'],
        top: 30
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '燃油消耗量(吨)',
          min: 0,
          max: 250,
          interval: 50
        },
        {
          type: 'value',
          name: '速度/距离',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: '燃油消耗量',
          type: 'bar',
          data: [120, 110, 130, 140, 150, 160]
        },
        {
          name: '平均速度',
          type: 'line',
          yAxisIndex: 1,
          data: [12.5, 12.0, 12.8, 13.2, 13.5, 13.8]
        },
        {
          name: '航行距离',
          type: 'line',
          yAxisIndex: 1,
          data: [15.2, 14.8, 16.5, 17.2, 18.5, 19.2]
        }
      ]
    };
  };
  
  // 决策建议
  const recommendations = [
    {
      id: 1,
      title: '优化港口调度',
      description: '根据交通流量分析，建议在高峰期增加港口调度人员，优化船舶进出港安排，减少等待时间。',
      impact: '高',
      category: '运营优化'
    },
    {
      id: 2,
      title: '加强安全预警',
      description: '根据安全分析，碰撞预警和超速预警占比较高，建议加强对这两类情况的监控和预警。',
      impact: '高',
      category: '安全管理'
    },
    {
      id: 3,
      title: '提高燃油效率',
      description: '梁山4号船舶燃油效率较低，建议进行发动机检修和优化，可节约约15%的燃油消耗。',
      impact: '中',
      category: '成本控制'
    },
    {
      id: 4,
      title: '扩展济宁港泊位',
      description: '济宁港泊位利用率持续保持在高位，建议考虑扩建泊位，提高港口吞吐能力。',
      impact: '高',
      category: '基础设施'
    },
    {
      id: 5,
      title: '优化航线安排',
      description: '通过分析历史航行数据，建议调整部分航线，可减少约10%的航行时间和燃油消耗。',
      impact: '中',
      category: '运营优化'
    }
  ];
  
  // 表格列定义
  const recommendationColumns = [
    {
      title: '建议标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category',
      render: category => {
        let color = 'blue';
        if (category === '安全管理') {
          color = 'red';
        } else if (category === '成本控制') {
          color = 'green';
        } else if (category === '基础设施') {
          color = 'purple';
        }
        return <Tag color={color}>{category}</Tag>;
      },
      filters: [
        { text: '运营优化', value: '运营优化' },
        { text: '安全管理', value: '安全管理' },
        { text: '成本控制', value: '成本控制' },
        { text: '基础设施', value: '基础设施' },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: '影响程度',
      dataIndex: 'impact',
      key: 'impact',
      render: impact => {
        let color = 'green';
        if (impact === '高') {
          color = 'red';
        } else if (impact === '中') {
          color = 'orange';
        }
        return <Tag color={color}>{impact}</Tag>;
      },
      filters: [
        { text: '高', value: '高' },
        { text: '中', value: '中' },
        { text: '低', value: '低' },
      ],
      onFilter: (value, record) => record.impact === value,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="查看详情">
            <Button 
              type="primary" 
              icon={<InfoCircleOutlined />} 
              size="small"
              onClick={() => console.log('查看建议详情:', record)}
            />
          </Tooltip>
          <Tooltip title="应用建议">
            <Button 
              icon={<BulbOutlined />} 
              size="small"
              onClick={() => console.log('应用建议:', record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>数据分析</Title>
      
      {/* 分析控制面板 */}
      <Card style={{ marginBottom: 16 }}>
        <Space size="large" wrap>
          <Space>
            <Text strong>时间范围:</Text>
            <Select 
              defaultValue="month" 
              style={{ width: 120 }} 
              onChange={value => setTimeRange(value)}
            >
              <Option value="day">日</Option>
              <Option value="month">月</Option>
              <Option value="year">年</Option>
            </Select>
          </Space>
          
          <Space>
            <Text strong>港口选择:</Text>
            <Select 
              mode="multiple" 
              defaultValue={['all']} 
              style={{ width: 300 }} 
              onChange={value => setPortSelection(value)}
            >
              <Option value="all">全部港口</Option>
              {ports.map(port => (
                <Option key={port.id} value={port.name}>{port.name}</Option>
              ))}
            </Select>
          </Space>
          
          <Button 
            type="primary" 
            icon={<ReloadOutlined />}
            onClick={handleRefreshData}
          >
            刷新数据
          </Button>
          
          <Button 
            icon={<DownloadOutlined />} 
            onClick={() => handleDownloadData('all')}
          >
            下载数据
          </Button>
          
          <Text type="secondary">数据更新时间: {dataRefreshTime}</Text>
        </Space>
      </Card>
      
      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="船舶总流量"
              value={analysisData.statistics.totalTraffic}
              precision={0}
              valueStyle={{ color: '#1890ff' }}
              suffix="艘次"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#3f8600', marginLeft: 8 }}>
                  <ArrowUpOutlined /> {analysisData.statistics.trafficGrowth}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="货物吞吐量"
              value={analysisData.statistics.cargoVolume}
              precision={0}
              valueStyle={{ color: '#52c41a' }}
              suffix="吨"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#3f8600', marginLeft: 8 }}>
                  <ArrowUpOutlined /> {analysisData.statistics.cargoGrowth}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="安全事件"
              value={analysisData.statistics.safetyIncidents}
              precision={0}
              valueStyle={{ color: '#ff4d4f' }}
              suffix="起"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#52c41a', marginLeft: 8 }}>
                  <ArrowDownOutlined /> {analysisData.statistics.safetyImprovement}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="平均港口效率"
              value={analysisData.statistics.portEfficiency}
              precision={1}
              valueStyle={{ color: '#faad14' }}
              suffix="%"
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">
                较上月
                <span style={{ color: '#3f8600', marginLeft: 8 }}>
                  <ArrowUpOutlined /> {analysisData.statistics.efficiencyGrowth}%
                </span>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* 分析内容 */}
      <Tabs defaultActiveKey="traffic">
        <TabPane 
          tab={
            <span>
              <AreaChartOutlined />
              交通流量分析
            </span>
          } 
          key="traffic"
        >
          <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={24}>
              <Card title="船舶交通趋势分析">
                <ReactECharts option={trafficTrendOption} style={{ height: 400 }} />
              </Card>
            </Col>
          </Row>
          
          <Divider orientation="left">分析结论</Divider>
          
          <Row gutter={16}>
            <Col span={16}>
              <Card>
                <Paragraph>
                  <Text strong>交通流量趋势分析结论：</Text>
                </Paragraph>
                <Paragraph>
                  1. 济宁港的吞吐量始终保持领先，月均吞吐量约为54万吨，比梁山港高出约20%。
                </Paragraph>
                <Paragraph>
                  2. 所有港口在5月份均出现吞吐量增长，其中济宁港增长最为明显，环比增长约3%。
                </Paragraph>
                <Paragraph>
                  3. 微山港吞吐量相对稳定，波动较小，表明其业务类型较为固定。
                </Paragraph>
                <Paragraph>
                  4. 从整体趋势看，三个港口的吞吐量呈现稳中有升的态势，预计未来将继续保持增长。
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="关键指标">
                <List
                  size="small"
                  bordered
                  dataSource={[
                    { label: '最高月吞吐量', value: '55万吨 (济宁港 5月)' },
                    { label: '最低月吞吐量', value: '22万吨 (微山港 1月)' },
                    { label: '平均增长率', value: '1.2% (环比)' },
                    { label: '吞吐量预测', value: '预计下月增长1.5%' }
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Text strong>{item.label}:</Text> {item.value}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <PieChartOutlined />
              安全分析
            </span>
          } 
          key="safety"
        >
          <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={12}>
              <Card title="安全事件分析">
                <ReactECharts option={safetyAnalysisOption} style={{ height: 400 }} />
              </Card>
            </Col>
            <Col span={12}>
              <Card 
                title="安全事件趋势" 
                extra={
                  <Button 
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownloadData('safety-trend')}
                  >
                    下载数据
                  </Button>
                }
              >
                <ReactECharts option={getSafetyTrendOption()} style={{ height: 350 }} />
              </Card>
            </Col>
          </Row>
          
          <Divider orientation="left">分析结论</Divider>
          
          <Row gutter={16}>
            <Col span={16}>
              <Card>
                <Paragraph>
                  <Text strong>安全分析结论：</Text>
                </Paragraph>
                <Paragraph>
                  1. 碰撞预警和超速预警是最常见的两类预警，分别占总预警数的20.5%和27.4%。
                </Paragraph>
                <Paragraph>
                  2. 预警数量在4-6月呈现上升趋势，可能与船舶活动增加和气象条件变化有关。
                </Paragraph>
                <Paragraph>
                  3. 风暴预警虽然数量较少，但处理时间最长，平均需要2.5小时完成处理。
                </Paragraph>
                <Paragraph>
                  4. 设备故障预警有明显的季节性特点，冬季高发，夏季相对较少。
                </Paragraph>
                <Paragraph>
                  5. 通过对比分析发现，预警处理效率逐月提高，平均处理时间从年初的45分钟缩短到现在的32分钟。
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="安全风险评估">
                <List
                  size="small"
                  bordered
                  dataSource={[
                    { label: '高风险区域', value: '济宁港航道交叉点', level: '高' },
                    { label: '高风险时段', value: '每日16:00-18:00', level: '中' },
                    { label: '高风险船舶', value: '梁山3号、梁山1号', level: '中' },
                    { label: '整体安全评级', value: '良好', level: '低' }
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Space>
                        <Text strong>{item.label}:</Text> 
                        {item.value}
                        <Tag color={item.level === '高' ? 'red' : item.level === '中' ? 'orange' : 'green'}>
                          {item.level}风险
                        </Tag>
                      </Space>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <BarChartOutlined />
              效率分析
            </span>
          } 
          key="efficiency"
        >
          <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={12}>
              <Card 
                title="港口效率对比" 
                extra={
                  <Button 
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownloadData('efficiency-radar')}
                  >
                    下载数据
                  </Button>
                }
              >
                <ReactECharts option={getEfficiencyRadarOption()} style={{ height: 350 }} />
              </Card>
            </Col>
            <Col span={12}>
              <Card 
                title="船舶燃油消耗分析" 
                extra={
                  <Button 
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownloadData('fuel-consumption')}
                  >
                    下载数据
                  </Button>
                }
              >
                <ReactECharts option={getFuelConsumptionOption()} style={{ height: 350 }} />
              </Card>
            </Col>
          </Row>
          
          <Divider orientation="left">分析结论</Divider>
          
          <Row gutter={16}>
            <Col span={16}>
              <Card>
                <Paragraph>
                  <Text strong>效率分析结论：</Text>
                </Paragraph>
                <Paragraph>
                  1. 济宁港在船舶周转率方面表现最佳，但泊位利用率相对较低，说明其调度效率高但可能存在泊位资源浪费。
                </Paragraph>
                <Paragraph>
                  2. 微山港在装卸效率和泊位利用率方面表现良好，但船舶周转率较低，建议优化船舶调度。
                </Paragraph>
                <Paragraph>
                  3. 梁山港各项指标较为平衡，但在等待时间方面表现最佳，说明其进出港管理效率较高。
                </Paragraph>
                <Paragraph>
                  4. 梁山4号船舶燃油消耗量最高，但效率最低，建议进行技术改造或优化航行计划。
                </Paragraph>
                <Paragraph>
                  5. 梁山3号船舶燃油效率最高，可作为标杆进行经验推广。
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="效率优化建议">
                <List
                  size="small"
                  bordered
                  dataSource={[
                    { label: '济宁港', value: '提高泊位利用率，优化资源配置' },
                    { label: '微山港', value: '改进船舶调度，提高周转效率' },
                    { label: '梁山港', value: '提升装卸效率，保持调度优势' },
                    { label: '船舶管理', value: '对低效船舶进行技术改造' }
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Text strong>{item.label}:</Text> {item.value}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane 
          tab={
            <span>
              <BulbOutlined />
              决策支持
            </span>
          } 
          key="decision"
        >
          <Card title="基于数据分析的决策建议">
            <Table 
              columns={recommendationColumns} 
              dataSource={recommendations}
              rowKey="id"
              pagination={false}
            />
          </Card>
          
          <Divider orientation="left">决策支持模型</Divider>
          
          <Row gutter={16}>
            <Col span={12}>
              <Card title="港口扩建投资回报分析">
                <ReactECharts 
                  option={{
                    title: {
                      text: '投资回报预测',
                      left: 'center'
                    },
                    tooltip: {
                      trigger: 'axis',
                      formatter: '{b}年: {c}%'
                    },
                    xAxis: {
                      type: 'category',
                      data: ['1年', '2年', '3年', '4年', '5年', '10年']
                    },
                    yAxis: {
                      type: 'value',
                      name: '投资回报率(%)'
                    },
                    series: [
                      {
                        name: '回报率',
                        type: 'line',
                        data: [5, 12, 18, 25, 32, 45],
                        markPoint: {
                          data: [
                            { name: '盈亏平衡点', value: 15, xAxis: 2, yAxis: 15 }
                          ]
                        },
                        markLine: {
                          data: [
                            { type: 'average', name: '平均值' }
                          ]
                        }
                      }
                    ]
                  }} 
                  style={{ height: 300 }} 
                />
                <Paragraph style={{ marginTop: 16 }}>
                  <Text strong>结论：</Text> 济宁港扩建投资预计在第3年达到盈亏平衡点，10年内累计回报率可达45%，建议实施扩建计划。
                </Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="船舶调度优化模拟">
                <ReactECharts 
                  option={{
                    title: {
                      text: '优化前后对比',
                      left: 'center'
                    },
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'shadow'
                      }
                    },
                    legend: {
                      data: ['优化前', '优化后'],
                      top: 30
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: {
                      type: 'category',
                      data: ['等待时间', '周转效率', '燃油消耗', '运营成本']
                    },
                    yAxis: {
                      type: 'value',
                      name: '相对值(%)',
                      min: 0,
                      max: 120
                    },
                    series: [
                      {
                        name: '优化前',
                        type: 'bar',
                        data: [100, 100, 100, 100]
                      },
                      {
                        name: '优化后',
                        type: 'bar',
                        data: [75, 115, 85, 88]
                      }
                    ]
                  }} 
                  style={{ height: 300 }} 
                />
                <Paragraph style={{ marginTop: 16 }}>
                  <Text strong>结论：</Text> 通过优化船舶调度，预计可减少25%的等待时间，提高15%的周转效率，同时降低15%的燃油消耗和12%的运营成本。
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DataAnalysis; 