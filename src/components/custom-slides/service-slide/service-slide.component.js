import React from "react";
import './service-slide.styles.scss'
import {Link} from "react-router-dom";
import icon from '../../../assets/icon.PNG'
class ServiceSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;

        return (
            <Link to={`/services/${this.props.service.url}`} className='preview-container'>
            <div index={index}  className='preview-wrapper'>

                    <img src={icon}/>
                    <span>  {this.props.service.title}</span>
            </div>
            </Link>


        );
    }
}

export default ServiceSlide;