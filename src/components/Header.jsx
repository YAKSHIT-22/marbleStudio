import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(true);
  return (
    <header className="w-full fixed top-0 bg-transparent font-primary font-medium flex items-center z-[2] justify-center">
      <nav className="w-full relative flex items-center max-w-screen-2xl mx-auto justify-center">
        <div className="w-full flex items-center justify-center py-8 px-4 xs:px-8 s:px-12 md:px-16">
          <div className="w-full flex items-center justify-between">
            <Link to="/">
              {" "}
              <div className="flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 129 25"
                  className="w-[8.5rem] aspect-video"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.68 13.02v9.708h-3.669V13.83c0-2.37-1.298-3.831-3.442-3.831-1.785 0-3.54 1.137-3.54 3.831v8.897H41.4V13.83c0-2.402-1.332-3.831-3.474-3.831-1.754 0-3.54 1.104-3.54 3.831v8.897h-3.608V6.85h3.604v2.24c1.169-1.948 3.184-2.565 4.838-2.565 2.305 0 3.928.876 4.902 2.793.91-1.721 2.89-2.793 5.066-2.793 3.83 0 6.493 2.496 6.493 6.494ZM74.188 6.85v15.878h-3.64v-2.789c-1.137 1.98-3.084 3.117-5.616 3.117-4.222 0-7.598-3.701-7.598-8.28 0-4.578 3.376-8.247 7.598-8.247 2.532 0 4.48 1.137 5.617 3.117V6.854l3.639-.003Zm-3.64 7.923c0-2.73-2.077-4.805-4.837-4.805a4.777 4.777 0 0 0-4.805 4.805c0 2.695 2.11 4.838 4.805 4.838 2.762 0 4.84-2.078 4.84-4.838h-.002ZM85.524 10.292h-5.487v12.436h-3.611V6.85h9.098v3.441ZM104.124 14.773c0 4.578-3.344 8.28-7.566 8.28-2.564 0-4.512-1.17-5.648-3.184v2.857h-3.605V0h3.605v9.704c1.137-2.013 3.084-3.184 5.648-3.184 4.222.005 7.566 3.675 7.566 8.253Zm-3.539 0a4.776 4.776 0 0 0-4.806-4.805c-2.791 0-4.87 2.078-4.87 4.805 0 2.76 2.078 4.838 4.87 4.838 2.696 0 4.806-2.143 4.806-4.838ZM109.417 19.287h2.502v3.44h-6.107V0h3.605v19.287ZM128.119 15.975h-12.176c.455 2.337 2.079 3.798 4.643 3.798 1.948 0 3.474-.91 3.8-2.274h3.639c-.585 3.344-3.604 5.553-7.506 5.553-4.643 0-8.247-3.604-8.247-8.345 0-4.61 3.604-8.183 8.188-8.183 4.286 0 7.759 3.28 7.759 7.923-.003.424-.035 1.236-.1 1.528Zm-3.831-3.087c-.325-1.82-1.852-3.084-4.026-3.084-2.144 0-3.702 1.137-4.221 3.084h8.247ZM20.279 12.453a8.817 8.817 0 0 0-.198-.733 9.799 9.799 0 0 0-.443-1.164 10.28 10.28 0 0 0-1.13-1.912l-.15-.195a10.283 10.283 0 0 0-1.733-1.728 10.135 10.135 0 0 0-1.012-.7 9.7 9.7 0 0 0-.87-.474 10.235 10.235 0 1 0-1.392 19.001l.239-.077a10.265 10.265 0 0 0 5.204-3.984c.37-.547.686-1.13.944-1.738l.094-.228c.061-.156.114-.312.173-.47l.077-.24a10.311 10.311 0 0 0 .198-5.355l-.001-.003ZM3.538 21.53A9.574 9.574 0 0 1 10.307 5.19v19.146a9.511 9.511 0 0 1-6.77-2.804Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
            <div className="items-center justify-center gap-16 lg:flex hidden">
              <div className="w-full flex items-center justify-center gap-12 text-white">
                <Link to="/about">
                  {" "}
                  <div className="flex items-center justify-center">
                    <p className="relative block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                      ABOUT
                    </p>
                  </div>
                </Link>
                <Link to="/how-it-works">
                  {" "}
                  <div className="flex items-center justify-center">
                    <p className="relative block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                      HOW IT WORKS
                    </p>
                  </div>
                </Link>
                <Link to="/what-we-look-for">
                  {" "}
                  <div className="flex items-center justify-center">
                    <p className="relative block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                      WHAT WE LOOK FOR
                    </p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Button />
              </div>
            </div>
            <div className="items-center justify-center gap-16 flex lg:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="bg-[#f9f9f9] text-black p-2 w-full  h-full rounded-full font-bold flex items-center justify-center flex-col"
              >
                <div className="flex items-center justify-center flex-col gap-1 w-8 h-8 rounded-full p-1">
                  {" "}
                  <span className="w-[1.2rem] h-[1px] bg-black rounded-[1px]"></span>
                  <span className="w-[1.2rem] h-[1px] bg-black rounded-[1px]"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            "bg-black flex items-center justify-center bg-navbar bg-no-repeat bg-cover bg-fixed fixed top-0 z-[2] w-screen min-h-screen h-full" +
            (navOpen ? " showpopup" : " noshowpopup")
          }
        >
          <div className="flex items-center justify-center max-w-screen-2xl mx-auto p-8 px-4 xs:px-8 s:px-12 md:px-16 flex-col w-full gap-6 sm:gap-10">
            <div className="flex w-full items-center justify-between">
              <Link to="/">
                {" "}
                <div onClick={() => setNavOpen(!navOpen)} className="flex items-center justify-center text-white">
                  <svg
                    viewBox="0 0 129 25"
                    className="w-[8.5rem] sm:w-[10rem] aspect-video"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.68 13.02v9.708h-3.669V13.83c0-2.37-1.298-3.831-3.442-3.831-1.785 0-3.54 1.137-3.54 3.831v8.897H41.4V13.83c0-2.402-1.332-3.831-3.474-3.831-1.754 0-3.54 1.104-3.54 3.831v8.897h-3.608V6.85h3.604v2.24c1.169-1.948 3.184-2.565 4.838-2.565 2.305 0 3.928.876 4.902 2.793.91-1.721 2.89-2.793 5.066-2.793 3.83 0 6.493 2.496 6.493 6.494ZM74.188 6.85v15.878h-3.64v-2.789c-1.137 1.98-3.084 3.117-5.616 3.117-4.222 0-7.598-3.701-7.598-8.28 0-4.578 3.376-8.247 7.598-8.247 2.532 0 4.48 1.137 5.617 3.117V6.854l3.639-.003Zm-3.64 7.923c0-2.73-2.077-4.805-4.837-4.805a4.777 4.777 0 0 0-4.805 4.805c0 2.695 2.11 4.838 4.805 4.838 2.762 0 4.84-2.078 4.84-4.838h-.002ZM85.524 10.292h-5.487v12.436h-3.611V6.85h9.098v3.441ZM104.124 14.773c0 4.578-3.344 8.28-7.566 8.28-2.564 0-4.512-1.17-5.648-3.184v2.857h-3.605V0h3.605v9.704c1.137-2.013 3.084-3.184 5.648-3.184 4.222.005 7.566 3.675 7.566 8.253Zm-3.539 0a4.776 4.776 0 0 0-4.806-4.805c-2.791 0-4.87 2.078-4.87 4.805 0 2.76 2.078 4.838 4.87 4.838 2.696 0 4.806-2.143 4.806-4.838ZM109.417 19.287h2.502v3.44h-6.107V0h3.605v19.287ZM128.119 15.975h-12.176c.455 2.337 2.079 3.798 4.643 3.798 1.948 0 3.474-.91 3.8-2.274h3.639c-.585 3.344-3.604 5.553-7.506 5.553-4.643 0-8.247-3.604-8.247-8.345 0-4.61 3.604-8.183 8.188-8.183 4.286 0 7.759 3.28 7.759 7.923-.003.424-.035 1.236-.1 1.528Zm-3.831-3.087c-.325-1.82-1.852-3.084-4.026-3.084-2.144 0-3.702 1.137-4.221 3.084h8.247ZM20.279 12.453a8.817 8.817 0 0 0-.198-.733 9.799 9.799 0 0 0-.443-1.164 10.28 10.28 0 0 0-1.13-1.912l-.15-.195a10.283 10.283 0 0 0-1.733-1.728 10.135 10.135 0 0 0-1.012-.7 9.7 9.7 0 0 0-.87-.474 10.235 10.235 0 1 0-1.392 19.001l.239-.077a10.265 10.265 0 0 0 5.204-3.984c.37-.547.686-1.13.944-1.738l.094-.228c.061-.156.114-.312.173-.47l.077-.24a10.311 10.311 0 0 0 .198-5.355l-.001-.003ZM3.538 21.53A9.574 9.574 0 0 1 10.307 5.19v19.146a9.511 9.511 0 0 1-6.77-2.804Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Link>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className="text-black bg-white rounded-full p-3 s:p-4 md:w-14 md:h-14 s:w-10 s:h-10 h-10 w-10 flex items-center justify-center focus:outline-none"
                >
                  X
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full flex-col gap-4 py-6 s:py-8 border-t border-b border-[#49298a]">
              <ul className="flex items-center justify-center flex-col w-full gap-4 font-primary">
              <Link to="/about" className="w-full"> <li onClick={() => setNavOpen(!navOpen)} className="text-2xl flex items-center justify-start border-b border-[#49298a] text-white w-full py-2">
                  About Us
                </li></Link>
                <Link to="/how-it-works" className="w-full"> <li onClick={() => setNavOpen(!navOpen)} className="text-2xl flex items-center justify-start border-b border-[#49298a] text-white w-full py-2">
                  How It Works
                </li></Link>
                <Link to="/what-we-look-for" className="w-full"> <li onClick={() => setNavOpen(!navOpen)} className="text-2xl flex items-center justify-start border-b border-[#49298a] text-white w-full py-2">
                  What We Look For
                </li></Link>
                <li className="text-2xl flex items-center justify-start border-b border-[#49298a] text-white w-full py-2">
                  Contact Us
                </li>
                <li className="text-2xl flex items-center justify-start border-b border-[#49298a] text-white w-full py-2">
                  Careers
                </li>
                <li className="text-2xl flex items-center justify-start  text-white w-full">
                  FAQ
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between gap-4 w-full">
              <Button />
              <div className="flex items-center justify-center ">
                <button className="hover:bg-white bg-[#262626] group  transition-all  hover:text-black text-white font-primary p-4 w-full flex items-center justify-center rounded-full">
                  <p className="flex items-center justify-center gap-2 font-medium transition-all text-xs sm:text-sm">
                    JOIN OUR COMMUNITY{" "}
                    <span className="group-hover:text-black text-white group-hover:pl-1 transition-all">
                      <svg
                        width="11"
                        height="10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m6.143 9 4-4-4-4M10.143 5H1"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
