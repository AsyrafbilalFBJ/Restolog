import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    // Create your own Mock API: https://mockapi.io/
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
    let meals = useAxiosGet(url)

    let content = null

    if(meals.error){
        content = <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(meals.loading){
        content = <Loader></Loader>
    }

    if(meals.data){
        content = 
        meals.data.map((meal) => 
            <div key={meal.idMeal} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    meal={meal}
                />
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-xl mb-3">
                Best Sellers
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default Home