import React from 'react';
import './question.styles.scss';


class Question extends React.Component{
    state = {
        expanded: false
    };


    formatText = (text) =>{

     return text.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
    };

    render() {
        return(
           <div className='qa-container'>
            <div className='qa-sub'>
               <span>{this.props.question}</span>
                <span className='icon'
                      onClick={()=>{this.setState({expanded: !this.state.expanded})}}> </span>

            </div>
               {this.state.expanded ?  this.formatText(this.props.answer) : null }
           </div>


        )
    }

}

export default Question;
