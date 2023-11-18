const Hero1 = ({ text }) => {
  return (
    <div className="container">
      <h1 className="hero__text bg-slate-400 px-8 py-10 text-xl font-bold md:text-xl lg:py-14 lg:text-2xl">{text}</h1>
    </div>
  );
};

export default Hero1;
