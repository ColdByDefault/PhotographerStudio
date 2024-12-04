import { useState } from "react";
import Navbar from "./components2/Navbar";
import Main from "./components2/Main";
import Service from "./components2/Service";
import Contact from "./components2/Contact";
import OpenTimes from "./components2/OpenTimes";
import Slider from "./components2/Slider";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page) => {
    if (activePage !== page) {
      setIsAnimating(true);
      setTimeout(() => {
        setActivePage(page);
        setIsAnimating(false);
      }, 500); // Match animation duration
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Slider />;
      case "service":
        return <Service />;
      case "contact":
        return <Contact />;
      case "opentimes":
        return <OpenTimes />;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <>
      <Navbar setActivePage={handlePageChange} />
      <Main>
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            isAnimating ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          {renderPage()}
        </div>
      </Main>
    </>
  );
}

export default App;
