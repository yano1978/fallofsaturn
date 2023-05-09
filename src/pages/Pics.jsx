const Pics = () => {
  return (
    <div className="absolute flex content bg-black/80 p-10 top-0 left-0 w-screen h-screen items-center justify-center flex-col">
      <div className="gallery max-w-[900px] h-[800px] overflow-y-auto mt-10 grid grid-cols-1 xs:grid-cols-2 md:max-h-full md:overflow-y-hidden md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_1.jpg"
              alt="fos_1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_2.jpg"
              alt="fos_2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_3.jpg"
              alt="fos_3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full" src="/static/images/fos_4.jpg" alt="fos_4" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_8.jpg"
              alt="fos_8"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_6.jpg"
              alt="fos_6"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_10.jpg"
              alt="fos_10"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_7.jpg"
              alt="fos_7"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_9.jpg"
              alt="fos_9"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_5.jpg"
              alt="fos_5"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_11.jpg"
              alt="fos_11"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/static/images/fos_12.jpg"
              alt="fos_12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pics;
