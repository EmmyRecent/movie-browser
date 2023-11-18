import Hero1 from "../Components/Hero1";

const About = () => {
  return (
    <>
      <Hero1 text="About Movie Browser - Unleashing the Magic of Entertainment" />
      <section className="container">
        <div className="my-5">
          <h1 className="text-[5rem] font-bold md:text-[8rem]">🌟🎥</h1>
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">Our Mission:</h1>
          <p className="my-4 text-lg leading-relaxed lg:text-xl">
            At <span className="font-bold text-color-secondary">Movie Browser</span>, our mission is simple yet powerful — to provide a user-friendly platform that empowers movie enthusiasts to
            explore, discover, and connect with the world of entertainment. We believe that the magic of storytelling transcends borders, and we're here to make that magic accessible to you.
          </p>
          <hr />
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">What sets us apart:</h1>
          <ol>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🚀 Comprehensive Database:</span> Our extensive database covers a wide range of titles from various genres and cultures.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🌐 Global Reach:</span> From Hollywood to Bollywood, from classic cinema to the latest anime releases, we're your go-to source for global entertainment.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🤝 Community-Centric:</span> Movie Browser is not just a platform; it's a community. Connect with fellow users, share your insights, and build a network of
              like-minded enthusiasts. <span className="font-bold text-color-secondary">(Coming soon...)</span>
            </li>
          </ol>
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">Our Commitment:</h1>
          <p className="my-4 text-lg leading-relaxed lg:text-xl">
            As stewards of Movie Browser, we are committed to continuously improving and expanding our platform. Your feedback is invaluable, and we invite you to join us on this exciting journey of
            cinematic exploration.
          </p>

          <p>Thank you for choosing Movie Browser. Let the adventure begin!</p>
        </div>
      </section>
    </>
  );
};

export default About;
