import React from 'react';
import './contact-form.styles.scss';
import CustomInput from "../custom-input/custom-input.component";

const ContactForm = ()=>{
  return(

      <div className='contact-form'>


          <form>
                  <h2>Свяжитесь с нами</h2>
              <CustomInput title={'Имя'} height={'24px'} width={'300px'} type={'text'}/>
              <CustomInput title={'Email'} height={'24px'} width={'300px'} type={'email'}/>
              <CustomInput title={'Телефон'} height={'24px'} width={'300px'} type={'text'}/>
                  <CustomInput title={'Сообщение'} height={'24px'} width={'300px'} type={'textarea'}/>
                  <button>Отправить</button>

          </form>
          <div className={'bluebox'}/>
      </div>


  )

};

export default ContactForm;