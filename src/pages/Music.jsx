import ReactPlayer from 'react-player';
const Music = () => {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden p-10">
        <h2 className="z-40 my-5 font-hypo text-[46px] font-bold">MUSIC</h2>
        <div className="z-40 grid grid-flow-row gap-6 lg:grid-flow-col lg:gap-20 [&_iframe]:min-h-[200px] [&_iframe]:min-w-[300px] xs:[&_iframe]:min-h-[250px] xs:[&_iframe]:min-w-[250px] sm:[&_iframe]:min-h-[250px] sm:[&_iframe]:min-w-[375px] md:[&_iframe]:min-h-[325px] md:[&_iframe]:min-w-[500px]">
          <div className="col-span-2">
            <h3 className="mb-2 text-center font-bold md:text-left">
              MathemEthic Live @TheDev - 29/05/23
            </h3>
            <div className="react-player">
              <ReactPlayer
                url="https://www.youtube.com/embed/96NsVTq78i8"
                light={true}
                playing
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-2 text-center font-bold md:text-left">
              Nemesis Live @TheDev - 29/05/23
            </h3>
            <div className="react-player">
              <ReactPlayer
                url="https://www.youtube.com/embed/ZLtcRE9XGaw"
                light={true}
                playing
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Music;
