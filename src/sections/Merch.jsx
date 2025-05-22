import { useState } from 'react';
import { ReactComponent as ArrowRight } from '../../static/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../static/icons/arrow-left.svg';

const Merch = () => {
  let [showFront, toggleFront] = useState(false);
  return (
    <>
      <div id="merch" className="flex flex-col items-center justify-center py-10">
        <h2 className="my-5 font-orbitron text-[46px] font-bold">MERCH</h2>
        <div className="mx-40 grid gap-x-40 gap-y-5 md:mx-20 md:grid-cols-2 md:gap-y-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-5 whitespace-nowrap text-lg font-bold">Spiral of Decay Album</h2>
            <img
              className="max-w-[250px] sm:max-w-[350px] lg:max-w-[450px]"
              src="static/images/single-print.jpg"
              alt="fos single print"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="mb-5 text-center text-lg font-bold">FOS Logo</h2>
            <div className="relative">
              <img
                style={{ display: !showFront ? 'block' : 'none' }}
                className="max-w-[250px] sm:max-w-[350px] lg:max-w-[450px]"
                src="static/images/double-print-front.jpg"
                alt="fos double printfront"
              />
              <img
                style={{ display: showFront ? 'block' : 'none' }}
                className="max-w-[250px] sm:max-w-[350px] lg:max-w-[450px]"
                src="static/images/double-print-back.jpg"
                alt="fos double printfront"
              />
              <div
                onClick={() => toggleFront(!showFront)}
                className="absolute -left-7 top-[45%] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50"
              >
                <ArrowLeft className="w-7" />
              </div>
              <div
                onClick={() => toggleFront(!showFront)}
                className="absolute -right-7 top-[45%] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50"
              >
                <ArrowRight className="w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merch;
