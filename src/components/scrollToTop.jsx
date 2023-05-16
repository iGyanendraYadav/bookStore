import React, { useEffect, useState } from "react";



const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <span onClick={moveToTop} className="text-2xl lg:text-2xl p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white fixed bottom-5 right-3  z-50">
         
          <ion-icon name="arrow-up-outline"></ion-icon>
        </span>
      )}
    </div>
  );
};

export default ScrollToTop;