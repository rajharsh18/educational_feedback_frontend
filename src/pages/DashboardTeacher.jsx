import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardTeacherBody from '../page_component/DashboardTeacherBody';
import { handleLogout, fetchDetails, handleUnauthorized } from '../components/Functions';
import { jwtDecode } from 'jwt-decode';
export default function DashboardTeacher({sidebar}) {

  const [teacherDetails, setTeacherDetails] = useState({});
  const links = [
    { onClick: handleLogout, label: 'Logout' },
    { onClick: () => window.history.back(), label: 'Back' },
  ];

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      // API Call
      if (role === 'teacher') {
        fetchDetails(token, 'http://127.0.0.1:5000/dashboard_teacher', setTeacherDetails )
      } else {
        handleUnauthorized();
      }
    } else {
      handleUnauthorized();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header links={links} />
      <div className="flex flex-grow">
        {sidebar}
        <DashboardTeacherBody teacherDetails={teacherDetails} />
      </div>
      <Footer />
    </div>
  );
}
