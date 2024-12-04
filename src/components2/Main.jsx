import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Main({ children }) {
  return (
    <>
      {/* For Large Screens Only */}
      <div className="hidden lg:flex flex-col h-full relative">
        {/* Social Media Sidebar */}
        <div className="absolute right-0 top-0 h-full flex flex-col items-center justify-center space-y-6 bg-opacity-70 z-50">
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
        {/* Children Rendered Inside */}
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </div>

      {/* For Smaller Screens */}
      <div className="block lg:hidden h-screen">{children}</div>
    </>
  );
}

export default Main;
