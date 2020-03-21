import React from 'react';
import './header.styles.scss';
import ServiceDropDown from "../service-dropdown/service-dropdown.component";
import {Link} from "react-router-dom";

class Header extends React.Component {
   state ={
    hidden: true
};

 render() {


    return (
    <div className='header-container'>
        <Link to = {"/"}>
          <div className='logo-container'>
         <span className='logo'> B O N I C </span>
         <p className='sub-logo'>ЦЕНТР ЛАЗЕРНОЙ КОСМЕТОЛОГИИ</p>
         </div></Link>
        <div className='header-options'>
        <Link to={"/"} className='option'>
         Главная
        </Link>
        <Link to={"/services"} className='option' >
            Услуги
           {/*<ServiceDropDown className={"service"} serviceItems={[]}/>*/}
        </Link>
         <Link to={"/faq"} className='option'>
       FAQ
      </Link>
         <Link to={"/about"} className='option'>
        О нас
      </Link>
     </div>


    </div>
  );
  }
};

export default Header;