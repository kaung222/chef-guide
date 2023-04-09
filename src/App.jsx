import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MealDetail from "./pages/MealDetail";
import CountryMeal from "./pages/CountryMeal";
import Vegan from "./pages/Vegan";
import AllMeal from "./pages/AllMeal";
import CategoryMeal from "./pages/CategoryMeal";
import DetailPage from "./pages/DetailPage";
import Ingredient from "./pages/Ingredient";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllMeal />} />
        <Route path="/categories" element={<CategoryMeal />} />
        <Route path="/countries" element={<CountryMeal />} />
        <Route path="/vegetarian" element={<Vegan />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/ingredient/:id" element={<Ingredient />} />
        <Route path="/:id" element={<MealDetail />} />
      </Routes>
    </>
  );
};

export default App;
