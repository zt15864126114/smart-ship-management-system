// 船舶数据
export const ships = [
  {
    id: 1,
    name: '梁山港运1号',
    number: 'LS-20230001',
    length: 85.5,
    width: 15.3,
    tonnage: 3000,
    enginePower: 1200,
    buildYear: 2020,
    type: '内河散货船',
    status: '航行中',
    position: { lat: 35.552, lng: 116.123 },
    speed: 8.5,
    direction: 45,
    lastPort: '梁山港',
    nextPort: '济宁港',
    captain: '王志明',
    crewCount: 12,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护、辅机检查' },
      { date: '2025-02-15', type: '季度检验', details: '导航设备校准、通信设备测试' },
      { date: '2025-01-20', type: '特检', details: '货物系固设备检查' }
    ],
    voyageHistory: [
      { from: '梁山港', to: '济宁港', departureTime: '2025-03-10 08:30', arrivalTime: '2025-03-10 14:45', cargo: '煤炭', cargoAmount: '2800吨' },
      { from: '微山港', to: '梁山港', departureTime: '2025-03-08 09:15', arrivalTime: '2025-03-08 16:30', cargo: '砂石', cargoAmount: '2500吨' }
    ]
  },
  {
    id: 2,
    name: '济宁港运2号',
    number: 'JN-20230002',
    length: 92.0,
    width: 16.5,
    tonnage: 4200,
    enginePower: 1600,
    buildYear: 2021,
    type: '内河集装箱船',
    status: '停泊中',
    position: { lat: 35.543, lng: 116.145 },
    speed: 0,
    direction: 0,
    lastPort: '济宁港',
    nextPort: '枣庄港',
    captain: '李建国',
    crewCount: 14,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备', '测深仪'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主发电机组维护' },
      { date: '2025-02-15', type: '季度检验', details: '导航设备校准、通信设备测试' },
      { date: '2025-01-20', type: '特检', details: '货物系固设备检查' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '枣庄港', departureTime: '2025-03-10 10:00', arrivalTime: '2025-03-10 18:15', cargo: '集装箱', cargoAmount: '120 TEU' },
      { from: '徐州港', to: '济宁港', departureTime: '2025-03-08 08:45', arrivalTime: '2025-03-08 17:30', cargo: '集装箱', cargoAmount: '100 TEU' }
    ]
  },
  {
    id: 3,
    name: '运河之星',
    number: 'YH-20230003',
    length: 78.2,
    width: 14.8,
    tonnage: 2800,
    enginePower: 1100,
    buildYear: 2019,
    type: '内河多用途船',
    status: '航行中',
    position: { lat: 35.561, lng: 116.167 },
    speed: 7.8,
    direction: 270,
    lastPort: '枣庄港',
    nextPort: '济宁港',
    captain: '张明',
    crewCount: 10,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护、舱底检查' },
      { date: '2025-02-15', type: '半年检验', details: '消防设备更新、安全系统测试' },
      { date: '2025-01-20', type: '特检', details: '货舱防腐处理' }
    ],
    voyageHistory: [
      { from: '枣庄港', to: '济宁港', departureTime: '2025-03-10 07:30', arrivalTime: '2025-03-10 16:00', cargo: '钢材', cargoAmount: '2500吨' },
      { from: '徐州港', to: '枣庄港', departureTime: '2025-03-08 09:00', arrivalTime: '2025-03-08 18:45', cargo: '建材', cargoAmount: '2300吨' }
    ]
  },
  {
    id: 4,
    name: '梁山港运3号',
    number: 'LS-20230004',
    length: 82.0,
    width: 15.2,
    tonnage: 3200,
    enginePower: 1300,
    buildYear: 2022,
    type: '内河散货船',
    status: '装货中',
    position: { lat: 35.538, lng: 116.132 },
    speed: 0,
    direction: 0,
    lastPort: '微山港',
    nextPort: '梁山港',
    captain: '刘强',
    crewCount: 11,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护' },
      { date: '2025-02-15', type: '季度检验', details: '设备检查' },
      { date: '2025-01-20', type: '特检', details: '货舱维修' }
    ],
    voyageHistory: [
      { from: '微山港', to: '梁山港', departureTime: '2025-03-10 06:00', arrivalTime: '2025-03-10 12:30', cargo: '煤炭', cargoAmount: '3000吨' },
      { from: '济宁港', to: '微山港', departureTime: '2025-03-08 08:15', arrivalTime: '2025-03-08 15:00', cargo: '矿石', cargoAmount: '2800吨' }
    ]
  },
  {
    id: 5,
    name: '运河之光',
    number: 'YH-20230005',
    length: 88.7,
    width: 15.5,
    tonnage: 3500,
    enginePower: 1400,
    buildYear: 2021,
    type: '内河集装箱船',
    status: '维修中',
    position: { lat: 35.547, lng: 116.138 },
    speed: 0,
    direction: 0,
    lastPort: '济宁港',
    nextPort: '枣庄港',
    captain: '孙伟',
    crewCount: 13,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '紧急维修', details: '主机气缸维修' },
      { date: '2025-02-15', type: '年度检验', details: '船体结构检查、设备更新' },
      { date: '2025-01-20', type: '特检', details: '起重设备检修' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '枣庄港', departureTime: '2025-03-10 09:30', arrivalTime: '2025-03-10 18:15', cargo: '集装箱', cargoAmount: '110 TEU' },
      { from: '微山港', to: '济宁港', departureTime: '2025-03-08 08:00', arrivalTime: '2025-03-08 16:30', cargo: '集装箱', cargoAmount: '95 TEU' }
    ]
  },
  {
    id: 6,
    name: '运河之鹰',
    number: 'YH-20230006',
    length: 86.5,
    width: 15.8,
    tonnage: 3300,
    enginePower: 1350,
    buildYear: 2022,
    type: '内河集装箱船',
    status: '航行中',
    position: { lat: 35.558, lng: 116.142 },
    speed: 9.2,
    direction: 180,
    lastPort: '枣庄港',
    nextPort: '济宁港',
    captain: '赵国强',
    crewCount: 12,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护、辅机检查' },
      { date: '2025-02-15', type: '季度检验', details: '导航设备校准' },
      { date: '2025-01-20', type: '特检', details: '货舱检查' }
    ],
    voyageHistory: [
      { from: '枣庄港', to: '济宁港', departureTime: '2025-03-10 07:00', arrivalTime: '2025-03-10 15:30', cargo: '集装箱', cargoAmount: '85 TEU' },
      { from: '徐州港', to: '枣庄港', departureTime: '2025-03-08 09:30', arrivalTime: '2025-03-08 18:00', cargo: '集装箱', cargoAmount: '92 TEU' }
    ]
  },
  {
    id: 7,
    name: '京杭1号',
    number: 'JH-20230007',
    length: 90.0,
    width: 16.0,
    tonnage: 3800,
    enginePower: 1500,
    buildYear: 2023,
    type: '内河散货船',
    status: '装货中',
    position: { lat: 35.565, lng: 116.155 },
    speed: 0,
    direction: 0,
    lastPort: '济宁港',
    nextPort: '枣庄港',
    captain: '钱明',
    crewCount: 13,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备', '测深仪'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护' },
      { date: '2025-02-15', type: '年度检验', details: '全船检查' },
      { date: '2025-01-20', type: '特检', details: '货舱维修' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '枣庄港', departureTime: '2025-03-10 11:00', arrivalTime: '2025-03-10 19:30', cargo: '煤炭', cargoAmount: '3500吨' },
      { from: '徐州港', to: '济宁港', departureTime: '2025-03-08 07:45', arrivalTime: '2025-03-08 16:30', cargo: '矿石', cargoAmount: '3200吨' }
    ]
  },
  {
    id: 8,
    name: '微山湖1号',
    number: 'WS-20230008',
    length: 75.5,
    width: 14.2,
    tonnage: 2500,
    enginePower: 1000,
    buildYear: 2021,
    type: '内河油船',
    status: '航行中',
    position: { lat: 35.572, lng: 116.168 },
    speed: 8.8,
    direction: 90,
    lastPort: '微山港',
    nextPort: '济宁港',
    captain: '孙建华',
    crewCount: 11,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备', '防污染设备'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护' },
      { date: '2025-02-15', type: '季度检验', details: '安全设备检查' },
      { date: '2025-01-20', type: '特检', details: '货舱清洗' }
    ],
    voyageHistory: [
      { from: '微山港', to: '济宁港', departureTime: '2025-03-10 08:15', arrivalTime: '2025-03-10 16:45', cargo: '柴油', cargoAmount: '2200吨' },
      { from: '枣庄港', to: '微山港', departureTime: '2025-03-08 09:30', arrivalTime: '2025-03-08 18:00', cargo: '汽油', cargoAmount: '2000吨' }
    ]
  },
  {
    id: 9,
    name: '运河之龙',
    number: 'YH-20230009',
    length: 95.0,
    width: 16.8,
    tonnage: 4500,
    enginePower: 1800,
    buildYear: 2023,
    type: '内河集装箱船',
    status: '维修中',
    position: { lat: 35.579, lng: 116.181 },
    speed: 0,
    direction: 0,
    lastPort: '济宁港',
    nextPort: '徐州港',
    captain: '周强',
    crewCount: 15,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备', '测深仪', 'CCTV系统'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '紧急维修', details: '主机检修' },
      { date: '2025-02-15', type: '季度检验', details: '全船检查' },
      { date: '2025-01-20', type: '特检', details: '电气系统维护' }
    ],
    voyageHistory: [
      { from: '济宁港', to: '徐州港', departureTime: '2025-03-10 10:30', arrivalTime: '2025-03-10 20:00', cargo: '集装箱', cargoAmount: '150 TEU' },
      { from: '连云港', to: '济宁港', departureTime: '2025-03-08 08:00', arrivalTime: '2025-03-08 19:30', cargo: '集装箱', cargoAmount: '135 TEU' }
    ]
  },
  {
    id: 10,
    name: '梁山港运5号',
    number: 'LS-20230010',
    length: 88.5,
    width: 15.6,
    tonnage: 3600,
    enginePower: 1450,
    buildYear: 2022,
    type: '内河散货船',
    status: '停泊中',
    position: { lat: 35.586, lng: 116.194 },
    speed: 0,
    direction: 0,
    lastPort: '枣庄港',
    nextPort: '梁山港',
    captain: '吴刚',
    crewCount: 12,
    safetyEquipment: ['救生衣', '救生圈', '灭火器', '内河雷达', 'AIS系统', 'VHF通讯设备', '测深仪'],
    maintenanceRecord: [
      { date: '2025-03-05', type: '定期检修', details: '主机维护' },
      { date: '2025-02-15', type: '季度检验', details: '安全设备检查' },
      { date: '2025-01-20', type: '特检', details: '货舱检查' }
    ],
    voyageHistory: [
      { from: '枣庄港', to: '梁山港', departureTime: '2025-03-10 09:45', arrivalTime: '2025-03-10 18:15', cargo: '煤炭', cargoAmount: '3300吨' },
      { from: '徐州港', to: '枣庄港', departureTime: '2025-03-08 07:30', arrivalTime: '2025-03-08 16:00', cargo: '矿石', cargoAmount: '3100吨' }
    ]
  }
];

