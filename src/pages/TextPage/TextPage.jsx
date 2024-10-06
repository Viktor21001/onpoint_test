import React, { useEffect, useRef } from 'react';
import './TextPage.css';
import TextContent from '../../components/TextContent/TextContent';
import Header from '../../components/Header/Header';

function TextPage({ scrollToHomePage }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let isDragging = false;
    let startY;
    let scrollTop;

    const handleScrollbarMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      scrollTop = scrollContainer.scrollTop;
      scrollContainer.classList.add('grabbing');
      e.preventDefault();
    };

    const handleScrollbarMouseUp = () => {
      isDragging = false;
      scrollContainer.classList.remove('grabbing');
    };

    const handleScrollbarMouseMove = (e) => {
      if (!isDragging) return;
      const y = e.clientY;
      const walk = (y - startY) * 2;
      scrollContainer.scrollTop = scrollTop + walk;
    };

    const handleScrollbarTouchStart = (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
      scrollTop = scrollContainer.scrollTop;
      scrollContainer.classList.add('grabbing');
      e.preventDefault();
    };

    const handleScrollbarTouchMove = (e) => {
      if (!isDragging) return;
      const y = e.touches[0].clientY;
      const walk = (y - startY) * 2;
      scrollContainer.scrollTop = scrollTop + walk;
    };

    const handleScrollbarTouchEnd = () => {
      isDragging = false;
      scrollContainer.classList.remove('grabbing');
    };

    scrollContainer.addEventListener('mousedown', handleScrollbarMouseDown);
    scrollContainer.addEventListener('mousemove', handleScrollbarMouseMove);
    scrollContainer.addEventListener('mouseup', handleScrollbarMouseUp);
    scrollContainer.addEventListener('mouseleave', handleScrollbarMouseUp);

    scrollContainer.addEventListener('touchstart', handleScrollbarTouchStart);
    scrollContainer.addEventListener('touchmove', handleScrollbarTouchMove);
    scrollContainer.addEventListener('touchend', handleScrollbarTouchEnd);

    return () => {
      scrollContainer.removeEventListener(
        'mousedown',
        handleScrollbarMouseDown
      );
      scrollContainer.removeEventListener(
        'mousemove',
        handleScrollbarMouseMove
      );
      scrollContainer.removeEventListener('mouseup', handleScrollbarMouseUp);
      scrollContainer.removeEventListener('mouseleave', handleScrollbarMouseUp);

      scrollContainer.removeEventListener(
        'touchstart',
        handleScrollbarTouchStart
      );
      scrollContainer.removeEventListener(
        'touchmove',
        handleScrollbarTouchMove
      );
      scrollContainer.removeEventListener('touchend', handleScrollbarTouchEnd);
    };
  }, []);

  return (
    <div className="second-page">
      <Header scrollToHomePage={scrollToHomePage} />
      <div className="msg">
        <p>
          Текст
          <br /> Сообщения
        </p>
      </div>
      <div className="text-container">
        <div ref={scrollContainerRef} className="div">
          <div className="text-div">
            <p>
              <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
              elit.
            </p>
            <TextContent />
            <TextContent />
            <TextContent />
          </div>
        </div>
      </div>
      <div className="onpoint">
        <p>onpoint</p>
      </div>
    </div>
  );
}

export default TextPage;
