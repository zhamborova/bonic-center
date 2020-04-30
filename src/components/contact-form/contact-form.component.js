import React from 'react';
import './contact-form.styles.scss';
import CustomInput from "../custom-input/custom-input.component";
import emailjs from "emailjs-com";

class ContactForm extends React.Component{
    state={
      name:'',
      email:'',
      phone:'',
      message:''
    };


    changeHandler = (val, field) => {
      this.setState({[field]: val});
    };
    onSubmit=(e)=>{
        e.preventDefault();
       emailjs.send('yandex',
           'contact_form', this.state, 'user_tWom2VEWvNWH9D8aB02N7').then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
    };
    render() {
    return(
      <div className='contact-form'>

          <form onSubmit={(e)=>{this.onSubmit(e)}}>
              <span className='svyzhites'>Свяжитесь с нами</span>
              <div className='line'/>
              <CustomInput title={'Имя'} name='name'  type={'text'}
               onChange={this.changeHandler}/>
              <CustomInput title={'Email'} name='email'  type={'email'}
                           onChange={this.changeHandler}/>
              <CustomInput title={'Телефон'} name='phone'  type={'text'}
                           onChange={this.changeHandler}/>
              <div className='message' > <label htmlFor="message">Сообщение </label>
              <textarea name='message' onChange={(e)=>{this.changeHandler(e.target.value,'message')}}/>
              </div>
              <button className="send" type='submit' >Отправить сообщение</button>

          </form>
      </div>


  )
    }

};

export default ContactForm;