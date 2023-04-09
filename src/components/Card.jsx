import React from "react";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div>
      <Link to={`/categories`} state={meal.strCategory}>

      <div className="card shadow-xl p-3 bg-base-300 rounded-2xl hover:shadow-2xl shadow-base-300">
        <img src={meal.strCategoryThumb} className="card-img-top" alt="..." />
        <div className="mt-3 flex items-center justify-between">
          <span className="bg-slate-600 text-white px-2 rounded-full">
            {meal.strCategory}
          </span>
          <Link to={`/${meal.idCategory}`} state={{ meal }}>
            <span>Go Detail</span>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
