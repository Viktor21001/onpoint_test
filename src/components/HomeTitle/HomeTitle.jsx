import React from 'react';
import PropTypes from 'prop-types';
import './HomeTitle.css';
import { Icon } from '@iconify/react';

function HomeTitle({ scrollToNextPage }) {
  return (
    <div className="title">
      <p>Привет,</p>
      <div className="p2">
        Это <span>Не</span> <br /> Коммерческое <br /> задание
        <div
          className="pink-button"
          onClick={scrollToNextPage}
          style={{ cursor: 'pointer', zIndex: 10 }}
        >
          <div className="arrow">
            <Icon icon="bi:arrow-right-circle-fill" />
          </div>
          Что дальше?
        </div>
      </div>
    </div>
  );
}

HomeTitle.propTypes = {
  scrollToNextPage: PropTypes.func.isRequired,
};

export default HomeTitle;
