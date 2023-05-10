const Pics = () => {
  const fullPage = document.querySelector('#fullpage');
  const openFullPage = (e) => {
    const url = e.target.src;
    const array = url.split('/');
    const imgName = array[array.length - 1];
    fullPage.style.backgroundImage = 'url(' + 'static/images/' + imgName + ')';
    fullPage.classList.add('!block');
    fullPage.addEventListener('click', () => {
      fullPage.classList.remove('!block');
    });
  };

  return (
    <>
      <div className="content absolute left-0 top-0  flex h-screen w-screen flex-col items-center justify-center p-10">
        <div className="gallery z-40 mt-10 grid h-[700px] max-w-[800px] grid-cols-1 gap-4 overflow-y-auto xs:grid-cols-2 md:max-h-full md:grid-cols-4 md:overflow-y-hidden">
          <div className="grid gap-4">
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_1.jpg"
                alt="fos_1"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_2.jpg"
                alt="fos_2"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_3.jpg"
                alt="fos_3"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full"
                src="/static/images/fos_4.jpg"
                alt="fos_4"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_8.jpg"
                alt="fos_8"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_6.jpg"
                alt="fos_6"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_10.jpg"
                alt="fos_10"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_7.jpg"
                alt="fos_7"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_9.jpg"
                alt="fos_9"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_5.jpg"
                alt="fos_5"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_11.jpg"
                alt="fos_11"
              />
            </div>
            <div>
              <img
                onClick={openFullPage}
                className="h-auto max-w-full rounded-lg"
                src="/static/images/fos_12.jpg"
                alt="fos_12"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/70"></div>
      </div>
    </>
  );
};

export default Pics;
