import React from 'react';
import './styles.scss';

const CustomButton = ({ children, inverted, ...auxProps }) => {
  console.log(inverted);
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...auxProps}>
      {children}
    </button>
  );
};

export default CustomButton;
