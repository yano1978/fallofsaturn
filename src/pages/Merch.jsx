const Merch = () => {
  const gradient = {
    background: 'linear-gradient(to right, #231311, #121e23)',
  };
  return (
    <>
      <div
        style={gradient}
        className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center p-10"
      >
        <h2 className="z-50 my-5 font-hypo text-[46px] font-bold">MERCH</h2>
        <div className="z-50">COMING SOON</div>
      </div>
      <div className="absolute left-0 top-0 z-40 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Merch;
