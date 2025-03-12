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
  Select,
  message
} from 'antd';
import { 
  InfoCircleOutlined, 
  HistoryOutlined, 
  EnvironmentOutlined,
  CompassOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
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
const createShipIcon = (status) => {
  const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:currentColor;stop-opacity:1" />
          <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
        </linearGradient>
        <linearGradient id="deckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.7" />
        </linearGradient>
        <filter id="shipShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.4"/>
        </filter>
      </defs>
      <g transform="translate(50,50) rotate(90)">
        <!-- 船体主体 -->
        <path d="M-40,-12 
                 C-38,-12 -36,-15 -32,-15
                 L32,-15 
                 C36,-15 38,-12 40,-12
                 L45,0 
                 C43,2 41,4 40,12
                 L-40,12
                 C-41,4 -43,2 -45,0 Z" 
              fill="url(#hullGradient)"
              filter="url(#shipShadow)"
              stroke="currentColor"
              stroke-width="1"/>
        
        <!-- 驾驶室 -->
        <path d="M-10,-10 H10 V5 H-10 Z" 
              fill="url(#deckGradient)"
              stroke="currentColor"
              stroke-width="0.5"/>
        
        <!-- 前甲板结构 -->
        <path d="M15,-8 H25 V0 H15 Z" 
              fill="url(#deckGradient)"
              stroke="currentColor"
              stroke-width="0.5"/>
        
        <!-- 后甲板结构 -->
        <path d="M-25,-8 H-15 V0 H-25 Z" 
              fill="url(#deckGradient)"
              stroke="currentColor"
              stroke-width="0.5"/>
        
        <!-- 装饰线条 -->
        <path d="M-30,-5 H30 M-28,0 H28 M-25,5 H25" 
              stroke="currentColor"
              stroke-width="0.5"
              stroke-opacity="0.3"/>
      </g>
    </svg>
  `;

  const shipDiv = document.createElement('div');
  shipDiv.className = `ship-icon ${status}`;
  shipDiv.innerHTML = svgTemplate;

  return new L.DivIcon({
    html: shipDiv,
    className: 'ship-marker-container',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
};

// 添加船舶图标样式
const iconStyle = document.createElement('style');
iconStyle.textContent = `
  .ship-marker-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .ship-icon {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  }
  .ship-icon svg {
    width: 100%;
    height: 100%;
  }
  .ship-icon.航行中 {
    color: #1890ff;
  }
  .ship-icon.停泊中 {
    color: #52c41a;
  }
  .ship-icon.维修中 {
    color: #faad14;
  }
  .ship-icon.tracked {
    transform: scale(1.2);
    color: #722ed1;
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.4));
  }
  .ship-icon.tracked svg {
    filter: brightness(1.1);
  }
`;
document.head.appendChild(iconStyle);

// 自定义港口图标
const portIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2271/2271068.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// 添加船舶AIS信息显示组件
const AISInfo = ({ ship }) => (
  <div className="ais-info">
    <Title level={5}>AIS信息</Title>
    <Descriptions size="small" column={1}>
      <Descriptions.Item label="MMSI">{ship.mmsi || '---'}</Descriptions.Item>
      <Descriptions.Item label="呼号">{ship.callSign || '---'}</Descriptions.Item>
      <Descriptions.Item label="航速">{ship.speed ? `${ship.speed.toFixed(1)} 节` : '---'}</Descriptions.Item>
      <Descriptions.Item label="航向">{ship.direction ? `${ship.direction.toFixed(1)}°` : '---'}</Descriptions.Item>
      <Descriptions.Item label="目的地">{ship.destination || '---'}</Descriptions.Item>
      <Descriptions.Item label="预计到达时间">{ship.eta || '---'}</Descriptions.Item>
    </Descriptions>
  </div>
);

// 添加GPS位置信息组件
const GPSInfo = ({ position }) => (
  <div className="gps-info">
    <Title level={5}>GPS位置</Title>
    <Descriptions size="small" column={1}>
      <Descriptions.Item label="经度">{position.lng.toFixed(6)}°</Descriptions.Item>
      <Descriptions.Item label="纬度">{position.lat.toFixed(6)}°</Descriptions.Item>
      <Descriptions.Item label="更新时间">{new Date().toLocaleTimeString()}</Descriptions.Item>
    </Descriptions>
  </div>
);

// 添加地图控制器组件
const MapController = ({ center, zoom, trackedShipId }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom, {
        animate: true,
        duration: 1
      });
    }
  }, [map, center, zoom]);

  return null;
};

const MonitoringSystem = () => {
  const [selectedShip, setSelectedShip] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [shipTrack, setShipTrack] = useState({});
  const [mapCenter, setMapCenter] = useState([35.543, 116.145]); // 默认中心点为梁山港
  const [mapZoom, setMapZoom] = useState(10);
  const [trackVisible, setTrackVisible] = useState(true);
  const [selectedShipType, setSelectedShipType] = useState('all');
  const [selectedShipDetails, setSelectedShipDetails] = useState(null);
  const [showAISInfo, setShowAISInfo] = useState(true);
  const [showTrails, setShowTrails] = useState(true);
  const [trailLength, setTrailLength] = useState(30); // 轨迹点数量
  const [trackedShipId, setTrackedShipId] = useState(null); // 新增：跟踪的船舶ID
  const [mapInstance, setMapInstance] = useState(null); // 新增：地图实例

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
            type={trackedShipId === record.id ? "primary" : "default"}
            icon={<EnvironmentOutlined />} 
            size="small"
            onClick={() => handleLocateShip(record)}
            style={{
              background: trackedShipId === record.id ? '#1890ff' : undefined,
              borderColor: trackedShipId === record.id ? '#1890ff' : undefined,
              color: trackedShipId === record.id ? '#fff' : undefined
            }}
          >
            {trackedShipId === record.id ? '取消跟踪' : '定位'}
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
    if (trackedShipId === ship.id) {
      // 如果已经在跟踪这艘船，则取消跟踪
      setTrackedShipId(null);
      message.info(`已取消跟踪 ${ship.name}`);
    } else {
      // 开始跟踪新的船舶
      setTrackedShipId(ship.id);
      setMapCenter([ship.position.lat, ship.position.lng]);
      setMapZoom(14);
      message.success(`正在跟踪 ${ship.name}`);
    }
  };

  // 处理查看船舶轨迹
  const handleViewTrack = (ship) => {
    setSelectedShip(ship);
    const track = generateShipTrack(ship.id);
    setShipTrack(prevTracks => ({
      ...prevTracks,
      [ship.id]: track
    }));
    setMapCenter([ship.position.lat, ship.position.lng]);
    setDrawerVisible(true);
    setTrackVisible(true);
  };

  // 关闭抽屉
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // 更新船舶位置和状态
  useEffect(() => {
    const interval = setInterval(() => {
      ships.forEach(ship => {
        if (ship.status === '航行中') {
          // 模拟AIS数据更新
          const radians = (ship.direction * Math.PI) / 180;
          const speedFactor = 0.00002 * ship.speed;
          let newLat = ship.position.lat + Math.cos(radians) * speedFactor;
          let newLng = ship.position.lng + Math.sin(radians) * speedFactor;
          
          // 更新船舶位置和状态
          ship.position = { lat: newLat, lng: newLng };
          ship.lastUpdate = new Date().toISOString();
          ship.eta = new Date(Date.now() + 3600000).toLocaleTimeString();
          
          // 如果这艘船正在被跟踪，更新地图中心点
          if (trackedShipId === ship.id && mapInstance) {
            mapInstance.setView([newLat, newLng], mapInstance.getZoom(), {
              animate: true,
              duration: 1
            });
          }
          
          // 更新轨迹
          setShipTrack(prevTrails => {
            const shipTrail = prevTrails[ship.id] || [];
            const newTrail = [
              ...shipTrail,
              {
                position: { lat: newLat, lng: newLng },
                time: new Date().getTime(),
                speed: ship.speed,
                direction: ship.direction
              }
            ].slice(-trailLength);

            return {
              ...prevTrails,
              [ship.id]: newTrail
            };
          });
        }
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [trailLength, trackedShipId, mapInstance]);

  // 处理船舶点击
  const handleShipClick = (ship) => {
    setSelectedShipDetails(ship);
    setMapCenter([ship.position.lat, ship.position.lng]);
    setMapZoom(14);
  };

  return (
    <div className="page-container" style={{ padding: '24px' }}>
      <Title level={2}>船舶监控系统</Title>
      
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Card 
            className="monitoring-card" 
            bodyStyle={{ padding: 0, height: '680px' }}
          >
            <div style={{ 
              width: '100%', 
              height: '100%', 
              position: 'relative' 
            }}>
              <div className="map-controls" style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 1000,
                background: 'white',
                padding: '10px',
                borderRadius: '4px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}>
                <Space direction="vertical">
                  <Button 
                    type={showAISInfo ? "primary" : "default"}
                    onClick={() => setShowAISInfo(!showAISInfo)}
                  >
                    AIS信息
                  </Button>
                  <Button 
                    type={showTrails ? "primary" : "default"}
                    onClick={() => setShowTrails(!showTrails)}
                  >
                    航迹显示
                  </Button>
                  <Select 
                    value={trailLength} 
                    onChange={setTrailLength}
                    style={{ width: 120 }}
                  >
                    <Option value={10}>10分钟</Option>
                    <Option value={30}>30分钟</Option>
                    <Option value={60}>1小时</Option>
                  </Select>
                </Space>
              </div>
              
              <MapContainer 
                center={mapCenter} 
                zoom={mapZoom} 
                style={{ height: '100%', width: '100%' }}
                whenCreated={(map) => {
                  setMapInstance(map);
                  map.invalidateSize();
                }}
              >
                <MapController 
                  center={mapCenter}
                  zoom={mapZoom}
                  trackedShipId={trackedShipId}
                />
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
                
                {/* 船舶标记和轨迹 */}
                {filteredShips.map(ship => (
                  <React.Fragment key={ship.id}>
                    <Marker 
                      position={[ship.position.lat, ship.position.lng]} 
                      icon={createShipIcon(trackedShipId === ship.id ? 'tracked' : ship.status)}
                      rotationAngle={ship.direction}
                      rotationOrigin="center"
                      eventHandlers={{
                        click: () => handleShipClick(ship)
                      }}
                    >
                      <Popup>
                        <div className="ship-popup">
                          <Title level={4}>{ship.name}</Title>
                          <Divider style={{ margin: '8px 0' }} />
                          
                          {showAISInfo && <AISInfo ship={ship} />}
                          <GPSInfo position={ship.position} />
                          
                          <Space style={{ marginTop: 8 }}>
                            <Button 
                              type="primary" 
                              size="small" 
                              onClick={() => handleViewShip(ship)}
                            >
                              详细信息
                            </Button>
                            <Button 
                              type={trackedShipId === ship.id ? "primary" : "default"}
                              size="small"
                              onClick={() => handleLocateShip(ship)}
                              style={{
                                background: trackedShipId === ship.id ? '#1890ff' : undefined,
                                borderColor: trackedShipId === ship.id ? '#1890ff' : undefined,
                                color: trackedShipId === ship.id ? '#fff' : undefined
                              }}
                              icon={<EnvironmentOutlined />}
                            >
                              {trackedShipId === ship.id ? '取消跟踪' : '定位'}
                            </Button>
                          </Space>
                        </div>
                      </Popup>
                    </Marker>
                    
                    {showTrails && shipTrack[ship.id] && (
                      <Polyline 
                        positions={shipTrack[ship.id].slice(-trailLength).map(point => [point.position.lat, point.position.lng])}
                        color={selectedShipDetails?.id === ship.id ? '#f50' : '#1890ff'}
                        weight={selectedShipDetails?.id === ship.id ? 4 : 2}
                        opacity={0.7}
                      />
                    )}
                  </React.Fragment>
                ))}
              </MapContainer>
            </div>
          </Card>
        </Col>
        
        <Col span={6}>
          <Card 
            title={
              <Space>
                <InfoCircleOutlined />
                实时监控信息
                <Tag color="processing">实时更新</Tag>
              </Space>
            } 
            className="monitoring-card"
            style={{ height: '680px', overflowY: 'auto' }}
            bodyStyle={{ padding: '12px' }}
          >
            <List
              size="small"
              dataSource={filteredShips.filter(ship => ship.status === '航行中')}
              renderItem={ship => (
                <List.Item
                  style={{ 
                    padding: '12px',
                    background: '#ffffff',
                    marginBottom: '8px',
                    border: 'none'
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center' }}>
                      <Text strong style={{ fontSize: '16px', marginRight: '8px' }}>{ship.name}</Text>
                      <Badge 
                        status="processing" 
                        text={
                          <Text type="secondary" style={{ fontSize: '12px' }}>
                            实时
                          </Text>
                        } 
                      />
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DashboardOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                        <Text type="secondary" style={{ width: '42px' }}>航速:</Text>
                        <Text>{ship.speed.toFixed(1)} 节</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CompassOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                        <Text type="secondary" style={{ width: '42px' }}>航向:</Text>
                        <Text>{ship.direction.toFixed(0)}°</Text>
                        <Button 
                          type={trackedShipId === ship.id ? "primary" : "default"}
                          size="small"
                          onClick={() => handleLocateShip(ship)}
                          style={{ 
                            marginLeft: 'auto',
                            borderRadius: '2px',
                            background: trackedShipId === ship.id ? '#1890ff' : undefined,
                            borderColor: trackedShipId === ship.id ? '#1890ff' : undefined,
                            color: trackedShipId === ship.id ? '#fff' : undefined
                          }}
                          icon={<EnvironmentOutlined />}
                        >
                          {trackedShipId === ship.id ? '取消跟踪' : '定位'}
                        </Button>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                          <EnvironmentOutlined style={{ color: '#faad14', marginRight: '8px' }} />
                          <Text type="secondary">位置:</Text>
                        </div>
                        <div style={{ marginLeft: '24px' }}>
                          <div style={{ marginBottom: '4px' }}>
                            <Text type="secondary">经度: </Text>
                            <Text>{ship.position.lng.toFixed(4)}°</Text>
                          </div>
                          <div>
                            <Text type="secondary">纬度: </Text>
                            <Text>{ship.position.lat.toFixed(4)}°</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
              locale={{
                emptyText: (
                  <div style={{ padding: '24px 0', textAlign: 'center' }}>
                    <Text type="secondary">暂无航行中的船舶</Text>
                  </div>
                )
              }}
            />
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '16px' }}>
        <Col span={24}>
          <Card 
            title={
              <Space>
                <InfoCircleOutlined />
                船舶列表
              </Space>
            }
            className="monitoring-card"
          >
            <Table 
              columns={columns} 
              dataSource={filteredShips}
              rowKey="id"
              pagination={{ 
                pageSize: 10,
                size: 'default'
              }}
              size="middle"
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
              
              {selectedShip && shipTrack[selectedShip.id]?.length > 0 && (
                <>
                  <Divider orientation="left">历史轨迹</Divider>
                  <List
                    bordered
                    dataSource={shipTrack[selectedShip.id].slice(0, 10)}
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