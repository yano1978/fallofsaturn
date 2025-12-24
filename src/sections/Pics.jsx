const Pics = () => {
  return (
    <div id="pics" className="flex flex-col items-center justify-center py-10 text-xl">
      <h2 className="my-5 font-orbitron text-[46px] font-bold">PICS</h2>
      <div className="mt-10 grid grid-flow-row gap-5 lg:grid-cols-2 lg:gap-36 [&_img]:w-[250px] sm:[&_img]:w-[350px] md:[&_img]:w-[450px]">
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Vocals - Ernesto</h3>
          <img src="static/images/ernesto.jpg" alt="ernesto" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Bass - Will</h3>
          <img src="static/images/will.jpg" alt="will" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Drums - Val</h3>
          <img src="static/images/val.jpg" alt="val" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Guitars - To be announced</h3>
          <div className="h-[450px] w-[450px] bg-black sm:w-[350px] md:w-[450px]">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Pics;
