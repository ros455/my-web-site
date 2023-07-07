import React from "react";
import '../style/header.scss'
const Header = () => {
  return (
    <header className="header_wrap">
      <div className="logo">Logo</div>
      <nav className="nav_block">
        <ul className="nav_wrap">
          <li>Головна</li>
          <li>Послуги</li>
          <li>Шаблони</li>
          <li>Про нас</li>
          <li>Контакти</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
