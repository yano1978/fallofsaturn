import { useEffect } from 'react';
import { ReactComponent as Logo } from '../../static/images/logo.svg';
import { gsap } from 'gsap';

const LogoIcon = () => {
  // useEffect(() => {
  //   const logoEle = document.getElementById('logo');
  //   gsap.from(logoEle, { duration: 1, delay: 2.5, autoAlpha: 0 });
  // }, []);

  return (
    <div className="absolute z-10 w-full max-w-[225px] opacity-50 sm:max-w-[270px]">
      <Logo />
    </div>
  );
};

export default LogoIcon;
