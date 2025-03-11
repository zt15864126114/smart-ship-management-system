import React from 'react';
import { 
  Card, 
  List, 
  Tag, 
  Space, 
  Typography
} from 'antd';
import { emergencyPlans } from '../mock/data';

const { Title, Text } = Typography;

const EmergencyResponse = () => {
  return (
    <div>
      <Title level={2}>应急响应系统</Title>
      
      <Card title="应急预案列表">
        <List
          itemLayout="vertical"
          dataSource={emergencyPlans}
          renderItem={plan => (
            <List.Item
              key={plan.id}
            >
              <List.Item.Meta
                title={
                  <Space>
                    <span>{plan.name}</span>
                    <Tag color={plan.level === '一级' ? 'red' : plan.level === '二级' ? 'orange' : 'green'}>
                      {plan.level}
                    </Tag>
                  </Space>
                }
                description={
                  <Space>
                    <Text>适用范围: {plan.scope}</Text>
                    <Text>负责部门: {plan.responsibleDepartment}</Text>
                    <Text>联系人: {plan.contactPerson}</Text>
                  </Space>
                }
              />
              <div>
                <Text strong>主要步骤:</Text>
                <ul>
                  {plan.procedures.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default EmergencyResponse; 