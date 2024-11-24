import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App({sidebar_home}) {
  const links = [
    // { path: '/signup', label: 'Sign Up' },
    // { path: '/login_admin', label: 'Admin Login' },
    // { path: '/login_user', label: 'User Login' },
    // { path: '/grievance_unregistered', label: 'File Grievance' },
    // { path: '/status_check', label: 'Check Status' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header links={links} />
      <div className="flex flex-grow">
        {sidebar_home}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
