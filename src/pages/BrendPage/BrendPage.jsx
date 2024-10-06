import React, { useState } from 'react';
import './BrendPage.css';
import Header from '../../components/Header/Header';
import Modal from '../../components/BrendModal/Modal';

function BrendPage({ scrollToHomePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="brend-main">
      <Header scrollToHomePage={scrollToHomePage} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="key-msg">
        <p className="p1">Ключевое сообщение</p>
        <p className="p2">
          Brend<span>XY</span>
        </p>
      </div>
      <section className="row-block">
        <div className="div1">
          <div className="icon2"></div>
          <p>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies.
          </p>
        </div>
        <div className="div2">
          <div className="icon1"></div>
          <p>
            A arcu <br />
            cursus vitae
          </p>
          <div onClick={() => setIsOpen(!isOpen)} className="more-button"></div>
        </div>
      </section>
      <div className="bottle"></div>
      <div className="bubble1 bubble"></div>
      <div className="bubble2 bubble"></div>
      <div className="bubble3 bubble"></div>
      <div className="bubble4 bubble"></div>
      <div className="bubble5 bubble"></div>
      <div className="bubble6 bubble"></div>
      <div className="bubble7 bubble"></div>
      <div className="bubble8 bubble"></div>
      <div className="onpoint">
        <p>onpoint</p>
      </div>
    </div>
  );
}

export default BrendPage;
