export async function handleLogout() {
  const token = sessionStorage.getItem('token');
  try {
    // API Call
    const response = await fetch('http://127.0.0.1:5000/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.success) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('email');
      window.location.href = '/';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error logging out:', error);
    alert('An error occurred while logging out.');
  }
}

export async function fetchDetails(token, apiUrl, setDetails ) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.success) {
      if (data.teacher) {
        // console.log(data.teacher);
        setDetails(data.teacher);
      } else {
        setDetails(data.student);
      }
    } else {
      handleUnauthorized();
    }
  } catch (error) {
    console.error('Error fetching details:', error);
    handleUnauthorized();
  }
}


export async function checkToken(token) {
  try {
    const response = await fetch('http://127.0.0.1:5000/check_token', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.success) {
    } else {
      handleUnauthorized();
    }
  } catch (error) {
    console.error('Error fetching details:', error);
    handleUnauthorized();
  }
}


export const handleUnauthorized = () => {
  console.log('Not Logged In');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
  sessionStorage.removeItem('email');
  window.location.href = '/';
};