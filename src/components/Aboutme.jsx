import React from 'react'
import Aboutimg from '../assets/images/abotme.svg';

const Aboutme = () => {
    return (
      <>
      <section className="about">
        <h2 className="about__title">Обо мне</h2>
        <div className="about__container">
            <div className="about__container-left"><img src={Aboutimg} alt="" /></div>
            <div className="about__container-right">
                <div className="about__container-name">Зубенко Михаил Петрович</div>
                
                <p className="about__container-text">Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p></div>
        </div>
      </section>
      </>
      
    )
    
}
export default Aboutme