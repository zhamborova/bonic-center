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

      const {title, placeholder, width, height, type,name, value}= this.props;
        return(
       <div className='custom-input'>
      <label className='custom-input__label' htmlFor={name}>{title}</label>
           <input className='custom-input__input'  value={value} id={name} type={type} placeholder={placeholder} style={{width:width, height:height}}
      onChange={(e)=>this.onChange(e)}/>
  </div>)}

};

export default CustomInput;
