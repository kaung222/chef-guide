import React, { useContext, useEffect, useState } from "react";
import Nabvar from "../components/Nabvar";
import axios from "axios";
import CardCountry from "../components/CardCountry";
import { CustomContext } from "../context/Context";
import Loader from "../components/Loader";

const Vegan = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [mode] = useContext(CustomContext);
  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
    );
    console.log(data);
    setMeals(data.meals);
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <div className="" data-theme={`${mode && "light"}`}>
      <Nabvar />
      <div className="">
        <div className=" flex items-center justify-center flex-wrap p-5 gap-5">
          {meals.map((meal) => {
            return <CardCountry key={meal.idMeal} meal={meal} />;
          })}
        </div>
      </div>
      {isLoading && <Loader/>}
    </div>
  );
};

export default Vegan;
