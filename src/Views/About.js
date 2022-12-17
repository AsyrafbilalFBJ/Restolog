import React from 'react'
import logo from '../profile.jpg'

function About(){
    return (
        <div>
            <h1 className="font-bold text-xl mb-3 text-center">Asyrafbilal Fadhila Bhinar Jaya</h1>
            <h3 className="font-bold text-l mb-3 text-center">
                Junior Front-End Developer
            </h3>
            <div className="rounded-md mb-3">
                <img src={logo} alt="profile" />
            </div>
            
            <p>
                5th semester student of Software Engineering from Telkom University with internship experience as Software Developer. Trained in making websites native, Vue.js, CodeIgniter and more. Now practicing pursue the field of Front-End Development. Dedicated to become a Senior Front-End Developer.
            </p>
            <a href="https://www.linkedin.com/in/asyrafbilal-fadhila-bhinar-jaya-496758222/" className="text-blue-500 py-3 block">linkedin</a>
        </div>
    )
}

export default About