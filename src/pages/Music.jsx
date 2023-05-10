const Music = () => {
  const gradient = {
    background: 'linear-gradient(to right, #231311, #121e23)',
  };
  return (
    <>
      <div
        style={gradient}
        className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center p-10"
      >
        <h2 className="z-40 my-5 font-hypo text-[46px] font-bold">MUSIC</h2>
        <div className="z-40 grid grid-flow-row gap-6 lg:grid-flow-col [&_iframe]:min-w-[300px] xs:[&_iframe]:min-w-[350px] sm:[&_iframe]:min-w-[600px] md:[&_iframe]:min-h-[325px] md:[&_iframe]:min-w-[500px] xl:[&_iframe]:min-w-[600px]">
          <div className="col-span-2">
            <h3 className="mb-2 text-center md:text-left">MathemEthic Live @TheDev - 29/05/23</h3>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/96NsVTq78i8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2">
            <h3 className="mb-2 text-center md:text-left">Nemesis Live @TheDev - 29/05/23</h3>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/ZLtcRE9XGaw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Music;
