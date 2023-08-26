import React, { useState } from "react";
import Modal from "./Modal";
const ResultList = ({ recipeList }) => {
   const[isModalOpen, setIsModelOpen] = useState(false);
   const[selectedMealId, setSelectedMealId] = useState(null);

    const openModal = (mealId) => {
        setIsModelOpen(true);
        setSelectedMealId(mealId);
    }

    const closeModal = () => {
        setIsModelOpen(false);
        setSelectedMealId(null);
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipeList.map(({ idMeal, strMeal,strMealThumb }) => (
          <div
            key={idMeal}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <img className="object-cover rounded-lg" src={strMealThumb} />
            <p className="text-l font-semibold mb-2">{strMeal}</p>  
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => openModal(idMeal)}
          >
            Know More...
          </button>        
          </div>
        ))}
        <Modal 
        isOpen={isModalOpen}
        closeModal={closeModal} // Pass the closeModal function
        mealId={selectedMealId}/>
      </div>
    );
};


export default ResultList