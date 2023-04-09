import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CustomContext } from "../context/Context";

const Nabvar = () => {
  const [mode, setMode] = useContext(CustomContext);
  return (
    <div>
      <div className="flex items-center justify-between py-1 bg-base-300">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <HiOutlineMenuAlt2 className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box"
            >
              <li>
                <NavLink to="/">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">All Meals</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">Categories</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/countries">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">Countries</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/vegetarian">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">Vegetarians</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center justify-between gap-5 hidden md:flex">
          <NavLink to="/">
            <span className="px-3 rounded-full">All Meals</span>
          </NavLink>
          <NavLink to="/categories">
            <span className="px-3 rounded-full">Categories</span>
          </NavLink>
        </div>
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">Chef Guide</a>
        </div>
        <div className="items-center justify-between gap-5 hidden md:flex">
          <NavLink to="/countries">
            <span className="px-3 rounded-full">Countries</span>
          </NavLink>
          <NavLink to="/vegetarian">
            <span className="px-3 rounded-full">Vegetarian</span>
          </NavLink>
        </div>
        <div className="">
          <Link to="/search">
            <button className="btn btn-ghost btn-circle">
              <BiSearch className="text-xl" />
            </button>
          </Link>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMode(!mode)}
          >
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={mode}
              onChange={() => console.log("ll")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
