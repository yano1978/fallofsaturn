const Bio = () => {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center p-10">
        <h2 className="z-40 my-5 font-hypo text-[46px] font-bold">BIO</h2>
        <div className="z-40 max-w-[600px] text-center leading-loose">
          London based <strong>Fall of Saturn</strong> proudly flying the flag of a new wave of
          groove metal. Playing in an extreme low tuning to create a nice balance between the new
          and old elements of metal. Our first song was released on Bandcamp late last year. Check
          it if you haven’t already. The next single <strong>Knowledge is Power</strong> will be
          released on the <strong>19th of May</strong>
          with an accompanying video. further releases shortly will follow, showcasing the bands
          diversity and experience not to be pigeonholed into one genre or style. Keep{' '}
          <strong>Fall of Saturn</strong> in your sights as we are here to stay.
        </div>
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Bio;
