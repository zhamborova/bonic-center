import React from 'react';
import './contact-form.styles.scss';
import CustomInput from "../custom-input/custom-input.component";

const ContactForm = ()=>{
  return(

      <div className='contact-form'>
          <form>
              <div className='contact-left'>
                  <h2>Свяжитесь с нами</h2>
              <CustomInput title={'Имя'} height={'48px'} width={'300px'} type={'text'}/>
              <CustomInput title={'Email'} height={'48px'} width={'300px'} type={'email'}/>
              <CustomInput title={'Телефон'} height={'48px'} width={'300px'} type={'text'}/>
              </div>
              <div className='contact-right'>
                  <CustomInput title={'Сообщение'} height={'155px'} width={'300px'} type={'textarea'}/>
                  <button>Отправить</button>
              </div>
          </form>
      </div>


  )

};

export default ContactForm;