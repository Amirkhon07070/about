import React from 'react'


const Navbar = () => {
    return (
      <>
      <header className="header">
        <div className="header__container">
        <div className="logo"><a href="" className="logo">PROWEB</a></div>
        <div className="header__list">
          <ul className="header__list">
            <li><a href="#" className="header__list-link">Обо мне</a></li>
            <li><a href="#" className="header__list-link">Мои работы</a></li>
            <li><a href="#" className="header__list-link">Контакты</a></li>
          </ul>
        </div>
        </div>
      </header>
      <nav className="header__nav">
          <h1 className="header__nav-title">Добро пожаловать на мой сайт</h1>
          <a href="tel:+998 99 899 89 98" className="header__nav-btn">Позвонить</a>
        </nav>
      </>
    )
    
}
export default Navbar