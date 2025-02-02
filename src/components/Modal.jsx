import React, { useEffect, useState } from 'react';

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
        } fixed flex h-full w-full items-center justify-center overflow-y-auto bg-black transition-opacity duration-300`}
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
        <div className="flex h-fit w-full max-w-[600px] flex-col items-center justify-center text-center">
          <p className="pb-5 font-hypo text-3xl font-bold md:text-[60px]">FIRST EP OUT NOW!</p>
          <iframe
            src="https://open.spotify.com/embed/album/4b0781cosvNb5Xh8wkgPzZ"
            width="100%"
            height="600"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Modal;
