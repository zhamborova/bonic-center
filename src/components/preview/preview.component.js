import React from 'react';
import './preview.styles.scss';
import icon from '../../assets/icon.PNG';
const Preview =()=>{
    return(
        <div className='preview-container'>
            <img src={icon} />
            <span>Лечение акне</span>
            <span>Описание лечения акне</span>
        </div>


    )


};

export  default Preview;