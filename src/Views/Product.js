import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const { id } = useParams()
    // Create your own Mock API: https://mockapi.io/
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    
    let meal = useAxiosGet(url)

    let content = null

    if(meal.error){
        content = <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(meal.loading){
        content = <Loader></Loader>
    }

    if(meal.data){
        content = 
        meal.data.map((meals) => 
            <div key={meals.idMeal} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <div>
                    <h1 className="text-xl font-bold mb-3">
                        {meals.strMeal}
                    </h1>
                    <div className="mb-3">
                        <img
                            src={meals.strMealThumb}
                            alt={meals.strMeal}
                        />
                    </div>
                    <div className="mb-3">
                        <p className="font-bold text-l mb-3">Tags:</p>
                        {meals.strTags}
                    </div>
                    <div>
                        <p className="font-bold text-l mb-3">Instructions:</p>
                        {meals.strInstructions}
                    </div>
                </div>
            </div>
        )
        // content = 
        // <div>
        //     <h1 className="text-2xl font-bold mb-3">
        //         {meal.data.meals.strMeal}
        //     </h1>
        //     <div>
        //         <img
        //             src={meal.data.meals.strMealThumb}
        //             alt={meal.data.meals.strMeal}
        //         />
        //     </div>
        //     <div className="font-bold text-xl mb-3">
        //         tags: {meal.data.meals.strTags}
        //     </div>
        //     <div>
        //         {meal.data.meals.strInstructions}
        //     </div>
        // </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product