import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { links } = this.props;

    return (
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <Link to="/" className="text-white text-xl">Educational Feedback</Link>
        {/* <h1 className="text-2xl">AGRIM</h1> */}
        <nav>
          {links.map((link, index) => (
            link.onClick ? (
              <button 
                key={index} 
                onClick={link.onClick} 
                className="text-white ml-4"
              >
                {link.label}
              </button>
            ) : (
              <Link 
                key={index} 
                to={link.path} 
                className="text-white ml-4"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default Header;
