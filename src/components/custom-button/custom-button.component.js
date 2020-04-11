import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({text}) => {
    return <button className='custom-btn' >{text}</button>
};

export default CustomButton;