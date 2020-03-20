import React from 'react';
import './custom-input.styles.scss';

class CustomInput extends React.Component{
    state = {
        input: ''
    };

    onChange = (e) => {
        this.setState({input: e.target.value}, ()=>{
           this.props.onChange(this.state.input, this.props.name)
        })

    };
    render(){
      const {title, placeholder, width, height, type,name}= this.props;
        return(<div className='custom-input'>
      <label htmlFor={name}>{title}</label>
      <input id={name} type={type} placeholder={placeholder} style={{width:width, height:height}}
      onChange={(e)=>this.onChange(e)}/>
  </div>)}

};

export default CustomInput;