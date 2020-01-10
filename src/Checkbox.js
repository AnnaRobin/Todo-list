import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;


// ///////////
// import React from 'react';
// import PropTypes from 'prop-types';

// const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
//   <input type={type} name={name} checked={checked} onChange={onChange} />
// );

// Checkbox.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   checked: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
// }

// export default Checkbox;