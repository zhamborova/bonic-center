import React from "react";
import './doctor.styles.scss'
const Doctor = (props) => {

    return (
        <div  {...props}>
            <div className='doctor-slide'>
                <div className='doctor-slide__fill'/>

                <span className='doctor-slide__doc-name'>{props.name}</span>
            </div>

        </div>

    )


};

export default Doctor;