// 港口数据
export const ports = [
  {
    id: 1,
    name: '济宁港',
    location: { lat: 35.415, lng: 116.587 },
    area: 850000,
    berthCount: 32,
    maxShipSize: 5000,
    facilities: [
      { name: '集装箱码头', count: 8 },
      { name: '散货码头', count: 16 },
      { name: '件杂货码头', count: 6 },
      { name: '多用途码头', count: 2 }
    ],
    equipment: [
      { name: '门机', count: 28 },
      { name: '叉车', count: 45 },
      { name: '牵引车', count: 35 },
      { name: '堆高机', count: 20 },
      { name: '轮胎吊', count: 12 }
    ],
    operationData: {
      dailyThroughput: 35000,
      monthlyThroughput: 1050000,
      yearlyThroughput: 12600000,
      shipEntryCount: { daily: 25, monthly: 750, yearly: 9000 }
    },
    contactInfo: {
      address: '山东省济宁市任城区济宁港区',
      phone: '0537-2356789',
      email: 'info@jnport.com'
    }
  },
  {
    id: 2,
    name: '梁山港',
    location: { lat: 35.802, lng: 116.124 },
    area: 620000,
    berthCount: 24,
    maxShipSize: 4000,
    facilities: [
      { name: '集装箱码头', count: 6 },
      { name: '散货码头', count: 12 },
      { name: '件杂货码头', count: 4 },
      { name: '多用途码头', count: 2 }
    ],
    equipment: [
      { name: '门机', count: 20 },
      { name: '叉车', count: 35 },
      { name: '牵引车', count: 28 },
      { name: '堆高机', count: 15 },
      { name: '轮胎吊', count: 8 }
    ],
    operationData: {
      dailyThroughput: 28000,
      monthlyThroughput: 840000,
      yearlyThroughput: 10080000,
      shipEntryCount: { daily: 20, monthly: 600, yearly: 7200 }
    },
    contactInfo: {
      address: '山东省济宁市梁山县梁山港区',
      phone: '0537-7891234',
      email: 'info@lsport.com'
    }
  },
  {
    id: 3,
    name: '微山港',
    location: { lat: 34.947, lng: 117.129 },
    area: 450000,
    berthCount: 18,
    maxShipSize: 3000,
    facilities: [
      { name: '集装箱码头', count: 4 },
      { name: '散货码头', count: 10 },
      { name: '件杂货码头', count: 3 },
      { name: '多用途码头', count: 1 }
    ],
    equipment: [
      { name: '门机', count: 15 },
      { name: '叉车', count: 25 },
      { name: '牵引车', count: 20 },
      { name: '堆高机', count: 12 },
      { name: '轮胎吊', count: 6 }
    ],
    operationData: {
      dailyThroughput: 20000,
      monthlyThroughput: 600000,
      yearlyThroughput: 7200000,
      shipEntryCount: { daily: 15, monthly: 450, yearly: 5400 }
    },
    contactInfo: {
      address: '山东省济宁市微山县微山港区',
      phone: '0537-8765432',
      email: 'info@wsport.com'
    }
  },
  {
    id: 4,
    name: '枣庄港',
    location: { lat: 34.856, lng: 117.321 },
    area: 580000,
    berthCount: 22,
    maxShipSize: 3500,
    facilities: [
      { name: '集装箱码头', count: 5 },
      { name: '散货码头', count: 12 },
      { name: '件杂货码头', count: 4 },
      { name: '多用途码头', count: 1 }
    ],
    equipment: [
      { name: '门机', count: 18 },
      { name: '叉车', count: 30 },
      { name: '牵引车', count: 25 },
      { name: '堆高机', count: 15 },
      { name: '轮胎吊', count: 7 }
    ],
    operationData: {
      dailyThroughput: 25000,
      monthlyThroughput: 750000,
      yearlyThroughput: 9000000,
      shipEntryCount: { daily: 18, monthly: 540, yearly: 6480 }
    },
    contactInfo: {
      address: '山东省枣庄市薛城区枣庄港区',
      phone: '0632-1234567',
      email: 'info@zzport.com'
    }
  },
  {
    id: 5,
    name: '徐州港',
    location: { lat: 34.271, lng: 117.185 },
    area: 680000,
    berthCount: 28,
    maxShipSize: 4500,
    facilities: [
      { name: '集装箱码头', count: 7 },
      { name: '散货码头', count: 14 },
      { name: '件杂货码头', count: 5 },
      { name: '多用途码头', count: 2 }
    ],
    equipment: [
      { name: '门机', count: 22 },
      { name: '叉车', count: 40 },
      { name: '牵引车', count: 32 },
      { name: '堆高机', count: 18 },
      { name: '轮胎吊', count: 10 }
    ],
    operationData: {
      dailyThroughput: 32000,
      monthlyThroughput: 960000,
      yearlyThroughput: 11520000,
      shipEntryCount: { daily: 22, monthly: 660, yearly: 7920 }
    },
    contactInfo: {
      address: '江苏省徐州市云龙区徐州港区',
      phone: '0516-8765432',
      email: 'info@xzport.com'
    }
  },
  {
    id: 6,
    name: '连云港',
    location: { lat: 34.711, lng: 119.162 },
    area: 920000,
    berthCount: 35,
    maxShipSize: 5000,
    facilities: [
      { name: '集装箱码头', count: 9 },
      { name: '散货码头', count: 16 },
      { name: '件杂货码头', count: 7 },
      { name: '多用途码头', count: 3 }
    ],
    equipment: [
      { name: '门机', count: 30 },
      { name: '叉车', count: 50 },
      { name: '牵引车', count: 40 },
      { name: '堆高机', count: 25 },
      { name: '轮胎吊', count: 15 }
    ],
    operationData: {
      dailyThroughput: 40000,
      monthlyThroughput: 1200000,
      yearlyThroughput: 14400000,
      shipEntryCount: { daily: 28, monthly: 840, yearly: 10080 }
    },
    contactInfo: {
      address: '江苏省连云港市连云区连云港港区',
      phone: '0518-9876543',
      email: 'info@lygport.com'
    }
  }
];

