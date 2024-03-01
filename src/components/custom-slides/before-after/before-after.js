import React from "react";
import './before-after.styles.scss';

class BeforeAfter extends React.Component {
    render() {
        return (
            <div {...this.props}>
                <div className='ba-slide'>
                    <label htmlFor={'before'}>До</label>
                    <img className='ba-slide__before-img' src={this.props.before} />
                    <label htmlFor={'after'}>После</label>
                    <img className='ba-slide__after-img' src={this.props.after}/>
                </div>
            </div>
        );
    }
}

export default BeforeAfter;