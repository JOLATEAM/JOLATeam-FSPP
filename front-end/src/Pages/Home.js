import React, { useState } from "react";
import Search from "../Components/Search";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  let [city, setCity] = useState("");
  let [restaurants, setRestaurants] = useState([]);
  // let navigate = useNavigate();
  const handleClick = async () => {
    setRestaurants([]);
    let param = city.label.split(",").splice(0, 2).join("");
    console.log(param);
    await axios
      .get(`${API}/yelp/${param}`)
      .then((res) => {
        setRestaurants(res.data.businesses);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(restaurants);
  return (
    <div>
      <div className="h-full bg-yellow-200">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className=" font-extrabold text-black sm:text-4xl">
            <span className="block  text-gray-500 text-4xl md:text-6xl italic my-20 py-0 leading-0">
              <b className="px-4 py-2 mt-2 text-4xl md:text-6xl bg-orange-500 text-white no-italic rounded-md shadow">
                Hungry?
              </b>
            </span>
            <span className="block text-4xl md:text-6xl text-gray-600">
              Welcome to <b className="text-orange-500">SMAK </b>
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Choose a location to get started.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow"></div>
            <Search setCity={setCity} city={city} />
          </div>
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              onClick={handleClick}
              type="button"
              className="py-3 px-6 bg-orange-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              START
            </button>
          </div>
        </div>
      </div>
      {restaurants.length ? (
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {restaurants.map((restaurant, i) => {
                return (
                  <div className="flex flex-wrap w-1/3" key={i}>
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={restaurant.image_url}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
