import React from "react";
import './service-slide.styles.scss'
import {Link} from "react-router-dom";
import icon from '../../../assets/icon.PNG'
class ServiceSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;

        return (
            <div index={index}  className='preview-wrapper'>
                <Link to={`/services/${this.props.url}/${this.props.service.url}`} className='preview-container'>
                    <img src={icon}/>
                    <span>  {this.props.service.title}</span>
                </Link>

            </div>
        );
    }
}

export default ServiceSlide;