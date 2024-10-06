import React from 'react';
import './Header.css';
import { Icon } from '@iconify/react';

function Header({ scrollToHomePage }) {
  function backHome() {
    console.log('back home');
    if (scrollToHomePage) {
      scrollToHomePage();
    }
  }

  return (
    <div className="header">
      <button
        onClick={backHome}
        className="icon"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <Icon icon="codicon:home" />
      </button>
      <div className="project-title">project</div>
    </div>
  );
}

export default Header;