// 安全预警数据
export const alerts = [
  {
    id: 1,
    type: '船舶会遇预警',
    level: '中',
    time: '2025-03-10 08:45:22',
    location: { lat: 35.552, lng: 116.123 },
    ships: ['梁山港运1号', '运河之星'],
    description: '两船在运河段航线交叉，建议及时避让',
    status: '已处理',
    handler: '王志明',
    handlingTime: '2025-03-10 08:50:15',
    handlingMeasures: '已通知两船调整航向，现已安全通过'
  },
  {
    id: 2,
    type: '暴雨预警',
    level: '高',
    time: '2025-03-09 16:30:10',
    location: { lat: 35.415, lng: 116.587 },
    affectedArea: '济宁港至梁山港航段',
    description: '气象部门发布暴雨红色预警，预计降雨量将超过150毫米',
    status: '处理中',
    handler: '李建国',
    handlingMeasures: '港口已启动防汛应急预案，船舶谨慎航行'
  },
  {
    id: 3,
    type: '设备故障预警',
    level: '中',
    time: '2025-03-08 10:15:33',
    ship: '运河之光',
    description: '主机冷却系统出现异常，需要检修',
    status: '已处理',
    handler: '张明',
    handlingTime: '2025-03-08 11:20:45',
    handlingMeasures: '更换损坏的冷却泵，恢复正常运行'
  },
  {
    id: 4,
    type: '设备故障预警',
    level: '高',
    time: '2025-03-10 07:15:33',
    ship: '运河之龙',
    description: '主机冷却系统压力异常，需要紧急检修',
    status: '处理中',
    handler: '周强',
    handlingTime: '2025-03-10 07:30:45',
    handlingMeasures: '已通知维修团队，预计4小时内完成维修'
  },
  {
    id: 5,
    type: '航道拥堵预警',
    level: '中',
    time: '2025-03-10 09:20:15',
    location: { lat: 35.415, lng: 116.587 },
    description: '济宁港区航道出现临时拥堵，请过往船舶注意避让',
    status: '处理中',
    handler: '李建国',
    handlingMeasures: '已启动交通管制，疏导船舶有序通行'
  },
  {
    id: 6,
    type: '浓雾预警',
    level: '高',
    time: '2025-03-10 05:30:00',
    location: { lat: 34.947, lng: 117.129 },
    affectedArea: '微山湖水域',
    description: '微山湖水域出现大雾，能见度不足200米',
    status: '处理中',
    handler: '张明',
    handlingMeasures: '已发布航行警告，建议船舶谨慎航行或临时停泊'
  },
  {
    id: 7,
    type: '船舶超载预警',
    level: '高',
    time: '2025-03-10 10:45:18',
    ship: '京杭1号',
    description: '发现疑似超载情况，需要立即核查',
    status: '已处理',
    handler: '钱明',
    handlingTime: '2025-03-10 11:15:30',
    handlingMeasures: '已完成货物重量核查，确认在安全范围内'
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
    contactPerson: '王志明',
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
    lastUpdated: '2025-03-10',
    lastDrillDate: '2025-03-08'
  },
  {
    id: 2,
    name: '恶劣天气应急预案',
    level: '二级',
    scope: '所有船舶和港口',
    responsibleDepartment: '运营管理部',
    contactPerson: '李建国',
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
    lastUpdated: '2025-03-11',
    lastDrillDate: '2025-03-09'
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
    lastUpdated: '2025-03-12',
    lastDrillDate: '2025-03-10'
  },
  {
    id: 4,
    name: '危险品泄漏应急预案',
    level: '一级',
    scope: '所有危险品运输船舶和码头',
    responsibleDepartment: '安全管理部',
    contactPerson: '赵国强',
    contactPhone: '13898765432',
    procedures: [
      '立即隔离泄漏区域，疏散无关人员',
      '穿戴防护装备，控制泄漏源',
      '使用专业设备收集泄漏物',
      '对污染区域进行清洗和消毒',
      '评估环境影响并采取修复措施'
    ],
    resources: [
      { name: '防化服', count: 10 },
      { name: '吸附材料', count: 200 },
      { name: '中和剂', count: 100 },
      { name: '应急泵', count: 5 }
    ],
    lastUpdated: '2025-03-13',
    lastDrillDate: '2025-03-11'
  },
  {
    id: 5,
    name: '溢油应急预案',
    level: '一级',
    scope: '所有船舶和港口水域',
    responsibleDepartment: '环保部',
    contactPerson: '孙建华',
    contactPhone: '13876543210',
    procedures: [
      '确定溢油范围和类型',
      '布设防油栏控制扩散',
      '使用撇油器回收浮油',
      '投放吸油材料处理残油',
      '进行水质监测和评估'
    ],
    resources: [
      { name: '防油栏', count: 1000 },
      { name: '撇油器', count: 5 },
      { name: '吸油毡', count: 2000 },
      { name: '溢油分散剂', count: 500 }
    ],
    lastUpdated: '2025-03-13',
    lastDrillDate: '2025-03-12'
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
    lastMaintenance: '2025-02-15',
    nextMaintenance: '2025-05-15',
    connectedShips: ['梁山港运1号', '济宁港运2号', '运河之光']
  },
  {
    id: 2,
    name: '内河VHF通信网络',
    type: '移动通信',
    status: 'active',
    coverage: '运河沿线100公里范围',
    bandwidth: '100 Mbps',
    latency: '50-100 ms',
    reliability: '98%',
    lastMaintenance: '2025-01-20',
    nextMaintenance: '2025-04-20',
    connectedShips: ['梁山港运1号', '济宁港运2号', '运河之星', '梁山港运3号', '运河之光']
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
    lastMaintenance: '2025-03-01',
    nextMaintenance: '2025-06-01',
    connectedShips: []
  },
  {
    id: 4,
    name: '4G/5G通信网络',
    type: '移动通信',
    status: 'active',
    coverage: '港口及周边50公里范围',
    bandwidth: '1000 Mbps',
    latency: '20-50 ms',
    reliability: '99.9%',
    lastMaintenance: '2025-02-28',
    nextMaintenance: '2025-05-28',
    connectedShips: ['运河之鹰', '京杭1号', '微山湖1号', '运河之龙', '梁山港运5号']
  },
  {
    id: 5,
    name: '北斗导航系统',
    type: '卫星导航',
    status: 'active',
    coverage: '全球范围',
    bandwidth: '不适用',
    latency: '30-50 ms',
    reliability: '99.8%',
    lastMaintenance: '2025-03-01',
    nextMaintenance: '2025-06-01',
    connectedShips: ['运河之鹰', '京杭1号', '微山湖1号', '运河之龙', '梁山港运5号']
  }
];

