import { useState } from 'react';
import PictoIcon from '@/components/PictoIcon';

const Menu = () => {
  // Menu toggle
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="menu fixed top-0 z-20 w-full bg-black uppercase ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center">
          <PictoIcon />
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
          className={`relative w-full animate-fade md:block md:w-auto ${
            open
              ? 'block h-[125px] text-right [&_ul]:absolute [&_ul]:right-0 [&_ul]:pr-3'
              : 'hidden'
          }`}
          id="navbar"
        >
          <ul className="flex w-[125px] flex-col p-0 font-orbitron text-[20px] font-medium md:!relative md:ml-0 md:mt-0 md:w-full md:flex-row md:space-x-8 md:p-4 md:text-[26px]">
            <li>
              <a href="#bio">Bio</a>
            </li>
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#merch">Merch</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
