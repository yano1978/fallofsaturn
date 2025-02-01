import { Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen bg-gradient-to-r from-red from-10% via-black to-blue">
        <Outlet />
      </div>
    </>
  );
};

export default Wrapper;
