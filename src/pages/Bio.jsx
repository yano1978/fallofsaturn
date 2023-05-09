const Bio = () => {
  return (
    <div className="absolute flex content bg-black/80 p-10 top-0 left-0 w-screen h-screen items-center justify-center flex-col">
      <h2 className="font-bold my-5 font-hypo text-[46px]">BIO</h2>
      <div className="leading-loose max-w-[600px] text-center">
        London based <strong>Fall of Saturn</strong> proudly flying the flag of a new wave of groove
        metal. Playing in an extreme low tuning to create a nice balance between the new and old
        elements of metal. Our first song was released on Bandcamp late last year. Check it if you
        haven’t already. The next single <strong>Knowledge is Power</strong> will be released on the{' '}
        <strong>19th of May</strong>
        with an accompanying video. further releases shortly will follow, showcasing the bands
        diversity and experience not to be pigeonholed into one genre or style. Keep{' '}
        <strong>Fall of Saturn</strong> in your sights as we are here to stay.
      </div>
    </div>
  );
};

export default Bio;
