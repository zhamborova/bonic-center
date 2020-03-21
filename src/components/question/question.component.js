import React from 'react';
import './question.styles.scss';


class Question extends React.Component{
    state = {
        expanded: false
    };

    render() {
        return(
           <div className='qa-container'>
            <div>
               <span>{this.props.question}</span>
                <span className='icon'
                      onClick={()=>{this.setState({expanded: !this.state.expanded})}}> </span>

            </div>
               {this.state.expanded ?  <p className="answer">{this.props.answer}</p> : null }
           </div>


        )
    }

}

export default Question;
