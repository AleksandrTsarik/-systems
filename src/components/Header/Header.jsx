import React from 'react';
//import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header className="header">
      <a href="#" title="Logo corporate" className="header__logo">
        <img src="/img/react_logo2.png" alt=""/>
      </a>
      <div className="header__title">Corporate network</div>
    </header>
  )
}

export default Header;