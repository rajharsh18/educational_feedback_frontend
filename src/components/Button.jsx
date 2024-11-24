import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { type, onClick, children, className, hidden, disabled, name, id } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        className={`text-white px-4 py-2 rounded-md ${className}`}
        hidden={hidden}
        disabled={disabled}
        name={name}
        id={id}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
  hidden: false,
  disabled: false,
  name: '',
  id: '',
};

export default Button;
