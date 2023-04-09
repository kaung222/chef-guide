import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nabvar from "../components/Nabvar";
import { GrFormClose } from "react-icons/gr";
import { CustomContext } from "../context/Context";
const DetailPage = () => {
  const { id } = useParams();
  const [playVideo, setPlayVideo] = useState(false);
  const [mode] = useContext(CustomContext);
  const [items, setItem] = useState([]);

  console.log(items[0]?.strYoutube);

  const getMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // console.log(data.meals);
    setItem(data.meals);
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Nabvar />
      <div className="flex items-center justify-center flex-col mt-5 p-5 gap-5">
        <button>Back</button>
        <div className="flex-col flex items-center justify-center gap-3">
          <h1>{items[0]?.strMeal}</h1>
          <img src={items[0]?.strMealThumb} className=" w-[300px]" alt="" />
          <div className=" flex justify-between w-full">
            <div className="">
              <span className="px-2 py-1 bg-base-200 rounded-full mx-1">
                {items[0]?.strCategory}
              </span>
              <span className="px-2 py-1 bg-base-200 rounded-full mx-1">
                {items[0]?.strArea}
              </span>
            </div>
            <button
              className=" px-2 py-1 rounded-full bg-base-300"
              onClick={() => {
                setPlayVideo(true);
              }}
            >
              Play Video
            </button>
            {/*  */}
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-3">
          <Link to={`/ingredient/${items[0]?.strIngredient1}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient1}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure1} {items[0]?.strIngredient1}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient2}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient2}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure2} {items[0]?.strIngredient2}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient3}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient3}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure3} {items[0]?.strIngredient3}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient4}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient4}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure4} {items[0]?.strIngredient4}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient5}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient5}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure5} {items[0]?.strIngredient5}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient6}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient6}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure6} {items[0]?.strIngredient6}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient7}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient7}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure7} {items[0]?.strIngredient7}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient8}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient8}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure8} {items[0]?.strIngredient8}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient9}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient9}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure9} {items[0]?.strIngredient9}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient10}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient10}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure10} {items[0]?.strIngredient10}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient11}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient11}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure11} {items[0]?.strIngredient11}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient12}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient12}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure12} {items[0]?.strIngredient12}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient13}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient13}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure13} {items[0]?.strIngredient13}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient14}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient14}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure14} {items[0]?.strIngredient14}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient15}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient15}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure15} {items[0]?.strIngredient15}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient16}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient16}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure16} {items[0]?.strIngredient16}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient17}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient17}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure17} {items[0]?.strIngredient17}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient18}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient18}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure18} {items[0]?.strIngredient18}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient19}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient19}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure19} {items[0]?.strIngredient19}
              </p>
            </div>
          </Link>
          <Link to={`/ingredient/${items[0]?.strIngredient20}`}>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://www.themealdb.com/images/ingredients/${items[0]?.strIngredient20}.png`}
                alt=""
                className="w-[300px]"
              />
              <p>
                {items[0]?.strMeasure20} {items[0]?.strIngredient20}{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center font-light">
          <p>{items[0]?.strInstructions}</p>
        </div>
      </div>
      {/* video container  */}
      {playVideo ? (
        <div className="video-container flex items-center justify-center w-screen h-screen fixed z-50 top-0 left-0 right-0 rounded ">
          <div className=" w-full h-[300px] md:w-[700px] md:h-[400px] p-5 bg-base-300 relative">
            <iframe
              className="w-full rounded h-full "
              src={items[0]?.strYoutube}
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="youtube"
            />

            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-base-100"
              onClick={() => setPlayVideo(false)}
            >
              <GrFormClose />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailPage;
