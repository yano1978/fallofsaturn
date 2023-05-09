import { useEffect, useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Layout = () => {
  // Menu toggle
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  // Canvas z-index position
  const location = useLocation();
  const canvas = document.getElementById('canvas');
  location.pathname ? canvas.classList.add('z-30') : canvas.classList.add('z-20');

  useEffect(() => {
    // Show Menu & Footer
    const logoEle = document.getElementById('logo');
    const footerEle = document.getElementsByTagName('footer');
    const menuEle = document.querySelector('.menu');
    if (document.querySelector('.menu')) {
      let animationHeader = gsap.fromTo(
        menuEle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          display: 'block',
          y: 0,
          paused: true,
        }
      );
      let animationFooter = gsap.fromTo(
        footerEle,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          display: 'block',
          y: 20,
          paused: true,
        }
      );
      logoEle.addEventListener('mouseover', () => {
        animationHeader.play();
        animationFooter.play();
      });
    }
  }, []);

  return (
    <>
      <nav className="menu absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-2">
          <a href="/" className="flex items-center">
            <img src="/static/images/menu-logo.png" className="mr-3 w-12" alt="FOS Logo" />
          </a>
          <button
            onClick={toggleOpen}
            type="button"
            className={`text-gray-500 ml-3 inline-flex items-center rounded-lg p-2 text-sm md:hidden ${
              open ? 'open' : ''
            }`}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div id="hamburger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>
          <div
            className={`inner-menu hidden w-full animate-fade md:block md:w-auto ${
              open ? '!block' : 'hidden'
            }`}
            id="navbar"
          >
            <ul className="-ml-2 mt-4 flex w-[125px] flex-col p-0 font-hypo text-[20px] font-medium md:ml-0 md:mt-0 md:w-full md:flex-row md:space-x-8 md:p-4 md:text-[26px]">
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="/bio"
                >
                  Bio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="music"
                >
                  Music
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="pics"
                >
                  Pics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="/merch"
                >
                  Merch
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-firebrick dark:hover:bg-transparent md:border-0 md:p-0"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
