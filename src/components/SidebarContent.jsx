import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { Home, User, Settings, ClipboardPen, FileText } from "lucide-react";

const SidebarContent = () => {
  const location = useLocation();
  const path = location.pathname;

  const sidebar_home = (
    <Sidebar>
      <SidebarItem icon={<Home />} text="Home" to="/" active={path === '/'} />
      <SidebarItem icon={<User />} text="Sign Up Teacher" to="/signup_teacher" active={path === '/signup_teacher'} />
      <SidebarItem icon={<User />} text="Sign Up Student" to="/signup_student" active={path === '/signup_student'} />
      <SidebarItem icon={<User />} text="Login Teacher" to="/login_teacher" active={path === '/login_teacher'} />
      <SidebarItem icon={<User />} text="Login Student" to="/login_student" active={path === '/login_student'} />
    </Sidebar>
  );

  const sidebar_dashboard_teacher = (
    <Sidebar>
      <SidebarItem icon={<Home />} text="Dashboard" to="/dashboard_teacher" active={path === '/dashboard_teacher'} />
    </Sidebar>
  );

  const sidebar_dashboard_student = (
    <Sidebar>
      <SidebarItem icon={<Home />} text="Dashboard" to="/dashboard_student" active={path === '/dashboard_student'} />
      {/* <SidebarItem icon={<FileText />} text="All Grievances" to="/dashboard_user/fetch_grievance_user" active={path === '/dashboard_user/fetch_grievance_user'} />
      <SidebarItem icon={<ClipboardPen />} text="File Grievance" to="/dashboard_user/file_grievance" active={path === '/dashboard_user/file_grievance'} />
      <SidebarItem icon={<Settings />} text="Change Password" to="/dashboard_user/change_password" active={path === '/dashboard_user/change_password'} /> */}
    </Sidebar>
  );

  return {
    sidebar_home,
    sidebar_dashboard_teacher,
    sidebar_dashboard_student,
  };
};

export default SidebarContent;
