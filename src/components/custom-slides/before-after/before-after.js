import React from "react";
import before from "../../../assets/before.PNG";
import after from "../../../assets/after.PNG";
import './before-after.styles.scss';

class BeforeAfter extends React.Component {
    render() {
        return (
            <div {...this.props}>
                <div className='ba-slide'>
                    <label htmlFor={'before'}>До</label>
                    <img className='ba-slide__before-img' src={before} />
                    <label htmlFor={'after'}>После</label>
                    <img className='ba-slide__after-img' src={after}/>
                </div>
            </div>
        );
    }
}

export default BeforeAfter;