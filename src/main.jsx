import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import SidebarContent from './components/SidebarContent.jsx';
import SignupTeacher from './pages/SignupTeacher.jsx';
import SignupStudent from './pages/SignupStudent.jsx';
import LoginTeacher from './pages/LoginTeacher.jsx';
import LoginStudent from './pages/LoginStudent.jsx';
import DashboardTeacher from './pages/DashboardTeacher.jsx';
import DashboardStudent from './pages/DashboardStudent.jsx';

const MainApp = () => {
  const sidebarContent = SidebarContent();

  return (
    <Routes>
      {/* Home Routes */}
      <Route path="/" element={<App sidebar_home={sidebarContent.sidebar_home} />} />
      <Route path="/signup_teacher" element={<SignupTeacher sidebar={sidebarContent.sidebar_home} />} />
      <Route path="/signup_student" element={<SignupStudent sidebar={sidebarContent.sidebar_home} />} />
      <Route path="/login_teacher" element={<LoginTeacher sidebar={sidebarContent.sidebar_home} />} />
      <Route path="/login_student" element={<LoginStudent sidebar={sidebarContent.sidebar_home} />} />

      {/* Teacher Routes */}
      <Route path="/dashboard_teacher" element={<DashboardTeacher sidebar={sidebarContent.sidebar_dashboard_teacher} />} />

      {/* Students Routes */}
      <Route path="/dashboard_Student" element={<DashboardStudent sidebar={sidebarContent.sidebar_dashboard_student} />} />

    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  // </React.StrictMode>
);
  