// 通信系统数据
export const messages = [
  {
    id: 1,
    sender: '调度中心',
    receiver: '运营主管',
    content: '请确认明天的船舶调度计划。',
    time: '2025-03-10 09:30',
    status: 'received'
  },
  {
    id: 2,
    sender: '运营主管',
    receiver: '调度中心',
    content: '计划已确认，稍后发送详细安排。',
    time: '2025-03-10 09:35',
    status: 'sent'
  },
  {
    id: 3,
    sender: '维护部门',
    receiver: '运营主管',
    content: '梁山港3号泊位今天下午需要维护，请通知相关船舶。',
    time: '2025-03-10 10:15',
    status: 'received'
  },
  {
    id: 4,
    sender: '运营主管',
    receiver: '维护部门',
    content: '收到，已安排船舶调整。',
    time: '2025-03-10 10:20',
    status: 'sent'
  },
  {
    id: 5,
    sender: '货运部门',
    receiver: '运营主管',
    content: '明天有一批特殊货物需要装卸，请提前准备。',
    time: '2025-03-10 11:05',
    status: 'received'
  },
  {
    id: 6,
    sender: '安全部门',
    receiver: '所有船长',
    content: '今日15:00将进行防污染应急演练，请相关船舶做好准备。',
    time: '2025-03-10 11:30',
    status: 'sent'
  },
  {
    id: 7,
    sender: '气象部门',
    receiver: '调度中心',
    content: '未来24小时可能出现大雾天气，请提前通知船舶。',
    time: '2025-03-10 11:45',
    status: 'received'
  },
  {
    id: 8,
    sender: '港口管理处',
    receiver: '所有部门',
    content: '本周五下午将进行安全生产大检查，请各部门准备。',
    time: '2025-03-10 12:00',
    status: 'sent'
  }
];

