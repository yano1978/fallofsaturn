import { useState } from 'react';

const Merch = () => {
  let [showFront, toggleFront] = useState(false);
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center p-10">
        <h2 className="z-40 my-5 font-hypo text-[46px] font-bold">MERCH</h2>
        <div className="z-40 mx-40 grid gap-x-40 gap-y-10 md:mx-20 md:grid-cols-2 md:gap-y-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-5 text-lg font-bold">Spiral of Decay T-shirt</h2>
            <img
              className="max-w-[250px] sm:max-w-[350px] lg:max-w-[450px]"
              src="static/images/single-print.jpg"
              alt="fos single print"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-5 text-center text-lg font-bold">FOS T-shirt</h2>
            <div title="Click to see the back" onClick={() => toggleFront(!showFront)}>
              <img
                style={{ display: !showFront ? 'block' : 'none' }}
                className="max-w-[250px] cursor-pointer sm:max-w-[350px] lg:max-w-[450px]"
                src="static/images/double-print-front.jpg"
                alt="fos double printfront"
              />
              <img
                style={{ display: showFront ? 'block' : 'none' }}
                className="max-w-[350px] cursor-pointer lg:max-w-[450px]"
                src="static/images/double-print-back.jpg"
                alt="fos double printfront"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Merch;
