import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Nabvar from "../components/Nabvar";
import { CustomContext } from "../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardCountry from "../components/CardCountry";
import { seafoods } from "../data2";
import Loader from "../components/Loader";

const CountryMeal = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [mode] = useContext(CustomContext);
  const [mealsByArea, setMealsByArea] = useState(seafoods);

  const searchCountry = async (country) => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    setMealsByArea(data.meals);
    setLoading(false);
  };

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    console.log(data);
    setMeals(data.meals);
    setLoading(false);
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <div>
      <div className="" data-theme={`${mode && "light"}`}>
        <Nabvar />
        <div className=" mt-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {meals.map((country) => {
              return (
                <SwiperSlide>
                  <span
                    className="px-7 py-4 rounded-full bg-base-300 cursor-pointer"
                    onClick={() => searchCountry(country.strArea)}
                    key={Date.now()}
                  >
                    {country.strArea}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" flex items-center justify-center p-5 flex-wrap gap-5">
          {mealsByArea.map((meal) => {
            return <CardCountry key={meal.idMeal} meal={meal} />;
          })}
        </div>
        {isLoading ? <Loader /> : ""}
      </div>
    </div>
  );
};

export default CountryMeal;