export const contacts = [
  {
    id: 'user1',
    name: '王志明',
    position: '调度主管',
    department: '调度中心',
    online: true,
    lastMessage: '请确认明天的船舶调度计划。',
    lastActive: '2025-03-10 09:30'
  },
  {
    id: 'user2',
    name: '李建国',
    position: '维护主管',
    department: '工程部',
    online: true,
    lastMessage: '梁山港3号泊位今天下午需要维护。',
    lastActive: '2025-03-10 10:15'
  },
  {
    id: 'user3',
    name: '张明',
    position: '货运经理',
    department: '货运部',
    online: false,
    lastMessage: '明天有一批特殊货物需要装卸。',
    lastActive: '2025-03-10 11:05'
  },
  {
    id: 'user4',
    name: '刘强',
    position: '安全主管',
    department: '安全部',
    online: true,
    lastMessage: '今天下午3点有安全演习。',
    lastActive: '2025-03-10 11:30'
  },
  {
    id: 'user5',
    name: '孙伟',
    position: '船长',
    department: '航运部',
    online: false,
    lastMessage: '预计明天上午10点到达港口。',
    lastActive: '2025-03-10 08:45'
  },
  {
    id: 'user6',
    name: '赵国强',
    position: '安全总监',
    department: '安全部',
    online: true,
    lastMessage: '应急演练准备就绪。',
    lastActive: '2025-03-10 11:45'
  },
  {
    id: 'user7',
    name: '钱明',
    position: '设备主管',
    department: '设备部',
    online: true,
    lastMessage: '设备维护报告已提交。',
    lastActive: '2025-03-10 12:00'
  },
  {
    id: 'user8',
    name: '周强',
    position: '环保主管',
    department: '环保部',
    online: false,
    lastMessage: '水质监测数据已更新。',
    lastActive: '2025-03-10 10:30'
  }
];

