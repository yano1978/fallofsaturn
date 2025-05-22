import { useState } from 'react';
import PictoIcon from '@/components/PictoIcon';

const Menu = () => {
  // Menu toggle
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="menu fixed top-0 z-50 w-full bg-black uppercase">
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
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <div id="hamburger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>
          <div className="hidden w-auto md:block">
            <ul className="flex flex-row space-x-8 font-orbitron text-[26px] font-medium">
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
                <a href="#pics">Pics</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 top-full z-40 bg-black pb-4 transition-all duration-300 ease-in-out md:hidden ${
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-end pr-7 font-orbitron text-[20px] font-medium">
            <li className="mb-2 py-1">
              <a href="#bio">Bio</a>
            </li>
            <li className="mb-2 py-1">
              <a href="#music">Music</a>
            </li>
            <li className="mb-2 py-1">
              <a href="#merch">Merch</a>
            </li>
            <li className="mb-2 py-1">
              <a href="#pics">Pics</a>
            </li>
            <li className="mb-2 py-1">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
