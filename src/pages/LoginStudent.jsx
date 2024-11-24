import { React, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../page_component/LoginForm';
import { jwtDecode } from 'jwt-decode'

export default function LoginStudent({sidebar}) {

  const links = [
    { onClick: () => window.history.back(), label: 'Back' },
  ];

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      if (role === 'student') {
        alert("Redirecting to student dashboard.");
        window.location.href = '/dashboard_student';
      
      } else {
        alert("Redirecting to student dashboard.");
        window.location.href = '/dashboard_student';
      }
    }
  }, []);

  // API Call
  return (
    <div className="flex flex-col min-h-screen">
      <Header links={links} />
      <div className="flex flex-grow">
        {sidebar}
        <LoginForm fetchUrl="http://127.0.0.1:5000/login_student" title="Student Login" />
      </div>
      <Footer />
    </div>
  );
}
