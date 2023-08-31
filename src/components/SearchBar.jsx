import React, { useState, useEffect } from "react";
import ResultList from "./ResultList";
import Dropdown from "./DropDown";

const SearchBar = () => {
  const areas = [
    { strArea: "American" },
    { strArea: "British" },
    { strArea: "Canadian" },
    { strArea: "Chinese" },
    { strArea: "Croatian" },
    { strArea: "Dutch" },
    { strArea: "Egyptian" },
    { strArea: "Filipino" },
    { strArea: "French" },
    { strArea: "Greek" },
    { strArea: "Indian" },
    { strArea: "Irish" },
    { strArea: "Italian" },
    { strArea: "Jamaican" },
    { strArea: "Japanese" },
    { strArea: "Kenyan" },
    { strArea: "Malaysian" },
    { strArea: "Mexican" },
    { strArea: "Moroccan" },
    { strArea: "Polish" },
    { strArea: "Portuguese" },
    { strArea: "Russian" },
    { strArea: "Spanish" },
    { strArea: "Thai" },
    { strArea: "Tunisian" },
    { strArea: "Turkish" },
    { strArea: "Unknown" },
    { strArea: "Vietnamese" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (selectedValue !== "") {
      fetchData(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedValue}`
      );
    }
  }, [selectedValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton();
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const searchButton = () => {
    fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    );
  };

  const randomButton = () => {
    fetchData("https://www.themealdb.com/api/json/v1/1/random.php");
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.meals || []); // Use setRecipes to update the state
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <>
      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:border-blue-300"
          onClick={searchButton}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button
          className="px-2 py-0 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          onClick={randomButton}
        >
          Random Meal
        </button>
        <label className="flex flex-col">
          <span className="mb-1">Select a culinary cuisine</span>
          <select
            className="w-full px-2 py-1 border rounded-md"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value=""></option>
            {areas.map((area, index) => (
              <option key={index} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </label>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <ResultList recipeList={recipes} />
    </>
  );
};

export default SearchBar;
