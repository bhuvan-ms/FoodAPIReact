import React,{useEffect, useState} from "react";

const Modal = ({isOpen, closeModal, mealId}) => {
    const [mealDetails, setMealDetails] = useState(null)

    useEffect(() => {
        if (isOpen) {
          
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(response => response.json())
            .then(data => {
              setMealDetails(data.meals[0]);
              //console.log(data.meals[0]);
            })
            .catch(error => {
              console.error('Error fetching meal details:', error);
            });
        }
    }, [isOpen, mealId]); 

    if(!isOpen)
    {
        return null;
    }
   const embedUrl = mealDetails?.strYoutube?.replace('/watch?v=', '/embed/');

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {mealDetails ? (
          <>
            <h2 className="text-xl font-semibold mb-2">Know more about {mealDetails.strMeal}</h2>
            <br/>
            <p>Meal Type: <strong>{mealDetails.strArea} </strong></p>
            <br/>
            <a href={mealDetails.strSource} target="_blank" className="text-purple-600">Click to read the food article in new tab</a>
            <br/>
            <br/>
            <div className="aspect-w-16 aspect-h-9">
            <iframe 
            src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </>
        ) : (
          <p>Loading meal details...</p>
        )}
            {/* Other meal details */}
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      );
}

export default Modal;