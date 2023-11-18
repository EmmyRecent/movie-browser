import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  // The initial state of clicked is set to false. This state will be used to track whether the mobile navigation menu is currently open (true) or closed (false).
  const [clicked, setClicked] = useState(false);

  // Handles clicks on the mobile navigation
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Handles click on the NavLinks for the mobile navigation
  const handleCloseMobileMenu = () => {
    setClicked(false);
  };

  // Handles the value of the search text and updates it
  const updateSearchText = (e) => {
    navigate("/search");
    // console.log(e.target.value);
    setSearchText(e.target.value); // Keybinding useEffect, it sets the value to the screen
  };

  return (
    <header className="sticky top-0 z-[300]">
      <nav className="container flex items-center justify-between bg-color-primary py-4">
        <div className="flex items-center">
          {/* Logo  */}
          {/* //! Come back here */}
          <NavLink className="mr-16 py-4 text-3xl font-bold text-color-secondary" to="/">
            Movie Browser
          </NavLink>

          {/* nav list  */}
          <ul className="hidden justify-between space-x-6 lg:flex">
            <li>
              <NavLink to="/" className="py-4 text-xl font-normal text-color-secondary transition duration-300 ease-in-out hover:font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="py-4 text-xl font-normal text-color-secondary transition duration-300 ease-in-out hover:font-bold">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search  */}
        <form>
          <div className="my-4 hidden max-w-md items-center justify-between rounded-full bg-slate-400 lg:flex lg:max-w-[450px]">
            <input
              className="w-full border-none bg-transparent px-4 py-2 text-xl font-normal text-dark-text placeholder-color-primary outline-none md:px-6 md:py-2"
              type="search"
              aria-label="search"
              placeholder="Search Movies"
              value={searchText}
              onChange={updateSearchText}
            />

            {/* // TODO: add an onclick event here  */}
            <button className="cursor-pointer rounded-full border-none bg-color-secondary px-10 py-3 text-lg font-normal outline-none" type="button">
              Search
            </button>
          </div>
        </form>

        {/* Mobile menu  */}
        <div id="mobile" className="z-[100] ml-4 cursor-pointer py-4 text-4xl md:ml-0 lg:hidden" onClick={handleClick}>
          <i id="bar" className={clicked ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        {/* Mobile navigation  */}
        <div id="menu" className={clicked ? "menu active" : "menu"}>
          <ul className="mt-[60px] grid items-center space-y-7 py-20 text-center">
            <li>
              <NavLink id="hLink" to="/" onClick={handleCloseMobileMenu} className="text-lg font-normal text-color-secondary transition duration-300 ease-in-out hover:font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink id="hLink" to="/about" onClick={handleCloseMobileMenu} className="text-lg font-normal text-color-secondary transition duration-300 ease-in-out hover:font-bold">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Small screen search  */}
      <form className="container bg-color-primary pb-4">
        <div className=" flex w-full items-center justify-between rounded-full bg-slate-400 lg:hidden">
          <input
            className="w-full border-none bg-transparent px-4 py-2 text-xl font-normal text-dark-text placeholder-color-primary outline-none md:px-6 md:py-2"
            type="search"
            aria-label="search"
            placeholder="Search Movies"
            value={searchText}
            onChange={updateSearchText}
          />

          {/* //TODO: Add an onClick event here  */}
          <button className="cursor-pointer rounded-full border-none bg-color-secondary px-5 py-3 text-lg font-normal outline-none md:px-10  md:py-4" type="button">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Navbar;
