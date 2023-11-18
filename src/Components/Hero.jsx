const Hero = ({ text, backdrop }) => {
  return (
    <>
      <div className="hero__container container">
        <h1 className="hero__text py-10 text-lg font-bold md:text-xl lg:py-14 lg:text-2xl">{text}</h1>
        {backdrop && <div className="hero__backdrop" style={{ backgroundImage: `url(${backdrop})` }}></div>}
      </div>
    </>
  );
};

export default Hero;
