import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Button, 
  Typography, 
  Space, 
  Modal, 
  Tabs, 
  Descriptions, 
  Tag, 
  Form, 
  Select, 
  DatePicker, 
  Row, 
  Col,
  Divider,
  message,
  Tooltip,
  Input,
  Statistic
} from 'antd';
import { 
  FileTextOutlined, 
  DownloadOutlined, 
  PrinterOutlined, 
  EyeOutlined, 
  PlusOutlined,
  BarChartOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  RocketOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { reports, ships, ports } from '../mock/data';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ReportGeneration = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [reportType, setReportType] = useState('ship-entry');
  const [form] = Form.useForm();
  
  // 处理查看报表
  const handleViewReport = (report) => {
    setSelectedReport(report);
    setIsModalVisible(true);
  };
  
  // 处理下载报表
  const handleDownloadReport = (report) => {
    message.success(`报表 ${report.name} 开始下载`);
    // 在实际应用中，这里应该调用API下载报表
  };
  
  // 处理打印报表
  const handlePrintReport = (report) => {
    message.success(`准备打印报表 ${report.name}`);
    // 在实际应用中，这里应该调用打印功能
  };
  
  // 处理创建新报表
  const handleCreateReport = () => {
    form.resetFields();
    setIsCreateModalVisible(true);
  };
  
  // 提交创建报表表单
  const handleSubmitCreate = () => {
    form.validateFields().then(values => {
      console.log('表单值:', values);
      
      // 在实际应用中，这里应该调用API创建报表
      message.success('报表生成任务已提交，请稍后查看结果');
      setIsCreateModalVisible(false);
    });
  };
  
  // 表格列定义
  const columns = [
    {
      title: '报表名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type) => {
        let color = 'blue';
        if (type === '周报') {
          color = 'green';
        } else if (type === '月报') {
          color = 'purple';
        }
        return <Tag color={color}>{type}</Tag>;
      },
      filters: [
        { text: '日报', value: '日报' },
        { text: '周报', value: '周报' },
        { text: '月报', value: '月报' },
      ],
      onFilter: (value, record) => record.type === value,
    },
    {
      title: '生成时间',
      dataIndex: 'generationTime',
      key: 'generationTime',
      sorter: (a, b) => new Date(b.generationTime) - new Date(a.generationTime),
      defaultSortOrder: 'descend',
    },
    {
      title: '统计周期',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="查看">
            <Button 
              type="primary" 
              icon={<EyeOutlined />} 
              size="small"
              onClick={() => handleViewReport(record)}
            />
          </Tooltip>
          <Tooltip title="下载">
            <Button 
              icon={<DownloadOutlined />} 
              size="small"
              onClick={() => handleDownloadReport(record)}
            />
          </Tooltip>
          <Tooltip title="打印">
            <Button 
              icon={<PrinterOutlined />} 
              size="small"
              onClick={() => handlePrintReport(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
  
  // 渲染报告表单
  const renderReportForm = () => {
    return (
      <>
        <Form.Item
          name="name"
          label="报表名称"
          rules={[{ required: true, message: '请输入报表名称' }]}
        >
          <Input placeholder="请输入报表名称" />
        </Form.Item>
        
        <Form.Item
          name="period"
          label="统计周期"
          rules={[{ required: true, message: '请选择统计周期' }]}
        >
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>
        
        {reportType === 'ship-entry' && (
          <>
            <Form.Item
              name="ships"
              label="选择船舶"
              rules={[{ required: true, message: '请选择船舶' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择船舶"
                style={{ width: '100%' }}
              >
                {ships.map(ship => (
                  <Option key={ship.id} value={ship.id}>{ship.name}</Option>
                ))}
              </Select>
            </Form.Item>
            
            <Form.Item
              name="ports"
              label="选择港口"
              rules={[{ required: true, message: '请选择港口' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择港口"
                style={{ width: '100%' }}
              >
                {ports.map(port => (
                  <Option key={port.id} value={port.id}>{port.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}
        
        {reportType === 'environment' && (
          <>
            <Form.Item
              name="environmentFactors"
              label="环境因素"
              rules={[{ required: true, message: '请选择环境因素' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择环境因素"
                style={{ width: '100%' }}
              >
                <Option value="water">水质</Option>
                <Option value="air">空气质量</Option>
                <Option value="noise">噪声</Option>
                <Option value="temperature">温度</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="monitoringPoints"
              label="监测点"
              rules={[{ required: true, message: '请选择监测点' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择监测点"
                style={{ width: '100%' }}
              >
                <Option value="port1">港口1号监测点</Option>
                <Option value="port2">港口2号监测点</Option>
                <Option value="sea1">海域1号监测点</Option>
                <Option value="sea2">海域2号监测点</Option>
              </Select>
            </Form.Item>
          </>
        )}
        
        {reportType === 'port-efficiency' && (
          <>
            <Form.Item
              name="ports"
              label="选择港口"
              rules={[{ required: true, message: '请选择港口' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择港口"
                style={{ width: '100%' }}
              >
                {ports.map(port => (
                  <Option key={port.id} value={port.id}>{port.name}</Option>
                ))}
              </Select>
            </Form.Item>
            
            <Form.Item
              name="efficiencyFactors"
              label="效率因素"
              rules={[{ required: true, message: '请选择效率因素' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="请选择效率因素"
                style={{ width: '100%' }}
              >
                <Option value="loading">装卸效率</Option>
                <Option value="customs">通关效率</Option>
                <Option value="storage">仓储效率</Option>
                <Option value="transport">运输效率</Option>
              </Select>
            </Form.Item>
          </>
        )}
        
        {reportType === 'custom' && (
          <>
            <Form.Item
              name="reportType"
              label="报表类型"
              rules={[{ required: true, message: '请选择报表类型' }]}
            >
              <Select placeholder="请选择报表类型">
                <Option value="日报">日报</Option>
                <Option value="周报">周报</Option>
                <Option value="月报">月报</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="content"
              label="报表内容"
              rules={[{ required: true, message: '请输入报表内容' }]}
            >
              <TextArea rows={4} placeholder="请输入报表内容" />
            </Form.Item>
          </>
        )}
      </>
    );
  };
  
  // 船舶进出港统计图表选项
  const getShipEntryChartOption = (report) => {
    return {
      title: {
        text: '船舶进出港统计',
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
        data: report.data.shipEntry.map(item => item.date)
      },
      yAxis: {
        type: 'value',
        name: '船舶数量'
      },
      series: [
        {
          name: '入港',
          type: 'bar',
          data: report.data.shipEntry.map(item => item.entry),
          itemStyle: {
            color: '#1890ff'
          }
        },
        {
          name: '出港',
          type: 'bar',
          data: report.data.shipEntry.map(item => item.exit),
          itemStyle: {
            color: '#52c41a'
          }
        }
      ]
    };
  };
  
  // 环境监测数据图表选项
  const getEnvironmentChartOption = (report) => {
    return {
      title: {
        text: '环境监测数据',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      legend: {
        data: ['水质指数', '空气质量指数', '噪声指数'],
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
        data: report.data.environment.map(item => item.date)
      },
      yAxis: {
        type: 'value',
        name: '指数值'
      },
      series: [
        {
          name: '水质指数',
          type: 'line',
          data: report.data.environment.map(item => item.waterQuality),
          itemStyle: {
            color: '#1890ff'
          }
        },
        {
          name: '空气质量指数',
          type: 'line',
          data: report.data.environment.map(item => item.airQuality),
          itemStyle: {
            color: '#52c41a'
          }
        },
        {
          name: '噪声指数',
          type: 'line',
          data: report.data.environment.map(item => item.noiseLevel),
          itemStyle: {
            color: '#faad14'
          }
        }
      ]
    };
  };
  
  // 港口效率分析图表选项
  const getPortEfficiencyChartOption = (report) => {
    return {
      title: {
        text: '港口效率分析',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['装卸效率', '通关效率', '仓储效率', '运输效率']
      },
      series: [
        {
          name: '效率分布',
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
              value: report.data.portEfficiency.loadingEfficiency, 
              name: '装卸效率' 
            },
            { 
              value: report.data.portEfficiency.customsEfficiency, 
              name: '通关效率' 
            },
            { 
              value: report.data.portEfficiency.storageEfficiency, 
              name: '仓储效率' 
            },
            { 
              value: report.data.portEfficiency.transportEfficiency, 
              name: '运输效率' 
            }
          ]
        }
      ]
    };
  };

  return (
    <div>
      <Title level={2}>报表生成</Title>
      
      {/* 报表生成按钮 */}
      <Card style={{ marginBottom: 16 }}>
        <Space size="large">
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleCreateReport}
          >
            生成新报表
          </Button>
          
          <Button 
            icon={<CloudDownloadOutlined />}
          >
            批量下载
          </Button>
          
          <Text>提示: 点击"生成新报表"按钮可以创建自定义报表，或选择预设的报表模板。</Text>
        </Space>
      </Card>
      
      {/* 报表列表 */}
      <Card title="报表列表">
        <Table 
          columns={columns} 
          dataSource={reports}
          rowKey="id"
          pagination={false}
        />
      </Card>
      
      {/* 查看报表详情 */}
      <Modal
        title={selectedReport ? `报表详情 - ${selectedReport.name}` : '报表详情'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button 
            key="download" 
            icon={<DownloadOutlined />}
            onClick={() => handleDownloadReport(selectedReport)}
          >
            下载
          </Button>,
          <Button 
            key="print" 
            icon={<PrinterOutlined />}
            onClick={() => handlePrintReport(selectedReport)}
          >
            打印
          </Button>,
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            关闭
          </Button>
        ]}
        width={800}
      >
        {selectedReport && (
          <div>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="报表名称">{selectedReport.name}</Descriptions.Item>
              <Descriptions.Item label="报表类型">
                <Tag color={
                  selectedReport.type === '日报' ? 'blue' : 
                  selectedReport.type === '周报' ? 'green' : 'purple'
                }>
                  {selectedReport.type}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="生成时间">{selectedReport.generationTime}</Descriptions.Item>
              <Descriptions.Item label="统计周期">{selectedReport.period}</Descriptions.Item>
            </Descriptions>
            
            <Divider orientation="left">报表内容</Divider>
            
            {selectedReport.id === 1 && (
              <>
                <Paragraph>
                  <Text strong>船舶出入港记录统计</Text>
                </Paragraph>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="总入港次数"
                        value={selectedReport.data.totalEntries}
                        suffix="次"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="总出港次数"
                        value={selectedReport.data.totalExits}
                        suffix="次"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="在港船舶数"
                        value={selectedReport.data.ships.filter(s => !s.exitTime).length}
                        suffix="艘"
                      />
                    </Card>
                  </Col>
                </Row>
                
                <div style={{ marginTop: 16 }}>
                  <ReactECharts option={getShipEntryChartOption(selectedReport)} style={{ height: 300 }} />
                </div>
                
                <Table
                  title={() => '船舶出入港明细'}
                  columns={[
                    { title: '船名', dataIndex: 'name', key: 'name' },
                    { title: '入港时间', dataIndex: 'entryTime', key: 'entryTime' },
                    { title: '出港时间', dataIndex: 'exitTime', key: 'exitTime', render: time => time || '-' },
                    { title: '港口', dataIndex: 'port', key: 'port' }
                  ]}
                  dataSource={selectedReport.data.ships}
                  rowKey="name"
                  pagination={false}
                />
              </>
            )}
            
            {selectedReport.id === 2 && (
              <>
                <Paragraph>
                  <Text strong>海洋环境分析报告</Text>
                </Paragraph>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="平均温度"
                        value={selectedReport.data.averageTemperature}
                        suffix="°C"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="平均风速"
                        value={selectedReport.data.averageWindSpeed}
                        suffix="m/s"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="最大风速"
                        value={selectedReport.data.maxWindSpeed}
                        suffix="m/s"
                      />
                    </Card>
                  </Col>
                </Row>
                
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="降水量"
                        value={selectedReport.data.precipitation}
                        suffix="mm"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="平均浪高"
                        value={selectedReport.data.waveHeight.average}
                        suffix="m"
                      />
                    </Card>
                  </Col>
                </Row>
                
                <div style={{ marginTop: 16 }}>
                  <ReactECharts option={getEnvironmentChartOption(selectedReport)} style={{ height: 300 }} />
                </div>
                
                <Table
                  title={() => '每日气象数据'}
                  columns={[
                    { title: '日期', dataIndex: 'date', key: 'date' },
                    { title: '天气状况', dataIndex: 'condition', key: 'condition' },
                    { title: '温度(°C)', dataIndex: 'temperature', key: 'temperature' },
                    { title: '风速(m/s)', dataIndex: 'windSpeed', key: 'windSpeed' }
                  ]}
                  dataSource={selectedReport.data.weatherConditions}
                  rowKey="date"
                  pagination={false}
                />
              </>
            )}
            
            {selectedReport.id === 3 && (
              <>
                <Paragraph>
                  <Text strong>港口运营效率报告</Text>
                </Paragraph>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="总吞吐量"
                        value={selectedReport.data.totalThroughput}
                        suffix="吨"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="泊位利用率"
                        value={selectedReport.data.berthUtilization}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic
                        title="平均等待时间"
                        value={selectedReport.data.averageWaitingTime}
                        suffix="小时"
                      />
                    </Card>
                  </Col>
                </Row>
                
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="平均装货时间"
                        value={selectedReport.data.averageLoadingTime}
                        suffix="小时"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="平均卸货时间"
                        value={selectedReport.data.averageUnloadingTime}
                        suffix="小时"
                      />
                    </Card>
                  </Col>
                </Row>
                
                <div style={{ marginTop: 16 }}>
                  <ReactECharts option={getPortEfficiencyChartOption(selectedReport)} style={{ height: 300 }} />
                </div>
                
                <Table
                  title={() => '港口运营数据对比'}
                  columns={[
                    { title: '港口名称', dataIndex: 'name', key: 'name' },
                    { title: '吞吐量(吨)', dataIndex: 'throughput', key: 'throughput', render: val => val.toLocaleString() },
                    { title: '泊位利用率(%)', dataIndex: 'utilization', key: 'utilization' }
                  ]}
                  dataSource={selectedReport.data.portComparison}
                  rowKey="name"
                  pagination={false}
                />
              </>
            )}
          </div>
        )}
      </Modal>
      
      {/* 创建报表表单 */}
      <Modal
        title="生成新报表"
        open={isCreateModalVisible}
        onCancel={() => setIsCreateModalVisible(false)}
        onOk={handleSubmitCreate}
        okText="生成"
        cancelText="取消"
        width={600}
      >
        <Tabs 
          defaultActiveKey="ship-entry" 
          onChange={setReportType}
          tabPosition="left"
        >
          <TabPane 
            tab={
              <span>
                <RocketOutlined />
                船舶出入港记录
              </span>
            } 
            key="ship-entry"
          >
            <Form
              form={form}
              layout="vertical"
            >
              {renderReportForm()}
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <CloudOutlined />
                海洋环境分析
              </span>
            } 
            key="environment"
          >
            <Form
              form={form}
              layout="vertical"
            >
              {renderReportForm()}
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <BarChartOutlined />
                港口运营效率
              </span>
            } 
            key="port-efficiency"
          >
            <Form
              form={form}
              layout="vertical"
            >
              {renderReportForm()}
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <FileTextOutlined />
                自定义报表
              </span>
            } 
            key="custom"
          >
            <Form
              form={form}
              layout="vertical"
            >
              {renderReportForm()}
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default ReportGeneration; 