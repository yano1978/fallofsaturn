const Contact = () => {
  const gradient = {
    background: 'linear-gradient(to right, #231311, #121e23)',
  };
  return (
    <>
      <div
        style={gradient}
        className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center p-10"
      >
        <h2 className="z-40 my-5 font-hypo text-[46px] font-bold">CONTACT</h2>
        <a className="z-40" href="mailto:fallofsaturn@gmail.com">
          fallofsaturn@gmail.com
        </a>
        <a className="z-40 pt-2" href="tel:++447784953012">
          +44 7784 953012
        </a>
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-screen w-screen bg-black/80"></div>
    </>
  );
};

export default Contact;
