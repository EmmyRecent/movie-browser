import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  // console.log(id);
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("Make an API request for id", id); // Test
    fetch(`https://api.themoviedb.org/3/movie/${id}?query=&api_key=ff7c45d7230050aaa7821c7a7997ed2c`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      // console.log(movieDetails);
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Image column  */}
              <div className="md:col-span-1">
                <img src={posterPath} alt={movieDetails.original_title} className="h-auto w-full rounded shadow md:w-full" />
              </div>

              {/* Details column  */}
              <div className="md:col-span-2">
                <h2 className="mb-4 text-2xl font-bold text-color-secondary">{movieDetails.original_title}</h2>
                {movieDetails.overview !== "" && (
                  <p className="mb-4 text-lg">
                    <span className="mb-2 text-xl font-bold text-color-secondary">Overview:</span>
                    <br />
                    {movieDetails.overview}
                  </p>
                )}
                <p className="mb-4 text-lg">
                  <span className="text-xl font-bold text-color-secondary">Status:</span> {movieDetails.status}
                </p>
                <p className="mb-4 text-lg">
                  <span className="text-xl font-bold text-color-secondary">Release date:</span> {movieDetails.release_date}
                </p>
                <p className="mb-4 text-lg">
                  <span className="text-xl font-bold text-color-secondary">Rating:</span> {movieDetails.vote_average} / 10 ⭐
                </p>

                {/* Conditionally displaying watch now link */}
                {movieDetails.status === "Released" && (
                  <a href={movieDetails.homepage} className="mb-4 inline rounded-lg bg-color-secondary px-6 py-2 font-bold text-light-text ">
                    Watch now
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
