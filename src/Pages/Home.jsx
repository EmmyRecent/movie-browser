import Hero1 from "../Components/Hero1";

const Home = () => {
  return (
    <>
      <Hero1 text="Welcome to Movie Browser - Your Gateway to the Cinematic Universe" />
      <section className="container">
        <div className="my-5">
          <h1 className="text-[5rem] font-bold md:text-[8rem]">🍿🎬</h1>
          <p className="my-4 text-lg leading-relaxed lg:text-xl">
            <span className="text-4xl text-color-secondary lg:text-5xl">G</span>reetings, movie enthusiasts! Welcome to <span className="font-bold text-color-secondary">Movie Browser</span>, your
            ultimate destination for exploring the vast world of movies, series, and anime. Whether you're a cinephile seeking the latest blockbusters, a TV series aficionado, or an anime lover, our
            platform is tailored just for you.
          </p>
          <hr />
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">What is Movie Browser?</h1>
          <p className="mb-4 text-lg leading-relaxed">
            Movie Browser is a comprehensive web application designed to make your movie discovery experience seamless and enjoyable. Imagine a world where you can effortlessly search for any movie,
            series, or anime in existence and instantly access detailed information about it. Well, that's exactly what we offer!
          </p>
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">Key Features:</h1>
          <ul>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🔍 Effortless Search:</span> Instantly find any movie or series with our powerful search functionality.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🎞️ Detailed Information:</span> Get comprehensive details about your favorite titles, including cast, ratings, reviews, and more.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">🌐 Universal Coverage:</span> From Hollywood blockbusters to international cinema and anime, we've got it all.
            </li>
            {/* Coming soon  */}
            <li className="mb-4 text-lg leading-relaxed">
              <span className="font-bold">📝 User Reviews:</span> Share your thoughts and read reviews from fellow movie enthusiasts.{" "}
              <span className="font-bold text-color-secondary">(Coming soon...)</span>
            </li>
          </ul>
          <hr />
          <h1 className="my-4 text-xl font-bold leading-relaxed text-color-secondary lg:text-2xl">How to Get Started:</h1>
          <ol>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">Search:</span> Use our search bar to look up movies, series, or anime by title, actor, or genre.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">Explore:</span> Dive into the rich world of entertainment and discover hidden gems.
            </li>
            <li className="mb-2 text-lg leading-relaxed">
              <span className="font-bold">Interact:</span> Leave reviews, rate your favorites, and connect with other users who share your taste.{" "}
              <span className="font-bold text-color-secondary">(Coming soon...)</span>
            </li>
          </ol>
          <p className="my-4 text-center  text-lg leading-relaxed">Ready to embark on a cinematic journey like never before? Start exploring with Movie Browser today!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
