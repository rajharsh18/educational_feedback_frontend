import {React, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupTeacherForm from '../page_component/SignupTeacherForm';
export default function SignupTeacher({sidebar}) {

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header links={links} />
      <div className="flex flex-grow">
        {sidebar}
        <SignupTeacherForm />
      </div>
      <Footer />
    </div>
  );
}
