import React from 'react';
import './question.styles.scss';
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
class Question extends React.Component{
    state = {
        expanded: false
    };



    render() {

        return(
           <div className='qa'  onClick={()=>{this.setState({expanded: !this.state.expanded})}}>
            <div className='qa__expanded'>
               <span className='expanded__question'>{this.props.question}</span>
                {this.state.expanded ? <img src={minus} className='question__icon icon--minus'/> :
                                       <img src={plus} className='question__icon'/>}

            </div>
               <div className='qa__line'/>
               {this.state.expanded ?
                   <div className='qa__answer'>
                       {this.props.children}
                   </div> : null }
           </div>


        )
    }

}

export default Question;
