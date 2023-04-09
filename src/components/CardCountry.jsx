import React from "react";
import { Link } from "react-router-dom";

const CardCountry = ({ meal }) => {
  return (
    <div>
      <Link to={`/detail/${meal.idMeal}`} >
        <div className="card w-full md:w-[300px] mt-5 shadow-xl p-3 bg-base-300 rounded hover:shadow-2xl ">
          <img
            src={meal.strMealThumb}
            className="card-img-top rounded"
            alt="..."
          />
          <div className="mt-3 h-[50px]">
            <span className="bg-slate-600 text-white px-2 rounded-full">
              {meal.strMeal}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCountry;
