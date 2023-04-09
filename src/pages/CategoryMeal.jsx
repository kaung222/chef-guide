import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import Nabvar from "../components/Nabvar";
import { CustomContext } from "../context/Context";
import { SwiperSlide, Swiper } from "swiper/react";
import CardCountry from "../components/CardCountry";
import { CateMeals } from "../data";
import { useLocation } from "react-router-dom";

const CategoryMeal = () => {
  const [mode] = useContext(CustomContext);
  const [meals, setMeals] = useState([]);
  const location = useLocation();
  const cateName = location.state;
  console.log(cateName);
  const [mealsbyCategory, setMealbyCategory] = useState(CateMeals);
  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    // console.log(data);

    setMeals(data.categories);
  };
  const getMealsByCate = async (cate) => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
    );
    // console.log(data);
    setMealbyCategory(data.meals);
  };
  const searchCategory = async (cate) => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
    );
    // console.log(data);
    setMealbyCategory(data.meals);
  };
  useEffect(() => {
    getMeals();
    if (cateName) {
      getMealsByCate(cateName);
    }
  }, []);
  return (
    <div data-theme={`${mode && "light"}`}>
      <div className="">
        <Nabvar />
        <div className="mt-3">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {meals.map((cate) => {
              return (
                <SwiperSlide>
                  <span
                    className="px-7 py-4 rounded-full bg-base-300 cursor-pointer"
                    onClick={() => searchCategory(cate.strCategory)}
                    key={cate.idCategory}
                  >
                    {cate.strCategory}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-5 p-5">
          {mealsbyCategory.map((meal) => {
            return <CardCountry key={meal.idMeal} meal={meal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryMeal;
