import React from 'react';
import './custom-input.styles.scss';

const CustomInput =({title, placeholder, width, height, type}) =>{

  return  <div className='custom-input'>
      <label htmlFor={title}>{title}</label>
      <input  id={title} type={type} placeholder={placeholder} style={{width:width, height:height}} />
  </div>

};

export default CustomInput;