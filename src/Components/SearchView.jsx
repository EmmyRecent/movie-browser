import Hero1 from "./Hero1";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  // console.log(searchResults, "are the search results"); // Test

  let resultsHtml;

  // Results Validation check
  if (searchResults.length === 0) {
    resultsHtml = <p className="text-xl font-bold leading-relaxed">Oops!! no result was found</p>;
  } else {
    resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard key={i} movie={obj} />;
    });
  }

  return (
    <>
      <Hero1 text={title} />
      {resultsHtml && <div className="container my-5 grid items-center justify-center gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">{resultsHtml}</div>}
    </>
  );
};

export default SearchView;
