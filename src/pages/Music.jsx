import ReactPlayer from 'react-player';
const Music = () => {
  return (
    <>
      <div id="music" className="flex flex-col items-center justify-center p-20">
        <h2 className="text-center font-orbitron text-[46px] font-bold">MUSIC</h2>
        <div className="grid grid-flow-row gap-5 lg:grid-flow-col [&_iframe]:min-h-[200px] [&_iframe]:min-w-[300px] xs:[&_iframe]:min-h-[250px] xs:[&_iframe]:min-w-[250px] sm:[&_iframe]:min-h-[250px] sm:[&_iframe]:min-w-[375px] md:[&_iframe]:min-h-[325px] md:[&_iframe]:min-w-[500px]">
          <div className="col-span-2">
            <h3 className="mb-2 text-center font-bold ">Listen to our album on Spotify</h3>
            <iframe
              src="https://open.spotify.com/embed/album/4b0781cosvNb5Xh8wkgPzZ"
              width="100%"
              height="680"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="col-span-2">
            <h3 className="mb-2 text-center font-bold ">Knowledge is Power - Lyric Video</h3>
            <div className="react-player">
              <ReactPlayer
                url="https://www.youtube.com/embed/txBbkExfvMc?si=CEGCBvZb2mqG-giu"
                light={true}
                playing
                controls
                width="100%"
                height="100%"
              />
            </div>
            <h3 className="mb-2 text-center font-bold ">MathemEthic Live @TheDev - 29/05/23</h3>
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
        </div>
      </div>
    </>
  );
};

export default Music;
