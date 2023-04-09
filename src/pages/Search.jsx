import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CardCountry from "../components/CardCountry";
import axios from "axios";
import { CustomContext } from "../context/Context";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResult] = useState(null);
  const [mode] = useContext(CustomContext);
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && search !== "") {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setResult(data.meals);
    }
  };
  const searchHandler = async (searchTerm) => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    setResult(data.meals);
  };

  return (
    <div data-theme={`${mode && "light"}`} className="min-h-screen">
      <div className=" flex pt-3 items-center justify-center">
        <Link to="/">
          <button className="p-2">
            <IoIosArrowBack className="text-xl" />
          </button>
        </Link>
        <div className="flex items-center px-5 rounded-full w-full bg-base-300 justify-center mr-5">
          <BiSearch className="" />
          <input
            type="text"
            // defaultValue={search}
            className="w-full px-3 py-2 bg-base-300 text-sm outline-none"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="recomanded px-5 md:px-8 mt-3">
        <p>Recommanded</p>
        <div className=" mt-3">
          <div className=" flex items-center justify-start gap-5">
            <span>-</span>
            <p
              className="text-sm font-light text-primary cursor-pointer"
              onClick={() => searchHandler("vegetarian")}
            >
              vegetarian
            </p>
          </div>
          <div className=" flex items-center justify-start gap-5">
            <span>-</span>
            <p
              className="text-sm font-light text-primary cursor-pointer"
              onClick={() => searchHandler("beef")}
            >
              beef
            </p>
          </div>
          <div className=" flex items-center justify-start gap-5">
            <span>-</span>
            <p
              className="text-sm font-light text-primary cursor-pointer"
              onClick={() => searchHandler("butter")}
            >
              butter
            </p>
          </div>
        </div>
      </div>
      {!results ? (
        <div className=" mt-10">
          <p className="text-center">Enter meal or ingredients to search.</p>
        </div>
      ) : (
        <div className="mt-5 px-5 md:px-8">
          <h3 className="my-3">Results</h3>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {results?.map((meal) => {
              return <CardCountry key={meal.idMeal} meal={meal} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
