import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                Restolog
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-amber-600 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-amber-600 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About me
                    </Link>
                </li>
                {/* <li>
                    <Link 
                        to="/products" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Product
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavigationMenu