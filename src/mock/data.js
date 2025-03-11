// 船舶数据
export const ships = [
  {
    id: 1,
    name: '梁山1号',
    number: 'LS-001',
    length: 85.5,
    width: 12.3,
    tonnage: 3500,
    enginePower: 2400,
    buildYear: 2018,
    type: '货船',
    status: '航行中',
    position: { lat: 35.552, lng: 116.123 },
    speed: 12.5,
    direction: 45,
    lastPort: '梁山港',
    nextPort: '微山港',
    captain: '张三',
    crewCount: 12,
    safetyEquipment: ['救生衣', '救生艇', '灭火器', '雷达', 'AIS系统'],
    maintenanceRecord: [
      { date: '2023-01-15', type: '常规检修', details: '发动机维护' },
      { date: '2023-04-22', type: '年度检查', details: '船体检查和维修' }
    ],
    voyageHistory: [
      { from: '梁山港', to: '微山港', departureTime: '2023-05-01 08:30', arrivalTime: '2023-05-01 14:45' },
      { from: '微山港', to: '济宁港', departureTime: '2023-05-03 09:15', arrivalTime: '2023-05-03 16:30' }
    ]
  },
  {
    id: 2,
    name: '梁山2号',
    number: 'LS-002',
    length: 92.0,
    width: 14.5,
    tonnage: 4200,
    enginePower: 2800,
    buildYear: 2020,
    type: '集装箱船',
    status: '停泊中',
    position: { lat: 35.543, lng: 116.145 },
    speed: 0,
    direction: 0,
    lastPort: '济宁港',
    nextPort: '梁山港',
    captain: '李四',
    crewCount: 15,
    safetyEquipment: ['救生衣', '救生艇', '灭火器', '雷达', 'AIS系统', 'GMDSS'],
    maintenanceRecord: [
      { date: '2023-02-18', type: '常规检修', details: '电气系统检查' },
      { date: '2023-05-10', type: '季度检查', details: '导航设备校准' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '梁山港', departureTime: '2023-04-28 10:00', arrivalTime: '2023-04-28 17:15' },
      { from: '梁山港', to: '微山港', departureTime: '2023-04-25 08:45', arrivalTime: '2023-04-25 15:30' }
    ]
  },
  {
    id: 3,
    name: '梁山3号',
    number: 'LS-003',
    length: 78.2,
    width: 11.8,
    tonnage: 3000,
    enginePower: 2200,
    buildYear: 2019,
    type: '货船',
    status: '航行中',
    position: { lat: 35.561, lng: 116.167 },
    speed: 10.8,
    direction: 270,
    lastPort: '微山港',
    nextPort: '梁山港',
    captain: '王五',
    crewCount: 10,
    safetyEquipment: ['救生衣', '救生艇', '灭火器', '雷达', 'AIS系统'],
    maintenanceRecord: [
      { date: '2023-03-05', type: '常规检修', details: '推进系统检查' },
      { date: '2023-06-12', type: '半年检查', details: '全船安全设备检查' }
    ],
    voyageHistory: [
      { from: '梁山港', to: '济宁港', departureTime: '2023-05-05 07:30', arrivalTime: '2023-05-05 14:00' },
      { from: '济宁港', to: '微山港', departureTime: '2023-05-08 09:00', arrivalTime: '2023-05-08 15:45' }
    ]
  },
  {
    id: 4,
    name: '梁山4号',
    number: 'LS-004',
    length: 105.0,
    width: 16.2,
    tonnage: 5500,
    enginePower: 3200,
    buildYear: 2021,
    type: '集装箱船',
    status: '停泊中',
    position: { lat: 35.538, lng: 116.132 },
    speed: 0,
    direction: 0,
    lastPort: '青岛港',
    nextPort: '梁山港',
    captain: '赵六',
    crewCount: 18,
    safetyEquipment: ['救生衣', '救生艇', '灭火器', '雷达', 'AIS系统', 'GMDSS', '卫星通信'],
    maintenanceRecord: [
      { date: '2023-01-25', type: '常规检修', details: '燃油系统检查' },
      { date: '2023-04-15', type: '季度检查', details: '通信设备测试' }
    ],
    voyageHistory: [
      { from: '青岛港', to: '济宁港', departureTime: '2023-04-20 06:00', arrivalTime: '2023-04-21 10:30' },
      { from: '济宁港', to: '梁山港', departureTime: '2023-04-22 08:15', arrivalTime: '2023-04-22 15:00' }
    ]
  },
  {
    id: 5,
    name: '梁山5号',
    number: 'LS-005',
    length: 88.7,
    width: 13.5,
    tonnage: 3800,
    enginePower: 2600,
    buildYear: 2017,
    type: '货船',
    status: '维修中',
    position: { lat: 35.547, lng: 116.138 },
    speed: 0,
    direction: 0,
    lastPort: '梁山港',
    nextPort: '济宁港',
    captain: '孙七',
    crewCount: 14,
    safetyEquipment: ['救生衣', '救生艇', '灭火器', '雷达', 'AIS系统'],
    maintenanceRecord: [
      { date: '2023-05-18', type: '紧急维修', details: '主发动机故障修复' },
      { date: '2023-02-10', type: '年度检查', details: '船体结构检查' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '梁山港', departureTime: '2023-05-10 09:30', arrivalTime: '2023-05-10 16:15' },
      { from: '梁山港', to: '微山港', departureTime: '2023-05-05 08:00', arrivalTime: '2023-05-05 14:30' }
    ]
  }
];

// 港口数据
export const ports = [
  {
    id: 1,
    name: '梁山港',
    location: { lat: 35.543, lng: 116.145 },
    area: 1200000,
    berthCount: 12,
    maxShipSize: 8000,
    facilities: [
      { name: '集装箱码头', count: 4 },
      { name: '散货码头', count: 6 },
      { name: '液体货码头', count: 2 }
    ],
    equipment: [
      { name: '岸桥', count: 8 },
      { name: '门机', count: 12 },
      { name: '叉车', count: 25 },
      { name: '牵引车', count: 30 }
    ],
    operationData: {
      dailyThroughput: 15000,
      monthlyThroughput: 450000,
      yearlyThroughput: 5400000,
      shipEntryCount: { daily: 8, monthly: 240, yearly: 2880 }
    },
    contactInfo: {
      address: '山东省济宁市梁山县梁山港区',
      phone: '0537-1234567',
      email: 'liangshanport@example.com'
    }
  },
  {
    id: 2,
    name: '济宁港',
    location: { lat: 35.415, lng: 116.587 },
    area: 1500000,
    berthCount: 15,
    maxShipSize: 10000,
    facilities: [
      { name: '集装箱码头', count: 6 },
      { name: '散货码头', count: 7 },
      { name: '液体货码头', count: 2 }
    ],
    equipment: [
      { name: '岸桥', count: 10 },
      { name: '门机', count: 15 },
      { name: '叉车', count: 30 },
      { name: '牵引车', count: 35 }
    ],
    operationData: {
      dailyThroughput: 18000,
      monthlyThroughput: 540000,
      yearlyThroughput: 6480000,
      shipEntryCount: { daily: 10, monthly: 300, yearly: 3600 }
    },
    contactInfo: {
      address: '山东省济宁市任城区济宁港区',
      phone: '0537-7654321',
      email: 'jiningport@example.com'
    }
  },
  {
    id: 3,
    name: '微山港',
    location: { lat: 34.947, lng: 117.129 },
    area: 800000,
    berthCount: 8,
    maxShipSize: 5000,
    facilities: [
      { name: '集装箱码头', count: 2 },
      { name: '散货码头', count: 5 },
      { name: '液体货码头', count: 1 }
    ],
    equipment: [
      { name: '岸桥', count: 4 },
      { name: '门机', count: 8 },
      { name: '叉车', count: 15 },
      { name: '牵引车', count: 20 }
    ],
    operationData: {
      dailyThroughput: 8000,
      monthlyThroughput: 240000,
      yearlyThroughput: 2880000,
      shipEntryCount: { daily: 5, monthly: 150, yearly: 1800 }
    },
    contactInfo: {
      address: '山东省济宁市微山县微山港区',
      phone: '0537-8765432',
      email: 'weishanport@example.com'
    }
  }
];

// 安全预警数据
export const alerts = [
  {
    id: 1,
    type: '碰撞预警',
    level: '高',
    time: '2023-06-15 08:45:22',
    location: { lat: 35.552, lng: 116.167 },
    ships: ['梁山1号', '梁山3号'],
    description: '两船航线交叉，预计15分钟后可能发生碰撞',
    status: '已处理',
    handler: '张三',
    handlingTime: '2023-06-15 08:50:15',
    handlingMeasures: '通知两船调整航向，避免碰撞'
  },
  {
    id: 2,
    type: '风暴预警',
    level: '中',
    time: '2023-06-14 16:30:10',
    location: { lat: 35.415, lng: 116.587 },
    affectedArea: '济宁港周边海域',
    description: '气象部门预报今晚将有强风暴，风力可达9级',
    status: '处理中',
    handler: '李四',
    handlingMeasures: '通知所有船只返回港口或避开风暴区域'
  },
  {
    id: 3,
    type: '设备故障预警',
    level: '低',
    time: '2023-06-13 10:15:33',
    ship: '梁山2号',
    description: '主发动机温度异常，可能存在故障风险',
    status: '已处理',
    handler: '王五',
    handlingTime: '2023-06-13 11:20:45',
    handlingMeasures: '安排技术人员检修，更换损坏部件'
  },
  {
    id: 4,
    type: '超速预警',
    level: '中',
    time: '2023-06-15 09:30:18',
    location: { lat: 35.561, lng: 116.123 },
    ship: '梁山3号',
    description: '船舶在限速区域内超速航行',
    status: '处理中',
    handler: '赵六',
    handlingMeasures: '通知船长降低航速，遵守航行规定'
  },
  {
    id: 5,
    type: '偏航预警',
    level: '低',
    time: '2023-06-14 14:25:40',
    location: { lat: 35.538, lng: 116.132 },
    ship: '梁山1号',
    description: '船舶偏离预定航线',
    status: '已处理',
    handler: '孙七',
    handlingTime: '2023-06-14 14:40:22',
    handlingMeasures: '联系船长确认情况，调整航线'
  }
];

// 应急预案数据
export const emergencyPlans = [
  {
    id: 1,
    name: '船舶碰撞应急预案',
    level: '一级',
    scope: '所有船舶',
    responsibleDepartment: '安全管理部',
    contactPerson: '张三',
    contactPhone: '13812345678',
    procedures: [
      '立即通知相关船舶采取避险措施',
      '启动应急通信系统，保持与船舶的联系',
      '派出救援船只前往事故现场',
      '组织人员和设备进行救援',
      '评估事故损失并进行善后处理'
    ],
    resources: [
      { name: '救援船', count: 3 },
      { name: '医疗队', count: 2 },
      { name: '消防设备', count: 5 }
    ],
    lastUpdated: '2023-01-15',
    lastDrillDate: '2023-03-20'
  },
  {
    id: 2,
    name: '恶劣天气应急预案',
    level: '二级',
    scope: '所有船舶和港口',
    responsibleDepartment: '运营管理部',
    contactPerson: '李四',
    contactPhone: '13987654321',
    procedures: [
      '密切关注气象信息，及时发布预警',
      '通知船舶返回港口或避开危险区域',
      '加固港口设施，防止损坏',
      '准备应急物资和设备',
      '组织人员进行巡查和值守'
    ],
    resources: [
      { name: '应急发电机', count: 5 },
      { name: '抽水泵', count: 8 },
      { name: '救生设备', count: 20 }
    ],
    lastUpdated: '2023-02-10',
    lastDrillDate: '2023-04-15'
  },
  {
    id: 3,
    name: '火灾应急预案',
    level: '一级',
    scope: '所有船舶和港口设施',
    responsibleDepartment: '安全管理部',
    contactPerson: '王五',
    contactPhone: '13765432198',
    procedures: [
      '发现火情立即报警并通知相关部门',
      '组织人员疏散，确保人身安全',
      '启动消防设备进行初期灭火',
      '协调消防部门进行救援',
      '控制火势后进行损失评估和善后处理'
    ],
    resources: [
      { name: '消防船', count: 2 },
      { name: '消防车', count: 3 },
      { name: '灭火器', count: 50 },
      { name: '消防水带', count: 30 }
    ],
    lastUpdated: '2023-03-05',
    lastDrillDate: '2023-05-10'
  }
];

// 通信系统状态数据
export const communicationSystems = [
  {
    id: 1,
    name: '卫星通信系统',
    type: '卫星通信',
    status: 'active',
    coverage: '全球范围',
    bandwidth: '10 Mbps',
    latency: '500-700 ms',
    reliability: '99.5%',
    lastMaintenance: '2023-05-15',
    nextMaintenance: '2023-08-15',
    connectedShips: ['梁山1号', '梁山2号', '梁山4号']
  },
  {
    id: 2,
    name: '沿海移动通信网络',
    type: '移动通信',
    status: 'active',
    coverage: '沿海50公里范围',
    bandwidth: '100 Mbps',
    latency: '50-100 ms',
    reliability: '98%',
    lastMaintenance: '2023-04-20',
    nextMaintenance: '2023-07-20',
    connectedShips: ['梁山1号', '梁山2号', '梁山3号', '梁山4号', '梁山5号']
  },
  {
    id: 3,
    name: '短波通信系统',
    type: '短波通信',
    status: 'standby',
    coverage: '300公里范围',
    bandwidth: '1 Mbps',
    latency: '200-300 ms',
    reliability: '95%',
    lastMaintenance: '2023-06-01',
    nextMaintenance: '2023-09-01',
    connectedShips: []
  }
];

// 通信系统数据
export const messages = [
  {
    id: 1,
    sender: 'user1',
    receiver: 'me',
    content: '请问明天的船舶调度计划确定了吗？',
    time: '09:30',
    status: 'received'
  },
  {
    id: 2,
    sender: 'me',
    receiver: 'user1',
    content: '是的，已经确定了，我稍后发给你。',
    time: '09:35',
    status: 'sent'
  },
  {
    id: 3,
    sender: 'user2',
    receiver: 'me',
    content: '梁山港3号泊位今天下午需要维护，请通知相关船舶。',
    time: '10:15',
    status: 'received'
  },
  {
    id: 4,
    sender: 'me',
    receiver: 'user2',
    content: '收到，我会安排通知。',
    time: '10:20',
    status: 'sent'
  },
  {
    id: 5,
    sender: 'user3',
    receiver: 'me',
    content: '明天有一批特殊货物需要装卸，请提前准备。',
    time: '11:05',
    status: 'received'
  }
];

export const contacts = [
  {
    id: 'user1',
    name: '张航海',
    position: '调度主管',
    department: '调度中心',
    online: true,
    lastMessage: '请问明天的船舶调度计划确定了吗？'
  },
  {
    id: 'user2',
    name: '李工程',
    position: '维护主管',
    department: '工程部',
    online: true,
    lastMessage: '梁山港3号泊位今天下午需要维护，请通知相关船舶。'
  },
  {
    id: 'user3',
    name: '王货运',
    position: '货运经理',
    department: '货运部',
    online: false,
    lastMessage: '明天有一批特殊货物需要装卸，请提前准备。'
  },
  {
    id: 'user4',
    name: '赵安全',
    position: '安全主管',
    department: '安全部',
    online: true,
    lastMessage: '今天下午3点有安全演习，请准时参加。'
  },
  {
    id: 'user5',
    name: '刘船长',
    position: '船长',
    department: '航运部',
    online: false,
    lastMessage: '我们预计明天上午10点到达港口。'
  }
];

export const notifications = [
  {
    id: 1,
    title: '系统更新通知',
    content: '系统将于今晚22:00-23:00进行例行维护更新，请提前保存工作内容。',
    time: '2023-06-10 15:30',
    read: false
  },
  {
    id: 2,
    title: '安全演习通知',
    content: '定于明天下午14:00在梁山港区进行安全应急演习，请相关人员做好准备。',
    time: '2023-06-10 11:20',
    read: true
  },
  {
    id: 3,
    title: '会议提醒',
    content: '港口运营月度例会将于本周五上午9:00在三楼会议室举行，请准时参加。',
    time: '2023-06-09 16:45',
    read: false
  },
  {
    id: 4,
    title: '天气预警',
    content: '气象部门发布强风预警，未来48小时内可能出现8-9级大风，请各部门做好防范工作。',
    time: '2023-06-09 10:30',
    read: true
  },
  {
    id: 5,
    title: '系统权限变更',
    content: '您的系统权限已更新，现可访问船舶监控高级功能，请刷新后使用。',
    time: '2023-06-08 14:15',
    read: false
  }
];

