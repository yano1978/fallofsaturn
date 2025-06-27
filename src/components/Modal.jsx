import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  return (
    <>
      <div
        className={`${
          showModal ? 'z-[99999] opacity-100' : 'z-0 opacity-0'
        } fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black transition-opacity duration-300`}
      >
        <div className="absolute right-5 top-5">
          <button className="text-white" onClick={() => setShowModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center p-10 text-center">
          <p className="pb-5 font-orbitron text-base leading-[1.1] md:pb-10 md:text-[40px]">
            NEW SINGLE OUT
          </p>
          <iframe
            className="max-w-[350px] sm:max-w-full md:min-h-[450px] md:min-w-[900px] lg:min-h-[500px] lg:min-w-[1000px] xl:min-h-[500px] xl:min-w-[1000px]"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/qiVnjiKfDO0?si=-ePOCc2JfbNjOiLW"
            title="Pray or Prey"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
