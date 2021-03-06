import React from 'react';

import './Form-styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} autoComplete="new-password" />
    {label ? (
      <label
        className={`${otherProps.value ? 'shrink' : '' } form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;