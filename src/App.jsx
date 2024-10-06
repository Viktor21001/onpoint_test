import './App.css';
import { useRef, useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import TextPage from './pages/TextPage/TextPage';
import BrendPage from './pages/BrendPage/BrendPage';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const homeRef = useRef(null);
  const textPageRef = useRef(null);
  const brendPageRef = useRef(null);
  const carouselRef = useRef(null);

  const scrollToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
    const offset = -1024 * pageIndex;
    carouselRef.current.style.transform = `translateX(${offset}px)`;
  };

  const scrollToNextPage = () => {
    if (currentPage < 2) {
      scrollToPage(currentPage + 1);
    }
  };

  const scrollToPreviousPage = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  const scrollToHomePage = () => {
    scrollToPage(0);
  };

  useEffect(() => {
    let xStart = null;
    let yStart = null;

    const handleTouchStart = (event) => {
      xStart = event.touches[0].clientX;
      yStart = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (!xStart || !yStart) return;

      const xEnd = event.touches[0].clientX;
      const yEnd = event.touches[0].clientY;

      const xDiff = xStart - xEnd;
      const yDiff = yStart - yEnd;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          scrollToNextPage();
        } else {
          scrollToPreviousPage();
        }
      }

      xStart = null;
      yStart = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentPage]);

  return (
    <div className="App">
      <div className="carousel" ref={carouselRef}>
        <div ref={homeRef} className="home c-item">
          <HomePage scrollToNextPage={scrollToNextPage} />
        </div>
        <div ref={textPageRef} className="text-page c-item">
          <TextPage scrollToHomePage={scrollToHomePage} />
        </div>
        <div ref={brendPageRef} className="brend c-item">
          <BrendPage scrollToHomePage={scrollToHomePage} />
        </div>
      </div>
    </div>
  );
}

export default App;
