import React from 'react';
import './service.styles.scss';

const Service = ({background, title, laser}) => {
    return (
        <div className='service'>
        <div className='service-wrapper' style={{backgroundImage:`url(${background})`}}>
            <div className='content-hover'/>
            <div className='content'>
            <span> {laser} </span>
            <button> Learn More </button>
            </div>
        </div>
        <h4 className='title'> {title}</h4>
        </div>
    )
};

export default Service;