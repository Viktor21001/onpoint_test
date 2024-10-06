import React, { useState } from 'react';
import './Modal.css';
import { Icon } from '@iconify/react';

function Modal({ isOpen, setIsOpen }) {
  const [isColor, setIsColor] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className={isOpen ? 'back-layer-active' : 'back-layer'}></div>
      <div className={isOpen ? 'modal-wrapper-active' : 'modal-wrapper'}>
        <button
          onClick={() => setIsOpen(false)}
          className="close-button"
          style={{
            position: 'absolute',
            top: '40px',
            right: '30px',
            scale: '3',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Icon icon="mdi:close" width="25" height="25" />
        </button>

        <section className="header-modal">
          <p className="p0">Преимущества</p>
          <p className="p">
            Brend<span>XY</span>
          </p>
        </section>
        <div className="inner-carousel">
          <div className="inner-scroll">
            <div className="first-block item">
              <div>
                <span>01</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div>
                <span>02</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </div>
              <div>
                <span>03</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </div>
            </div>
            <div
              className={isColor ? 'second-block-1 item' : 'second-block item'}
            >
              <div>
                <span>04</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </div>
              <div>
                <span>05</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </div>
              <div>
                <span>06</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </div>
            </div>
          </div>
          <div className="btns">
            <button onClick={() => setIsColor(!isColor)}>
              <Icon icon="ep:arrow-right" rotate={2} />
            </button>

            <div className="row-btns">
              <div className={isColor ? 'circle' : 'circle-active-l'}></div>
              <div className={isColor ? 'circle-active-r' : 'circle'}></div>
            </div>

            <button onClick={() => setIsColor(!isColor)}>
              <Icon icon="ep:arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
