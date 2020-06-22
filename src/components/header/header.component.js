import React from 'react';
import './header.styles.scss';
import ServiceDropDown from "../service-dropdown/service-dropdown.component";
import {Link} from "react-router-dom";
import menu from '../../assets/menu.svg'
class Header extends React.Component {
   state ={
    //by default hide hamburger
    hidden: true,

};

  //Hide mobile bar if the window width > 600
    hideMenu = () => {
        if(window.innerWidth > 700){
            this.setState({hidden:true})
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.hideMenu);
    }

  //close dropdown when changing pages
    close = () =>{
        this.setState({hidden:true})

    };
 render() {
    return (
    <div className='header-container'>
        <div className='toggle-horizontal'>
        <Link to = {"/"}>
          <div className='logo-container'>
         <span className='logo'> B O N I C </span>
         <p className='sub-logo'>Цeнтр лазерной косметологии</p>
         </div></Link>
            {/*Hamburger image toggle */}
        <img src={menu} className='menu' onClick={()=>{this.setState({hidden:!this.state.hidden})}}/>
        </div>
        {/*change style to dropdown header*/}
        <div className={!this.state.hidden ? 'dropdown-header' : 'header-options'}
             onClick={()=>{this.setState({hidden:true})}}>

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