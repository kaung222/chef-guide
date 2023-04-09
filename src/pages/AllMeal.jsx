import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";

import axios from "axios";
import Nabvar from "../components/Nabvar";
import { CustomContext } from "../context/Context";
import Loader from "../components/Loader";

const AllMeal = () => {
  const [mode] = useContext(CustomContext);
  const [isLoading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(data);
    setMeals(data.categories);
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <div data-theme={`${mode && "light"}`}>
      <div className="">
        <Nabvar />
        <div className="">
          <h3 className="mt-5 px-5">All Meals</h3>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-5 p-5 mt-5">
          {meals.map((meal) => (
            <div key={meal.idCategory}>
              <Card meal={meal} />
            </div>
          ))}
        </div>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default AllMeal;
