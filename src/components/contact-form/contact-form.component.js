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
          <form className='contact-form' onSubmit={(e)=>{this.onSubmit(e)}}>
              <span className='contact-form__contact-us'>Свяжитесь с нами</span>
              <div className='contact-form__line'/>
              <CustomInput title={'Имя'} name='name'  type={'text'}
               onChange={this.changeHandler}/>
              <CustomInput title={'Email'} name='email'  type={'email'}
                           onChange={this.changeHandler}/>
              <CustomInput title={'Телефон'} name='phone'  type={'text'}
                           onChange={this.changeHandler}/>
              <div className='contact-form__message' >
                  <label htmlFor="message">Сообщение </label>
              <textarea name='message' onChange={(e)=>{this.changeHandler(e.target.value,'message')}}/>
              </div>
              <button className="contact-form__send" type='submit' >Отправить </button>
          </form>


  )
    }

};

export default ContactForm;