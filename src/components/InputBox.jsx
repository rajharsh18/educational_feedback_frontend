import React from 'react';
import PropTypes from 'prop-types';

class InputBox extends React.Component {
  render() {
    const { type, id, name, required, hidden, label, pattern, readOnly, disabled, className, onChange, value } = this.props;

    return (
      <div className={`mb-4 ${hidden ? 'hidden' : ''}`}>
        {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          pattern={pattern}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          value = {value}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${className}`}
          placeholder={label}
        />
      </div>
    );
  }
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  label: PropTypes.string,
  pattern: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

InputBox.defaultProps = {
  required: false,
  hidden: false,
  label: '',
  readOnly: false,
  disabled: false,
  className: '',
  onChange: () => {},
};

export default InputBox;
