import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import Menu from './Menu';

const Layout = () => {
  useEffect(() => {
    // Show Menu & Footer
    const body = document.body;
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
          display: 'flex',
          y: 20,
          paused: true,
        }
      );
      body.addEventListener('click', () => {
        animationHeader.play();
        animationFooter.play();
      });
    }
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen bg-gradient-to-r from-red from-10% via-black to-blue">
        <Menu />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
