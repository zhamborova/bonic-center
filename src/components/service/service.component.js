import React from 'react';
import './service.styles.scss';

const Service = ({background, title, laser}) => {
    return (
        <div className='service'>
        <div className='service-wrapper' style={{backgroundImage:`url(${background})`}}>
            <div className='content-hover'/>
            <div className='content'>
            <span> {laser} </span>
            <button> Подробнее </button>
            </div>
        </div>
        <p className='title'> {title}</p>
        </div>
    )
};

export default Service;