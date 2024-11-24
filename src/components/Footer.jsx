
import React, { Component } from 'react';
  
class Footer extends Component {
  render() {
    const { links } = this.props;
 
    return (
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; 2024 AGRIM. All rights reserved.</p>
      </footer>
    );
  }
}
 
export default Footer;
  