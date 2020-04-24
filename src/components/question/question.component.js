import React from 'react';
import './question.styles.scss';
import plus from '../../assets/plus.svg'

class Question extends React.Component{
    state = {
        expanded: false
    };

    formatText = (text) =>{

     return text.split("\\n").map((item, i) => <p key={i}>{item}</p>);
    };

    formatList = (list) =>{
        return list.map(point => (
            <li>{point}</li>
        ))
    };

    render() {

        return(
           <div className='qa-container'  onClick={()=>{this.setState({expanded: !this.state.expanded})}}>
            <div className='qa-sub'>
               <span className='question'>{this.props.question}</span>
                <img src={plus} className='icon'/>
                {/*TO DO ------------ add minus icon*/}
            </div>
               <div className='line'/>
               {this.state.expanded ?
                   <div className='answer'>{
                       this.props.used_for ? this.formatList(this.props.answer) :
                       this.formatText(this.props.answer)}</div> : null }
           </div>


        )
    }

}

export default Question;
