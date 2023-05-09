import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="menu absolute left-0 top-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <NavLink className="flex items-center" to="/">
            <img src="/static/images/menu-logo.png" className="w-12 mr-3" alt="FOS Logo" />
          </NavLink>
          <button
            onClick={toggleOpen}
            type="button"
            className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden ${
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
            className={`inner-menu animate-fade hidden w-full md:block md:w-auto ${
              open ? 'hidden' : '!block'
            }`}
            id="navbar"
          >
            <ul className="font-medium font-hypo text-[20px] md:text-[26px] flex flex-col p-0 md:p-4 mt-4 -ml-2 md:ml-0 md:flex-row md:space-x-8 md:mt-0 w-[125px] md:w-full">
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
                  to="/bio"
                >
                  Bio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
                  to="music"
                >
                  Music
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
                  to="pics"
                >
                  Pics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
                  to="/merch"
                >
                  Merch
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu-item block py-2 pl-3 pr-4 hover:bg-transparent md:border-0 hover:text-firebrick md:p-0 text-white dark:hover:bg-transparent"
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

export default Header;
