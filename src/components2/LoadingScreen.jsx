import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [showProject, setShowProject] = useState(false);
  const [animateAnother, setAnimateAnother] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateAnother(true);
      setTimeout(() => setShowProject(true), 500);
    }, 1000);

    const completeTimeout = setTimeout(() => {
      onComplete && onComplete();
    }, 3000); 

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative flex text-white text-xl sm:text-3xl md:text-4xl font-anton">
        <span className={`transition-transform duration-500 ${
            animateAnother ? "translate-x-[-20px]" : "translate-x-0"
          }`}>
          Another
        </span>
        <span className={`text-orange-500 translate-x-[-20px] transition-opacity duration-500 ${
            showProject ? "opacity-100" : "opacity-0"
          }`}>
          Project
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
