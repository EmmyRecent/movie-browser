import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Test
  // console.log(searchText, "is the default");
  // setTimeout(() => {
  //   setSearchText("New text");
  //   console.log(searchText, "is the new text");
  // }, 2000);

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=ff7c45d7230050aaa7821c7a7997ed2c`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.results); // Test
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* searchText and searchResults are in the search component as a prop  */}
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
