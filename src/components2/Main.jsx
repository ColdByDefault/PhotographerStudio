import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Main({ children }) {
  return (
    <>
      {/* For Large Screens Only */}
      <div className="hidden lg:flex flex-col h-full relative">
        {/* Social Media Sidebar */}
        <div className="absolute right-0 top-32 flex flex-col items-center justify-center space-y-6 bg-opacity-70 z-50">
          <a href="#" className="text-white hover:text-yellow-400 px-2 transition-all flex flex-col items-center">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-all flex flex-col items-center">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-all flex flex-col items-center">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div className="absolute bg-black h-full right-0 z-40 w-12"></div>
        <div className="absolute bg-black h-full left-0 z-40 w-12"></div>
        <div className="absolute bg-black h-8 bottom-0 z-40 w-full"></div>
        {/* Children Rendered Inside */}
        <div className="flex items-center justify-center h-full ">
          {children}
        </div>
      </div>
      {/* For Smaller Screens */}
      <div className="block lg:hidden h-screen">
        {children}
      </div>

    </>
  );
}

export default Main;
