const Pics = () => {
  return (
    <div id="pics" className="flex flex-col items-center justify-center py-10 text-xl">
      <h2 className="my-5 font-orbitron text-[46px] font-bold">PICS</h2>
      <div className="mt-10 grid grid-flow-row gap-5 lg:grid-cols-2 lg:gap-36 [&_img]:w-[250px] sm:[&_img]:w-[350px] md:[&_img]:w-[450px]">
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Ernesto - Vocals</h3>
          <img src="static/images/ernesto.jpg" alt="ernesto" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Linas - Guitars</h3>
          <img src="static/images/linas.jpg" alt="linas" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Will - Bass</h3>
          <img src="static/images/will.jpg" alt="will" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="py-5">Val - Drums</h3>
          <img src="static/images/val.jpg" alt="val" />
        </div>
      </div>
    </div>
  );
};

export default Pics;
