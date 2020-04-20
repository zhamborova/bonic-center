import React from "react";
import './service-slide.styles.scss'
class ServiceSlide extends React.Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <div className='preview-container'>
                </div>

            </div>
        );
    }
}

export default ServiceSlide;