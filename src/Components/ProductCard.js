import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/${props.meal.idMeal}`}>
                <div 
                    style={{
                        'backgroundImage': `url('${props.meal.strMealThumb}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/${props.meal.idMeal}`}>
                        { props.meal.strMeal }
                    </Link>    
                </h3>
                <Link 
                    to={`/${props.meal.idMeal}`}
                    className="bg-amber-400 text-white p-2 flex justify-center w-full"
                >
                    Instructions
                </Link>
            </div>
        </div>
    )
}

export default ProductCard