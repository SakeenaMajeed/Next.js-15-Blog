import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollArrow = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    });
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={handleScroll}
        aria-label="Scroll to top"
        title="Scroll to top"
        className="bg-black text-white rounded-full p-3 transition duration-300 ease-in-out hover:bg-gray-800 shadow-lg"
      >
        <FaArrowUp className="w-6 h-6 animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollArrow;
