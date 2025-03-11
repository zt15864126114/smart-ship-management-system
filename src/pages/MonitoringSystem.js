import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Table, 
  Typography, 
  Space, 
  Button, 
  Badge, 
  Drawer, 
  Descriptions, 
  Tabs,
  List,
  Tag,
  Divider,
  Select
} from 'antd';
import { 
  InfoCircleOutlined, 
  HistoryOutlined, 
  EnvironmentOutlined,
  CompassOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ships, generateShipTrack } from '../mock/data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// 修复Leaflet图标问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// 自定义船舶图标
const shipIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3410/3410476.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// 自定义港口图标
const portIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2271/2271068.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

const MonitoringSystem = () => {
  const [selectedShip, setSelectedShip] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [shipTrack, setShipTrack] = useState([]);
  const [mapCenter, setMapCenter] = useState([35.543, 116.145]); // 默认中心点为梁山港
  const [mapZoom, setMapZoom] = useState(10);
  const [trackVisible, setTrackVisible] = useState(true);
  const [selectedShipType, setSelectedShipType] = useState('all');
  
  // 过滤船舶数据
  const filteredShips = selectedShipType === 'all' 
    ? ships 
    : ships.filter(ship => ship.type === selectedShipType);

  // 表格列定义
  const columns = [
    {
      title: '船名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '船号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'green';
        if (status === '航行中') {
          color = 'blue';
        } else if (status === '维修中') {
          color = 'orange';
        }
        return <Badge status={color} text={status} />;
      },
    },
    {
      title: '速度(节)',
      key: 'speed',
      render: (_, record) => record.status === '航行中' ? record.speed.toFixed(1) : '0.0',
    },
    {
      title: '当前位置',
      key: 'location',
      render: (_, record) => (
        record.status === '航行中' ? 
        `经度: ${record.position.lng.toFixed(3)}, 纬度: ${record.position.lat.toFixed(3)}` : 
        (record.status === '停泊中' ? record.lastPort : record.lastPort)
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="primary" 
            icon={<InfoCircleOutlined />} 
            size="small"
            onClick={() => handleViewShip(record)}
          >
            详情
          </Button>
          <Button 
            icon={<EnvironmentOutlined />} 
            size="small"
            onClick={() => handleLocateShip(record)}
          >
            定位
          </Button>
          <Button 
            icon={<HistoryOutlined />} 
            size="small"
            onClick={() => handleViewTrack(record)}
          >
            轨迹
          </Button>
        </Space>
      ),
    },
  ];

  // 处理查看船舶详情
  const handleViewShip = (ship) => {
    setSelectedShip(ship);
    setDrawerVisible(true);
  };

  // 处理定位船舶
  const handleLocateShip = (ship) => {
    setMapCenter([ship.position.lat, ship.position.lng]);
    setMapZoom(13);
  };

  // 处理查看船舶轨迹
  const handleViewTrack = (ship) => {
    setSelectedShip(ship);
    const track = generateShipTrack(ship.id);
    setShipTrack(track);
    setMapCenter([ship.position.lat, ship.position.lng]);
    setDrawerVisible(true);
    setTrackVisible(true);
  };

  // 关闭抽屉
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // 模拟实时更新船舶位置
  useEffect(() => {
    const interval = setInterval(() => {
      // 在实际应用中，这里应该从后端API获取最新的船舶位置数据
      // 这里我们只是简单地模拟船舶移动
      ships.forEach(ship => {
        if (ship.status === '航行中') {
          // 根据船舶航向移动位置
          const radians = (ship.direction * Math.PI) / 180;
          const speedFactor = 0.0001 * ship.speed; // 速度因子
          ship.position.lat += Math.cos(radians) * speedFactor;
          ship.position.lng += Math.sin(radians) * speedFactor;
          
          // 随机微调速度和方向
          ship.speed += (Math.random() - 0.5) * 0.2;
          ship.direction += (Math.random() - 0.5) * 2;
          
          // 保持速度和方向在合理范围内
          ship.speed = Math.max(5, Math.min(20, ship.speed));
          ship.direction = ship.direction % 360;
          if (ship.direction < 0) ship.direction += 360;
        }
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Title level={2}>船舶监控系统</Title>
      
      <Row gutter={16}>
        <Col span={24}>
          <Card style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <Space>
                <Text strong>船舶类型筛选:</Text>
                <Select 
                  defaultValue="all" 
                  style={{ width: 150 }} 
                  onChange={value => setSelectedShipType(value)}
                >
                  <Option value="all">全部类型</Option>
                  <Option value="货船">货船</Option>
                  <Option value="集装箱船">集装箱船</Option>
                </Select>
                <Text strong>轨迹显示:</Text>
                <Select 
                  defaultValue="show" 
                  style={{ width: 120 }} 
                  onChange={value => setTrackVisible(value === 'show')}
                >
                  <Option value="show">显示轨迹</Option>
                  <Option value="hide">隐藏轨迹</Option>
                </Select>
              </Space>
            </div>
            
            <MapContainer 
              center={mapCenter} 
              zoom={mapZoom} 
              style={{ height: 500 }}
              whenCreated={(map) => {
                map.on('zoom', () => {
                  setMapZoom(map.getZoom());
                });
                map.on('move', () => {
                  const center = map.getCenter();
                  setMapCenter([center.lat, center.lng]);
                });
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* 港口标记 */}
              <Marker 
                position={[35.543, 116.145]} 
                icon={portIcon}
              >
                <Popup>
                  <div>
                    <h3>梁山港</h3>
                    <p>泊位数: 12</p>
                    <p>日吞吐量: 15,000吨</p>
                  </div>
                </Popup>
              </Marker>
              
              <Marker 
                position={[35.415, 116.587]} 
                icon={portIcon}
              >
                <Popup>
                  <div>
                    <h3>济宁港</h3>
                    <p>泊位数: 15</p>
                    <p>日吞吐量: 18,000吨</p>
                  </div>
                </Popup>
              </Marker>
              
              <Marker 
                position={[34.947, 117.129]} 
                icon={portIcon}
              >
                <Popup>
                  <div>
                    <h3>微山港</h3>
                    <p>泊位数: 8</p>
                    <p>日吞吐量: 8,000吨</p>
                  </div>
                </Popup>
              </Marker>
              
              {/* 船舶标记 */}
              {filteredShips.map(ship => (
                <Marker 
                  key={ship.id}
                  position={[ship.position.lat, ship.position.lng]} 
                  icon={shipIcon}
                >
                  <Popup>
                    <div>
                      <h3>{ship.name}</h3>
                      <p>船号: {ship.number}</p>
                      <p>类型: {ship.type}</p>
                      <p>状态: {ship.status}</p>
                      {ship.status === '航行中' && (
                        <>
                          <p>速度: {ship.speed.toFixed(1)} 节</p>
                          <p>航向: {ship.direction.toFixed(0)}°</p>
                        </>
                      )}
                      <p>船长: {ship.captain}</p>
                      <Button 
                        type="primary" 
                        size="small" 
                        onClick={() => handleViewShip(ship)}
                      >
                        查看详情
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              
              {/* 船舶轨迹 */}
              {selectedShip && trackVisible && shipTrack.length > 0 && (
                <Polyline 
                  positions={shipTrack.map(point => [point.position.lat, point.position.lng])}
                  color="blue"
                  weight={3}
                  opacity={0.7}
                />
              )}
            </MapContainer>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col span={24}>
          <Card title="船舶列表">
            <Table 
              columns={columns} 
              dataSource={filteredShips}
              rowKey="id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
      
      {/* 船舶详情抽屉 */}
      <Drawer
        title={selectedShip ? `船舶详情 - ${selectedShip.name}` : '船舶详情'}
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        width={600}
      >
        {selectedShip && (
          <Tabs defaultActiveKey="basic">
            <TabPane tab="基本信息" key="basic">
              <Descriptions bordered column={1}>
                <Descriptions.Item label="船名">{selectedShip.name}</Descriptions.Item>
                <Descriptions.Item label="船号">{selectedShip.number}</Descriptions.Item>
                <Descriptions.Item label="船舶类型">{selectedShip.type}</Descriptions.Item>
                <Descriptions.Item label="建造年份">{selectedShip.buildYear}</Descriptions.Item>
                <Descriptions.Item label="船长">{selectedShip.length} 米</Descriptions.Item>
                <Descriptions.Item label="船宽">{selectedShip.width} 米</Descriptions.Item>
                <Descriptions.Item label="吨位">{selectedShip.tonnage} 吨</Descriptions.Item>
                <Descriptions.Item label="发动机功率">{selectedShip.enginePower} kW</Descriptions.Item>
                <Descriptions.Item label="当前状态">
                  <Badge 
                    status={
                      selectedShip.status === '航行中' ? 'processing' : 
                      selectedShip.status === '停泊中' ? 'success' : 'warning'
                    } 
                    text={selectedShip.status} 
                  />
                </Descriptions.Item>
              </Descriptions>
            </TabPane>
            
            <TabPane tab="航行信息" key="navigation" icon={<CompassOutlined />}>
              <Descriptions bordered column={1}>
                <Descriptions.Item label="当前位置">
                  经度: {selectedShip.position.lng.toFixed(5)}, 纬度: {selectedShip.position.lat.toFixed(5)}
                </Descriptions.Item>
                {selectedShip.status === '航行中' && (
                  <>
                    <Descriptions.Item label="当前速度">
                      <Space>
                        <DashboardOutlined />
                        {selectedShip.speed.toFixed(1)} 节
                      </Space>
                    </Descriptions.Item>
                    <Descriptions.Item label="当前航向">
                      <Space>
                        <CompassOutlined />
                        {selectedShip.direction.toFixed(0)}°
                      </Space>
                    </Descriptions.Item>
                  </>
                )}
                <Descriptions.Item label="上一港口">{selectedShip.lastPort}</Descriptions.Item>
                <Descriptions.Item label="下一港口">{selectedShip.nextPort}</Descriptions.Item>
              </Descriptions>
              
              {shipTrack.length > 0 && (
                <>
                  <Divider orientation="left">历史轨迹</Divider>
                  <List
                    bordered
                    dataSource={shipTrack.slice(0, 10)}
                    renderItem={(point, index) => (
                      <List.Item>
                        <List.Item.Meta
                          title={`轨迹点 ${index + 1}`}
                          description={
                            <div>
                              <p>时间: {new Date(point.time).toLocaleString()}</p>
                              <p>位置: 经度 {point.position.lng.toFixed(5)}, 纬度 {point.position.lat.toFixed(5)}</p>
                              <p>速度: {point.speed.toFixed(1)} 节, 航向: {point.direction.toFixed(0)}°</p>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              )}
            </TabPane>
            
            <TabPane tab="船员信息" key="crew">
              <Descriptions bordered column={1}>
                <Descriptions.Item label="船长">{selectedShip.captain}</Descriptions.Item>
                <Descriptions.Item label="船员人数">{selectedShip.crewCount} 人</Descriptions.Item>
              </Descriptions>
            </TabPane>
            
            <TabPane tab="安全设备" key="safety">
              <List
                bordered
                dataSource={selectedShip.safetyEquipment}
                renderItem={item => (
                  <List.Item>
                    <Tag color="green">{item}</Tag>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        )}
      </Drawer>
    </div>
  );
};

export default MonitoringSystem; 