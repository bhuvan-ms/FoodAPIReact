import React, {useState} from 'react';
import ResultList from './ResultList';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [recipes, setRecipes] = useState([]);
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    

    const searchButton = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        const data = await response.json();
        setRecipes(data.meals || []); // Use setRecipes to update the state
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          searchButton();
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
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <ResultList recipeList = {recipes}/>
    </>
  );
};

export default SearchBar;
