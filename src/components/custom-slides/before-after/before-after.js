import React from "react";
import before from "../../../assets/before.PNG";
import after from "../../../assets/after.PNG";
import './before-after.styles.scss';

class BeforeAfter extends React.Component {
    render() {
        return (
            <div {...this.props}>
                <div className='before-after'>
                    <label htmlFor={'before'}>До</label>
                    <label htmlFor={'after'}>После</label>
                    <img id='before'src={before} />
                    <img id='after' src={after}/>
                </div>
            </div>
        );
    }
}

export default BeforeAfter;