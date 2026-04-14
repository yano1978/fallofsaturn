import ReactPlayer from 'react-player';

const Music = () => {
  return (
    <>
      <div id="music" className="flex flex-col items-center justify-center px-4 py-10 md:px-40">
        <div className="w-full">
          <h2 className="text-center font-orbitron text-[46px] font-bold">MUSIC</h2>
          <div className="mt-10 grid grid-flow-row gap-10 lg:grid-flow-col [&_iframe]:min-h-[200px] xs:[&_iframe]:min-h-[250px] sm:[&_iframe]:min-h-[250px] md:[&_iframe]:min-h-[325px]">
            <div className="flex flex-col gap-10">
              <div className="react-player">
                <ReactPlayer
                  url="https://www.youtube-nocookie.com/embed/qiVnjiKfDO0?si=-ePOCc2JfbNjOiLW"
                  light={false}
                  playing={false}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <div className="react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/embed/txBbkExfvMc?si=CEGCBvZb2mqG-giu"
                    light={false}
                    playing={false}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <div className="h-[325px] overflow-hidden rounded-lg">
                  <iframe
                    src="https://open.spotify.com/embed/album/4b0781cosvNb5Xh8wkgPzZ?theme=0"
                    width="100%"
                    height="352"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                </div>
              </div>
              <div>
                <div className="react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/embed/96NsVTq78i8"
                    light={false}
                    playing={false}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
