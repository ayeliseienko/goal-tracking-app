import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ input, label, className = '' }, ref) => {
  return (
    <div className={`flex flex-col justify-start items-start ${className}`}>
      {label.isVisible && (
        <label
          htmlFor={input.id}
          className={`block mb-2 text-sm dark:text-lightGrey`}
        >
          {label.title}
        </label>
      )}
      <input
        {...input}
        ref={ref}
        className={`w-full p-2 rounded-lg focus:ring-blue focus:border-blue
        dark:bg-darkGrey dark:placeholder-darkModeLightBlack dark:text-darkModeLightBlack`}
      />
    </div>
  );
});

export default Input;

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.object.isRequired,
  className: PropTypes.string,
};
