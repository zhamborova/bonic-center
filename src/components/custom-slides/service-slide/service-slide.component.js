import React from "react";
import './service-slide.styles.scss'
import {Link} from "react-router-dom";
import epilation from '../../../assets/icons/epilation.svg'
class ServiceSlide extends React.Component {
    render() {
        const { index, service} = this.props;

        return (
            <Link to={`/services/${this.props.service.url}`} className='service_slide'>
            <div index={index}  className='service_slide__preview'>

                    <img className='preview__icon' src={require(`../../../assets/icons/${service.icon}`)}/>
                    <span className='preview__title'>  {service.title}</span>
            </div>
            </Link>


        );
    }
}

export default ServiceSlide;