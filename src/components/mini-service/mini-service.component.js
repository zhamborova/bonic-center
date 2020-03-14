import React from 'react';
import './mini-service.styles.scss';
import {Link} from "react-router-dom";


const MiniService = ({background, title, laser, serviceUrl}) => {
    console.log(serviceUrl)
    return (
        <div className='service'>
        <div className='service-wrapper' style={{backgroundImage:`url(${background})`}}>
            <div className='content-hover'/>
            <div className='content'>
            <span> {laser} </span>
            <Link to={`/services${serviceUrl}`}> Подробнее </Link>
            </div>
        </div>
        <p className='title'> {title}</p>
        </div>
    )
};

export default MiniService;