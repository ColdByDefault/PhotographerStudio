import { useState } from "react";
import Navbar from "./components2/Navbar";
import Slider from "./components2/Slider";
import Service from "./components2/Service";
import Contact from "./components2/Contact";
import OpenTimes from "./components2/OpenTimes";

function App() {
  const [activePage, setActivePage] = useState("home");

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
        return <Slider />;
    }
  };

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </>
  );
}

export default App;
