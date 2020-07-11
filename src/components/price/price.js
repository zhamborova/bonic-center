import React from "react";
import './price.styles.scss'
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";


class Price extends React.Component {

    state = {
        hidden: true
    }

    render() {
        return <div className='prices' onClick={()=>{this.setState({hidden: !this.state.hidden})}}>
            <span className="prices__title">Цена</span>
            {!this.state.hidden ? <img src={minus} className='question__icon'/> :
                <img src={plus} className='question__icon'/>}
            <div className="qa__line" />
            {!this.state.hidden ?
                <div className="prices__list">
                    {this.props.prices.map(ar => (<div>
                        <p className="prices__area">{ar["area"]}</p>
                        <p className="prices__price"> {ar["price"]}</p>
                    </div>))}
                </div> : null}
                <div className="qa__line" />
        </div>

    }
}
export default Price;