// 数据可视化数据
export const visualizationData = {
  // 船舶流量数据
  shipTraffic: {
    day: [
      { time: '00:00', inbound: 3, outbound: 2 },
      { time: '04:00', inbound: 2, outbound: 1 },
      { time: '08:00', inbound: 5, outbound: 3 },
      { time: '12:00', inbound: 4, outbound: 4 },
      { time: '16:00', inbound: 6, outbound: 5 },
      { time: '20:00', inbound: 3, outbound: 4 }
    ],
    month: [
      { time: '1日', inbound: 15, outbound: 12 },
      { time: '5日', inbound: 18, outbound: 15 },
      { time: '10日', inbound: 20, outbound: 18 },
      { time: '15日', inbound: 22, outbound: 20 },
      { time: '20日', inbound: 25, outbound: 22 },
      { time: '25日', inbound: 23, outbound: 25 },
      { time: '30日', inbound: 28, outbound: 24 }
    ],
    year: [
      { time: '1月', inbound: 320, outbound: 302 },
      { time: '2月', inbound: 332, outbound: 321 },
      { time: '3月', inbound: 401, outbound: 384 },
      { time: '4月', inbound: 454, outbound: 423 },
      { time: '5月', inbound: 498, outbound: 472 },
      { time: '6月', inbound: 512, outbound: 490 },
      { time: '7月', inbound: 542, outbound: 513 },
      { time: '8月', inbound: 559, outbound: 531 },
      { time: '9月', inbound: 521, outbound: 504 },
      { time: '10月', inbound: 487, outbound: 458 },
      { time: '11月', inbound: 445, outbound: 421 },
      { time: '12月', inbound: 411, outbound: 389 }
    ]
  },
  
  // 货物吞吐量数据
  cargoThroughput: {
    day: [
      { time: '00:00', bulk: 1200, container: 800, liquid: 600 },
      { time: '04:00', bulk: 900, container: 600, liquid: 400 },
      { time: '08:00', bulk: 1800, container: 1200, liquid: 900 },
      { time: '12:00', bulk: 2100, container: 1500, liquid: 1100 },
      { time: '16:00', bulk: 2400, container: 1800, liquid: 1300 },
      { time: '20:00', bulk: 1500, container: 1000, liquid: 800 }
    ],
    month: [
      { time: '1日', bulk: 8500, container: 6200, liquid: 4800 },
      { time: '5日', bulk: 9200, container: 6800, liquid: 5200 },
      { time: '10日', bulk: 10500, container: 7500, liquid: 5800 },
      { time: '15日', bulk: 11200, container: 8200, liquid: 6500 },
      { time: '20日', bulk: 12000, container: 8800, liquid: 7000 },
      { time: '25日', bulk: 11500, container: 8500, liquid: 6800 },
      { time: '30日', bulk: 12500, container: 9200, liquid: 7500 }
    ],
    year: [
      { time: '1月', bulk: 280000, container: 180000, liquid: 150000 },
      { time: '2月', bulk: 260000, container: 170000, liquid: 140000 },
      { time: '3月', bulk: 300000, container: 200000, liquid: 160000 },
      { time: '4月', bulk: 320000, container: 220000, liquid: 170000 },
      { time: '5月', bulk: 340000, container: 230000, liquid: 180000 },
      { time: '6月', bulk: 360000, container: 240000, liquid: 190000 },
      { time: '7月', bulk: 380000, container: 250000, liquid: 200000 },
      { time: '8月', bulk: 400000, container: 260000, liquid: 210000 },
      { time: '9月', bulk: 380000, container: 250000, liquid: 200000 },
      { time: '10月', bulk: 360000, container: 240000, liquid: 190000 },
      { time: '11月', bulk: 340000, container: 230000, liquid: 180000 },
      { time: '12月', bulk: 320000, container: 220000, liquid: 170000 }
    ]
  },
  
  // 港口利用率数据
  portUtilization: {
    day: [
      { time: '00:00', berth: 45, storage: 60, equipment: 30 },
      { time: '04:00', berth: 40, storage: 58, equipment: 25 },
      { time: '08:00', berth: 65, storage: 70, equipment: 55 },
      { time: '12:00', berth: 80, storage: 75, equipment: 70 },
      { time: '16:00', berth: 85, storage: 80, equipment: 75 },
      { time: '20:00', berth: 70, storage: 72, equipment: 60 }
    ],
    month: [
      { time: '梁山港', berth: 78, storage: 82, equipment: 85 },
      { time: '济宁港', berth: 65, storage: 70, equipment: 80 },
      { time: '微山港', berth: 83, storage: 75, equipment: 90 }
    ],
    year: [
      { time: '1月', berth: 65, storage: 70, equipment: 60 },
      { time: '2月', berth: 68, storage: 72, equipment: 62 },
      { time: '3月', berth: 72, storage: 75, equipment: 65 },
      { time: '4月', berth: 75, storage: 78, equipment: 70 },
      { time: '5月', berth: 80, storage: 82, equipment: 75 },
      { time: '6月', berth: 85, storage: 85, equipment: 80 },
      { time: '7月', berth: 88, storage: 88, equipment: 85 },
      { time: '8月', berth: 90, storage: 90, equipment: 88 },
      { time: '9月', berth: 85, storage: 85, equipment: 82 },
      { time: '10月', berth: 80, storage: 80, equipment: 78 },
      { time: '11月', berth: 75, storage: 75, equipment: 72 },
      { time: '12月', berth: 70, storage: 72, equipment: 68 }
    ]
  },
  
  // 安全事件统计数据
  safetyIncidents: {
    day: [
      { time: '00:00', collision: 0, grounding: 0, fire: 0, other: 1 },
      { time: '04:00', collision: 0, grounding: 0, fire: 0, other: 0 },
      { time: '08:00', collision: 1, grounding: 0, fire: 0, other: 1 },
      { time: '12:00', collision: 0, grounding: 1, fire: 0, other: 0 },
      { time: '16:00', collision: 1, grounding: 0, fire: 0, other: 1 },
      { time: '20:00', collision: 0, grounding: 0, fire: 0, other: 1 }
    ],
    month: [
      { time: '1日', collision: 1, grounding: 0, fire: 0, other: 2 },
      { time: '5日', collision: 0, grounding: 1, fire: 0, other: 1 },
      { time: '10日', collision: 1, grounding: 0, fire: 0, other: 2 },
      { time: '15日', collision: 0, grounding: 1, fire: 1, other: 0 },
      { time: '20日', collision: 1, grounding: 0, fire: 0, other: 1 },
      { time: '25日', collision: 0, grounding: 1, fire: 0, other: 2 },
      { time: '30日', collision: 1, grounding: 0, fire: 0, other: 1 }
    ],
    year: [
      { time: '1月', collision: 3, grounding: 2, fire: 1, other: 5 },
      { time: '2月', collision: 2, grounding: 1, fire: 0, other: 4 },
      { time: '3月', collision: 4, grounding: 2, fire: 1, other: 6 },
      { time: '4月', collision: 3, grounding: 3, fire: 0, other: 5 },
      { time: '5月', collision: 5, grounding: 2, fire: 1, other: 7 },
      { time: '6月', collision: 4, grounding: 3, fire: 1, other: 6 },
      { time: '7月', collision: 6, grounding: 4, fire: 2, other: 8 },
      { time: '8月', collision: 5, grounding: 3, fire: 1, other: 7 },
      { time: '9月', collision: 4, grounding: 2, fire: 1, other: 6 },
      { time: '10月', collision: 3, grounding: 2, fire: 0, other: 5 },
      { time: '11月', collision: 2, grounding: 1, fire: 1, other: 4 },
      { time: '12月', collision: 3, grounding: 2, fire: 0, other: 5 }
    ]
  }
};

// 生成船舶历史轨迹数据
export const generateShipTrack = (shipId) => {
  const ship = ships.find(s => s.id === shipId);
  if (!ship) return [];
  
  const basePosition = ship.position;
  const trackPoints = [];
  
  // 生成过去24小时的轨迹点，每小时一个点
  for (let i = 24; i >= 0; i--) {
    const time = new Date();
    time.setHours(time.getHours() - i);
    
    // 根据船舶状态生成不同的轨迹
    let lat, lng;
    if (ship.status === '停泊中' || ship.status === '维修中') {
      // 停泊中的船舶位置基本不变，只有微小浮动
      lat = basePosition.lat + (Math.random() - 0.5) * 0.001;
      lng = basePosition.lng + (Math.random() - 0.5) * 0.001;
    } else {
      // 航行中的船舶有明显位置变化
      const distance = i / 24; // 归一化距离因子
      lat = basePosition.lat + Math.sin(i * 0.5) * 0.05 * (1 - distance);
      lng = basePosition.lng + Math.cos(i * 0.5) * 0.05 * (1 - distance);
    }
    
    trackPoints.push({
      time: time.toISOString(),
      position: { lat, lng },
      speed: ship.status === '航行中' ? ship.speed + (Math.random() - 0.5) * 2 : 0,
      direction: ship.status === '航行中' ? ship.direction + (Math.random() - 0.5) * 10 : 0
    });
  }
  
  return trackPoints;
};

// 生成统计数据
export const statistics = {
  shipCount: {
    total: ships.length,
    sailing: ships.filter(s => s.status === '航行中').length,
    docked: ships.filter(s => s.status === '停泊中').length,
    maintenance: ships.filter(s => s.status === '维修中').length
  },
  portStatistics: {
    totalBerths: ports.reduce((sum, port) => sum + port.berthCount, 0),
    totalThroughput: ports.reduce((sum, port) => sum + port.operationData.dailyThroughput, 0),
    averageUtilization: 78.5, // 百分比
    shipEntryToday: ports.reduce((sum, port) => sum + port.operationData.shipEntryCount.daily, 0)
  },
  alertStatistics: {
    total: alerts.length,
    high: alerts.filter(a => a.level === '高').length,
    medium: alerts.filter(a => a.level === '中').length,
    low: alerts.filter(a => a.level === '低').length,
    handled: alerts.filter(a => a.status === '已处理').length,
    processing: alerts.filter(a => a.status === '处理中').length
  },
  communicationStatistics: {
    systemsOnline: communicationSystems.filter(c => c.status === 'active').length,
    systemsStandby: communicationSystems.filter(c => c.status === 'standby').length,
    systemsOffline: communicationSystems.filter(c => c.status === 'inactive' || c.status === undefined).length,
    averageReliability: communicationSystems.reduce((sum, system) => sum + parseFloat(system.reliability), 0) / communicationSystems.length
  }
};

// 报表数据
export const reports = [
  {
    id: 1,
    name: '2023年6月船舶进出港日报',
    type: '日报',
    generationTime: '2023-06-10 08:30',
    period: '2023-06-09',
    generator: '张三',
    status: '已生成',
    summary: '本报表统计了2023年6月9日的船舶进出港情况，包括船舶数量、类型分布等信息。',
    data: {
      shipEntry: [
        { date: '00:00-04:00', entry: 5, exit: 3 },
        { date: '04:00-08:00', entry: 3, exit: 2 },
        { date: '08:00-12:00', entry: 8, exit: 6 },
        { date: '12:00-16:00', entry: 7, exit: 5 },
        { date: '16:00-20:00', entry: 9, exit: 7 },
        { date: '20:00-24:00', entry: 4, exit: 3 }
      ],
      environment: [
        { date: '00:00', waterQuality: 85, airQuality: 92, noiseLevel: 45 },
        { date: '04:00', waterQuality: 87, airQuality: 94, noiseLevel: 42 },
        { date: '08:00', waterQuality: 82, airQuality: 88, noiseLevel: 58 },
        { date: '12:00', waterQuality: 80, airQuality: 85, noiseLevel: 62 },
        { date: '16:00', waterQuality: 78, airQuality: 83, noiseLevel: 60 },
        { date: '20:00', waterQuality: 83, airQuality: 90, noiseLevel: 48 }
      ],
      portEfficiency: {
        loadingEfficiency: 85,
        customsEfficiency: 78,
        storageEfficiency: 92,
        transportEfficiency: 88
      },
      averageLoadingTime: 2.5,
      averageUnloadingTime: 3.2,
      portComparison: [
        { name: '梁山港', throughput: 15000, utilization: 78 },
        { name: '济宁港', throughput: 18000, utilization: 65 },
        { name: '微山港', throughput: 8000, utilization: 83 }
      ]
    }
  },
  {
    id: 2,
    name: '2023年第23周船舶运营周报',
    type: '周报',
    generationTime: '2023-06-11 09:15',
    period: '2023-06-05 至 2023-06-11',
    generator: '李四',
    status: '已生成',
    summary: '本报表统计了2023年第23周的船舶运营情况，包括船舶吞吐量、运营效率等信息。',
    data: {
      shipEntry: [
        { date: '周一', entry: 25, exit: 22 },
        { date: '周二', entry: 28, exit: 24 },
        { date: '周三', entry: 30, exit: 27 },
        { date: '周四', entry: 32, exit: 29 },
        { date: '周五', entry: 35, exit: 32 },
        { date: '周六', entry: 20, exit: 18 },
        { date: '周日', entry: 18, exit: 15 }
      ],
      environment: [
        { date: '周一', waterQuality: 86, airQuality: 91, noiseLevel: 48 },
        { date: '周二', waterQuality: 85, airQuality: 90, noiseLevel: 50 },
        { date: '周三', waterQuality: 83, airQuality: 88, noiseLevel: 52 },
        { date: '周四', waterQuality: 82, airQuality: 87, noiseLevel: 53 },
        { date: '周五', waterQuality: 80, airQuality: 85, noiseLevel: 55 },
        { date: '周六', waterQuality: 84, airQuality: 89, noiseLevel: 49 },
        { date: '周日', waterQuality: 87, airQuality: 92, noiseLevel: 47 }
      ],
      portEfficiency: {
        loadingEfficiency: 82,
        customsEfficiency: 75,
        storageEfficiency: 90,
        transportEfficiency: 85
      },
      averageLoadingTime: 2.8,
      averageUnloadingTime: 3.5,
      portComparison: [
        { name: '梁山港', throughput: 105000, utilization: 80 },
        { name: '济宁港', throughput: 126000, utilization: 68 },
        { name: '微山港', throughput: 56000, utilization: 85 }
      ]
    }
  },
  {
    id: 3,
    name: '2023年5月港口运营月报',
    type: '月报',
    generationTime: '2023-06-05 10:00',
    period: '2023-05-01 至 2023-05-31',
    generator: '王五',
    status: '已生成',
    summary: '本报表统计了2023年5月的港口运营情况，包括货物吞吐量、泊位利用率等信息。',
    data: {
      shipEntry: [
        { date: '第1周', entry: 180, exit: 165 },
        { date: '第2周', entry: 195, exit: 178 },
        { date: '第3周', entry: 210, exit: 192 },
        { date: '第4周', entry: 205, exit: 188 },
        { date: '第5周', entry: 185, exit: 170 }
      ],
      environment: [
        { date: '第1周', waterQuality: 85, airQuality: 90, noiseLevel: 50 },
        { date: '第2周', waterQuality: 84, airQuality: 89, noiseLevel: 51 },
        { date: '第3周', waterQuality: 82, airQuality: 87, noiseLevel: 53 },
        { date: '第4周', waterQuality: 83, airQuality: 88, noiseLevel: 52 },
        { date: '第5周', waterQuality: 85, airQuality: 90, noiseLevel: 50 }
      ],
      portEfficiency: {
        loadingEfficiency: 80,
        customsEfficiency: 72,
        storageEfficiency: 88,
        transportEfficiency: 82
      },
      averageLoadingTime: 3.0,
      averageUnloadingTime: 3.8,
      portComparison: [
        { name: '梁山港', throughput: 450000, utilization: 82 },
        { name: '济宁港', throughput: 540000, utilization: 70 },
        { name: '微山港', throughput: 240000, utilization: 88 }
      ]
    }
  }
];

// 数据分析数据
export const analysisData = {
  statistics: {
    totalTraffic: 1256,
    trafficGrowth: 5.2,
    cargoVolume: 125600,
    cargoGrowth: 8.1,
    safetyIncidents: 15,
    safetyImprovement: 12.5,
    portEfficiency: 85.3,
    efficiencyGrowth: 3.2
  },
  trafficTrends: [
    { date: '1月', cargoShips: 180, containerShips: 120, tankers: 60, passengerShips: 40 },
    { date: '2月', cargoShips: 175, containerShips: 115, tankers: 55, passengerShips: 35 },
    { date: '3月', cargoShips: 190, containerShips: 130, tankers: 65, passengerShips: 45 },
    { date: '4月', cargoShips: 205, containerShips: 140, tankers: 70, passengerShips: 50 },
    { date: '5月', cargoShips: 220, containerShips: 150, tankers: 75, passengerShips: 55 },
    { date: '6月', cargoShips: 230, containerShips: 160, tankers: 80, passengerShips: 60 }
  ],
  safetyAnalysis: [
    { value: 10, name: '碰撞事件' },
    { value: 8, name: '搁浅事件' },
    { value: 3, name: '火灾事件' },
    { value: 15, name: '其他事件' }
  ]
}; 