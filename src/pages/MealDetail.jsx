import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nabvar from "../components/Nabvar";

const Detail = () => {
  const location = useLocation();
  const meal = location.state.meal;
  return (
    <div>
      <Nabvar />
      <div className="container my-4 p-3 md:p-5">
        <Link to="/">
          <button className="px-2 py-1 rounded-full bg-base-200"> Back </button>
        </Link>
        <div className="">
          <img src={meal.strCategoryThumb} alt="" />
          <h3 className="text-2xl">{meal.strCategory}</h3>
          <p className=" max-w-sm font-light">{meal.strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
