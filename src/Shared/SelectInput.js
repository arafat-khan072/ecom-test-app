import React from 'react';

const SelectInput = ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
export default SelectInput;