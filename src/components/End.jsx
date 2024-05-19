import React from 'react'
import tg from '../assets/images/tg.svg'
import wt from '../assets/images/wt.svg'
import mail from '../assets/images/mail.svg'
import inst from '../assets/images/instagram.svg'
import facebook from '../assets/images/facebook.svg'



const End = () => {
    return (
      <>
      <footer className="footer">
        <div className="footer__container">
            <h2 className="footer__container-title">Связаться со мной</h2>
            <div className="footer__items">
                <a href="#">
                <img src={facebook} alt="" className="footer__items-icon" /></a>
                <a href=""><img src={inst} alt="" className="footer__items-icon" /></a>
                <a href=""><img src={tg} alt="" className="footer__items-icon" /></a>
                <a href=""><img src={mail} alt="" className="footer__items-icon" /></a>
                <a href=""><img src={wt} alt="" className="footer__items-icon" /></a>
            </div>
        </div>
      </footer>
      </>
      
    )
    
}
export default End