import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import ShipManagement from './pages/ShipManagement';
import PortManagement from './pages/PortManagement';
import MonitoringSystem from './pages/MonitoringSystem';
import AlertSystem from './pages/AlertSystem';
import EmergencyResponse from './pages/EmergencyResponse';
import DataVisualization from './pages/DataVisualization';
import ReportGeneration from './pages/ReportGeneration';
import DataAnalysis from './pages/DataAnalysis';
import CommunicationSystem from './pages/CommunicationSystem';
import SystemSettings from './pages/SystemSettings';

// 检查所有导入的组件是否存在
console.log({
  MainLayout,
  Welcome,
  Dashboard,
  ShipManagement,
  PortManagement,
  MonitoringSystem,
  AlertSystem,
  EmergencyResponse,
  DataVisualization,
  ReportGeneration,
  DataAnalysis,
  CommunicationSystem,
  SystemSettings
});

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ship-management" element={<ShipManagement />} />
          <Route path="port-management" element={<PortManagement />} />
          <Route path="monitoring-system" element={<MonitoringSystem />} />
          <Route path="alert-system" element={<AlertSystem />} />
          <Route path="emergency-response" element={<EmergencyResponse />} />
          <Route path="data-visualization" element={<DataVisualization />} />
          <Route path="report-generation" element={<ReportGeneration />} />
          <Route path="data-analysis" element={<DataAnalysis />} />
          <Route path="communication-system" element={<CommunicationSystem />} />
          <Route path="system-settings" element={<SystemSettings />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App; 