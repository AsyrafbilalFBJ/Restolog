import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header/>

        <div className="p-3">
        <Routes>
          <Route exact path="/Restolog/" element={<Home />}/>
          <Route path="/Restolog/about" element={<About />}/>
          <Route path="/Restolog/:id" element={<Product />}/>
        </Routes>
        </div>
        <Footer/>

      </Router>
    </div>
  )
}

export default App;
