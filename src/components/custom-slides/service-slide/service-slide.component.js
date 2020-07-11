import React from "react";
import './service-slide.styles.scss'
import {Link} from "react-router-dom";
import icon from '../../../assets/icons/1.svg'
class ServiceSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;

        return (
            <Link to={`/services/${this.props.service.url}`} className='service_slide'>
            <div index={index}  className='service_slide__preview'>

                    <img className='preview__icon' src={icon}/>
                    <span className='preview__title'>  {this.props.service.title}</span>
            </div>
            </Link>


        );
    }
}

export default ServiceSlide;