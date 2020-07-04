import React from 'react';
import './header.styles.scss';
import {Link} from "react-router-dom";
import menu from '../../assets/menu.svg'
class Header extends React.Component {
   state ={
    //by default hide hamburger
    hidden: true,

};

  //Hide mobile bar if the window width > 700
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
     let option = this.state.hidden ? 'hide__option' : 'show__option';
    return (
    <div className='header'>
        <div className='header__toggle'>
        <Link to = {"/"}>
         <div className='toggle__logo'>
         <span className='logo__primary'> B O N I C </span>
         <p className='logo__secondary'>Цeнтр лазерной косметологии</p>
         </div></Link>
         {/*Hamburger image toggle */}
        <img src={menu} className='toggle__burger' onClick={()=>{this.setState({hidden:!this.state.hidden})}}/>
        </div>
        {/*change style to dropdown header*/}
        <div className={this.state.hidden ? 'header__hide' : 'header__show'}
             onClick={()=>{this.setState({hidden:true})}}>

        <Link to={"/"} className={option}>
         Главная
        </Link>
        <Link to={"/services"} className={option} >
            Услуги
        </Link>
         <Link to={"/about"} className={option}>
        О нас
      </Link>
     </div>



    </div>
  );
  }
};

export default Header;