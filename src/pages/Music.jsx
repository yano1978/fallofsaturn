const Music = () => {
  return (
    <div className="absolute flex content bg-black/80 p-10 top-0 left-0 w-screen h-screen items-center justify-center flex-col">
      <h2 className="font-bold my-5 font-hypo text-[46px]">MUSIC</h2>
      <div className="grid grid-flow-row lg:grid-flow-col gap-6 [&_iframe]:min-w-[300px] xs:[&_iframe]:min-w-[350px] sm:[&_iframe]:min-w-[600px] md:[&_iframe]:min-h-[325px] md:[&_iframe]:min-w-[500px] xl:[&_iframe]:min-w-[600px]">
        <div className="col-span-2">
          <h3 className="mb-2 text-center md:text-left">MathemEthic Live @TheDev - 29/05/23</h3>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/96NsVTq78i8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-2">
          <h3 className="mb-2 text-center md:text-left">Nemesis Live @TheDev - 29/05/23</h3>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/ZLtcRE9XGaw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
