import React from "react";
import Navigation from "./Navigation";

function Header() {
    return(
        <header className="border-b p-3 flex justify-between items-center text-xl bg-amber-400">
            <span className="font-bold">
                Restolog
            </span>
            
            <Navigation/>
        </header>
    )
}

export default Header