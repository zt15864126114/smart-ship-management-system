import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Tabs, 
  Select, 
  Space, 
  Button, 
  Row, 
  Col,
  Statistic,
  DatePicker
} from 'antd';
import { 
  DownloadOutlined, 
  ReloadOutlined, 
  BarChartOutlined, 
  LineChartOutlined, 
  PieChartOutlined, 
  AreaChartOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { visualizationData } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const DataVisualization = () => {
  const [timeRange, setTimeRange] = useState('day');
  
  // 处理时间范围变化
  const handleTimeRangeChange = (value) => {
    setTimeRange(value);
  };
  
  // 处理数据刷新
  const handleRefresh = () => {
    console.log('刷新数据');
    // 在实际应用中，这里应该调用API刷新数据
  };
  
  // 处理数据下载
  const handleDownload = (chartType) => {
    console.log(`下载${chartType}数据`);
    // 在实际应用中，这里应该调用API下载数据
  };
  
  // 船舶流量图表选项
  const getShipTrafficOption = () => {
    const data = visualizationData.shipTraffic[timeRange];
    
    return {
      title: {
        text: '船舶流量统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['入港', '出港'],
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
        data: data.map(item => item.time)
      },
      yAxis: {
        type: 'value',
        name: '船舶数量'
      },
      series: [
        {
          name: '入港',
          type: 'bar',
          data: data.map(item => item.inbound),
          itemStyle: {
            color: '#1890ff'
          }
        },
        {
          name: '出港',
          type: 'bar',
          data: data.map(item => item.outbound),
          itemStyle: {
            color: '#52c41a'
          }
        }
      ]
    };
  };
  
  // 货物吞吐量图表选项
  const getCargoThroughputOption = () => {
    const data = visualizationData.cargoThroughput[timeRange];
    
    return {
      title: {
        text: '货物吞吐量统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['散货', '集装箱', '液体货'],
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
        data: data.map(item => item.time)
      },
      yAxis: {
        type: 'value',
        name: '吞吐量（吨）'
      },
      series: [
        {
          name: '散货',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.bulk),
          itemStyle: {
            color: '#1890ff'
          }
        },
        {
          name: '集装箱',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.container),
          itemStyle: {
            color: '#52c41a'
          }
        },
        {
          name: '液体货',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.liquid),
          itemStyle: {
            color: '#faad14'
          }
        }
      ]
    };
  };
  
  // 港口利用率图表选项
  const getPortUtilizationOption = () => {
    const data = visualizationData.portUtilization[timeRange];
    
    return {
      title: {
        text: '港口利用率统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['泊位利用率', '仓储利用率', '设备利用率'],
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
        data: data.map(item => item.time)
      },
      yAxis: {
        type: 'value',
        name: '利用率（%）',
        max: 100
      },
      series: [
        {
          name: '泊位利用率',
          type: 'line',
          data: data.map(item => item.berth),
          itemStyle: {
            color: '#1890ff'
          }
        },
        {
          name: '仓储利用率',
          type: 'line',
          data: data.map(item => item.storage),
          itemStyle: {
            color: '#52c41a'
          }
        },
        {
          name: '设备利用率',
          type: 'line',
          data: data.map(item => item.equipment),
          itemStyle: {
            color: '#faad14'
          }
        }
      ]
    };
  };
  
  // 安全事件统计图表选项
  const getSafetyIncidentsOption = () => {
    const data = visualizationData.safetyIncidents[timeRange];
    
    return {
      title: {
        text: '安全事件统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['碰撞', '搁浅', '火灾', '其他'],
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
        data: data.map(item => item.time)
      },
      yAxis: {
        type: 'value',
        name: '事件数量'
      },
      series: [
        {
          name: '碰撞',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.collision),
          itemStyle: {
            color: '#ff4d4f'
          }
        },
        {
          name: '搁浅',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.grounding),
          itemStyle: {
            color: '#faad14'
          }
        },
        {
          name: '火灾',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.fire),
          itemStyle: {
            color: '#ff7a45'
          }
        },
        {
          name: '其他',
          type: 'bar',
          stack: 'total',
          data: data.map(item => item.other),
          itemStyle: {
            color: '#1890ff'
          }
        }
      ]
    };
  };

  return (
    <div>
      <Title level={2}>数据可视化</Title>
      
      {/* 控制面板 */}
      <Card style={{ marginBottom: 16 }}>
        <Space size="large">
          <Text strong>时间范围：</Text>
          <Select 
            defaultValue="day" 
            style={{ width: 120 }} 
            onChange={handleTimeRangeChange}
          >
            <Option value="day">日</Option>
            <Option value="month">月</Option>
            <Option value="year">年</Option>
          </Select>
          
          <Button 
            icon={<ReloadOutlined />} 
            onClick={handleRefresh}
          >
            刷新数据
          </Button>
          
          <Button 
            icon={<DownloadOutlined />} 
            onClick={() => handleDownload('all')}
          >
            下载数据
          </Button>
        </Space>
      </Card>
      
      {/* 统计数据 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日船舶流量"
              value={visualizationData.shipTraffic.day.reduce((sum, item) => sum + item.inbound + item.outbound, 0)}
              prefix={<BarChartOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日货物吞吐量"
              value={(visualizationData.cargoThroughput.day.reduce((sum, item) => sum + item.bulk + item.container + item.liquid, 0) / 1000).toFixed(1)}
              suffix="千吨"
              prefix={<LineChartOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="平均泊位利用率"
              value={visualizationData.portUtilization.day.reduce((sum, item) => sum + item.berth, 0) / visualizationData.portUtilization.day.length}
              suffix="%"
              prefix={<PieChartOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日安全事件"
              value={visualizationData.safetyIncidents.day.reduce((sum, item) => sum + item.collision + item.grounding + item.fire + item.other, 0)}
              prefix={<AreaChartOutlined />}
            />
          </Card>
        </Col>
      </Row>
      
      {/* 图表展示 */}
      <Tabs defaultActiveKey="1">
        <TabPane tab="船舶流量" key="1">
          <Card 
            title="船舶流量统计" 
            extra={
              <Button 
                size="small" 
                icon={<DownloadOutlined />}
                onClick={() => handleDownload('shipTraffic')}
              >
                下载
              </Button>
            }
          >
            <ReactECharts option={getShipTrafficOption()} style={{ height: 400 }} />
          </Card>
        </TabPane>
        
        <TabPane tab="货物吞吐量" key="2">
          <Card 
            title="货物吞吐量统计" 
            extra={
              <Button 
                size="small" 
                icon={<DownloadOutlined />}
                onClick={() => handleDownload('cargoThroughput')}
              >
                下载
              </Button>
            }
          >
            <ReactECharts option={getCargoThroughputOption()} style={{ height: 400 }} />
          </Card>
        </TabPane>
        
        <TabPane tab="港口利用率" key="3">
          <Card 
            title="港口利用率统计" 
            extra={
              <Button 
                size="small" 
                icon={<DownloadOutlined />}
                onClick={() => handleDownload('portUtilization')}
              >
                下载
              </Button>
            }
          >
            <ReactECharts option={getPortUtilizationOption()} style={{ height: 400 }} />
          </Card>
        </TabPane>
        
        <TabPane tab="安全事件" key="4">
          <Card 
            title="安全事件统计" 
            extra={
              <Button 
                size="small" 
                icon={<DownloadOutlined />}
                onClick={() => handleDownload('safetyIncidents')}
              >
                下载
              </Button>
            }
          >
            <ReactECharts option={getSafetyIncidentsOption()} style={{ height: 400 }} />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DataVisualization; 