import React, { useContext, useEffect, useState } from "react";
import Nabvar from "../components/Nabvar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CustomContext } from "../context/Context";

const Ingredient = () => {
  const { id } = useParams();
  const [mode] = useContext(CustomContext);
  const [relatedMeals, setRelatedMeal] = useState([]);
  //   console.log(id);
  const getData = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
    );
    console.log(data.meals);
    setRelatedMeal(data.meals);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Nabvar />
      <button className="px-2 py-1 rounded-full bg-base-300">Back</button>
      <div className="flex items-center justify-center flex-col mt-5 p-5 gap-5">
        <div className="flex-col flex items-center justify-center gap-3">
          <h1>{id}</h1>
          <img
            src={`https://www.themealdb.com/images/ingredients/${id}.png`}
            className=" w-[300px]"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {relatedMeals.map((meal) => {
            return (
              <div
                className="flex items-center justify-center gap-3 flex-col"
                key={meal.idMeal}
              >
                <Link to={`/detail/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt="" className="w-[300px]" />
                </Link>
                <p>{meal.strMeal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
