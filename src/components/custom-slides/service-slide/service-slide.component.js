import React from "react";
import './service-slide.styles.scss'
import {Link} from "react-router-dom";

class ServiceSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <div className='preview-container'>
                    <Link to={`/services/${this.props.url}/${this.props.service.url}`}>  {this.props.service.title}</Link>
                </div>

            </div>
        );
    }
}

export default ServiceSlide;