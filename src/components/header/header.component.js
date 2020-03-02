import React from 'react';
import './header.styles.scss';
import ServiceDropDown from "../service-dropdown/service-dropdown.component";
import {serviceList} from "../service-dropdown/service-list";

class Header extends React.Component {
   state ={
    hidden: true
};

 render() {


    return (
    <div className='header-container'>
     <div className='logo-container'>
         <span className='logo'> B O N I C </span>
         <p className='sub-logo'>ЦЕНТР ЛАЗЕРНОЙ КОСМЕТОЛОГИИ</p>
     </div>
     <div className='header-options'>
      <span className='option'>
       Главная
      </span>
         <span className='option' onClick={()=>(this.setState({hidden: !this.state.hidden}))}>
       Услуги
      </span>
         <span className='option'>
       FAQ
      </span>
         <span className='option'>
        О нас
      </span>
     </div>

        {this.state.hidden ? null: <ServiceDropDown serviceItems={serviceList}/>}
    </div>
  );
  }
};

export default Header;