export const notifications = [
  {
    id: 1,
    title: '系统更新通知',
    content: '系统将于今晚22:00-23:00进行例行维护更新，请提前保存工作内容。',
    time: '2025-03-10 15:30',
    read: false
  },
  {
    id: 2,
    title: '安全演习通知',
    content: '定于明天下午14:00在梁山港区进行安全应急演习，请相关人员做好准备。',
    time: '2025-03-10 11:20',
    read: true
  },
  {
    id: 3,
    title: '会议提醒',
    content: '港口运营月度例会将于本周五上午9:00在三楼会议室举行，请准时参加。',
    time: '2025-03-09 16:45',
    read: false
  },
  {
    id: 4,
    title: '天气预警',
    content: '气象部门发布暴雨预警，未来48小时内可能出现强降雨，请各部门做好防范工作。',
    time: '2025-03-09 10:30',
    read: true
  },
  {
    id: 5,
    title: '系统权限变更',
    content: '您的系统权限已更新，现可访问船舶监控高级功能，请刷新后使用。',
    time: '2025-03-08 14:15',
    read: false
  },
  {
    id: 6,
    title: '设备维护提醒',
    content: '3号泊位起重机需要进行季度检修，请相关部门安排时间。',
    time: '2025-03-10 11:00',
    read: false
  },
  {
    id: 7,
    title: '培训通知',
    content: '新版智能调度系统培训将于下周二上午10:00开始，请准时参加。',
    time: '2025-03-10 11:30',
    read: false
  },
  {
    id: 8,
    title: '系统升级通知',
    content: '港口管理系统将于本周日凌晨2:00-4:00进行升级，请提前保存数据。',
    time: '2025-03-10 12:00',
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
    averageUtilization: 78.5,
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
    name: '2025年3月船舶进出港日报',
    type: '日报',
    generationTime: '2025-03-10 08:30',
    period: '2025-03-09',
    generator: '王志明',
    status: '已生成',
    summary: '本报表统计了2025年3月9日的船舶进出港情况，包括船舶数量、类型分布等信息。',
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
    name: '2025年第10周船舶运营周报',
    type: '周报',
    generationTime: '2025-03-09 09:15',
    period: '2025-03-04 至 2025-03-10',
    generator: '李建国',
    status: '已生成',
    summary: '本报表统计了2025年第10周的船舶运营情况，包括船舶吞吐量、运营效率等信息。'
  },
  {
    id: 3,
    name: '2025年2月港口运营月报',
    type: '月报',
    generationTime: '2025-03-05 10:00',
    period: '2025-02-01 至 2025-02-28',
    generator: '张明',
    status: '已生成',
    summary: '本报表统计了2025年2月的港口运营情况，包括货物吞吐量、泊位利用率等信息。',
    data: {
      shipEntry: [
        { date: '第1周', entry: 180, exit: 165 },
        { date: '第2周', entry: 195, exit: 178 },
        { date: '第3周', entry: 210, exit: 192 },
        { date: '第4周', entry: 205, exit: 188 }
      ],
      environment: [
        { date: '第1周', waterQuality: 85, airQuality: 90, noiseLevel: 50 },
        { date: '第2周', waterQuality: 84, airQuality: 89, noiseLevel: 51 },
        { date: '第3周', waterQuality: 82, airQuality: 87, noiseLevel: 53 },
        { date: '第4周', waterQuality: 83, airQuality: 88, noiseLevel: 52 }
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