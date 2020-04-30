import React from 'react';
import './header.styles.scss';
import ServiceDropDown from "../service-dropdown/service-dropdown.component";
import {Link} from "react-router-dom";
import menu from '../../assets/menu.svg'
class Header extends React.Component {
   state ={
    hidden: true,

};

    hideMenu = () => {
        if(window.innerWidth > 800){
            this.setState({hidden:true})
        }
    };
    componentDidMount() {
        window.addEventListener('resize', this.hideMenu);
    }
 render() {

    return (
    <div className='header-container'>
        <div className='toggle-horizontal'>
        <Link to = {"/"}>
          <div className='logo-container'>
         <span className='logo'> B O N I C </span>
         <p className='sub-logo'>Цeнтр лазерной косметологии</p>
         </div></Link>
        <img src={menu} className='menu' onClick={()=>{this.setState({hidden:!this.state.hidden})}}/>
        </div>

        <div className={!this.state.hidden ? 'dropdown-header' : 'header-options'}>

        <Link to={"/"} className='option'>
         Главная
        </Link>
        <Link to={"/services"} className='option' >
            Услуги
           {/*<ServiceDropDown className={"service"} serviceItems={[]}/>*/}
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