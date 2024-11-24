import { React, Component } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { jwtDecode } from 'jwt-decode';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch(this.props.fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const role = jwtDecode(data.token).role;
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('role', role);
          // window.location.href = role === 'admin' ? '/dashboard_admin' : role === 'superAdmin' ? '/dashboard_superAdmin' : '/dashboard_user';
          if (role === 'teacher') {
            window.location.href = '/dashboard_teacher';
          } else {
            window.location.href = '/dashboard_student';
          } 
        } else {
          alert(data.message);
        }
      })
      .catch(() => {
        alert('An error occurred');
      });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { email } = this.state;
    const { title } = this.props;

    return (
      <div className="flex-grow p-8">
        <h2 className="text-2xl mb-4">{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <InputBox type="email" id="email" name="email" required={true} label="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleEmailChange} />
          <InputBox type="password" id="password" name="password" required={true} label="Password" />
          <Button type="submit" className="bg-blue-500">Login</Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
