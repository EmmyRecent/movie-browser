import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="card max-w-sm overflow-hidden rounded shadow-2xl">
      <img src={posterUrl} className="w-full rounded-md object-cover" alt={movie.original_title} />
      <div className="px-6 py-6">
        <div className="mb-4">
          <h5 className="text-xl font-bold text-light-text">{movie.original_title}</h5>
        </div>
        <Link to={detailUrl} className="rounded-md bg-color-secondary px-4 py-2 text-lg">
          Show details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
