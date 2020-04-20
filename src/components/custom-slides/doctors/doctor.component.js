import React from "react";
import './doctor.styles.scss'
const Doctor = (props) => {

    return (
        <div  {...props}>
            <div className='doctor-slide'>
                <div className='fill'/>

                <span id='doc-name'>{props.name}</span>
            </div>

        </div>

    )


};

export default Doctor;