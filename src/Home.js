import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                
             <div className="home__row">
                <Product 
                title="The lean startup"
                price={29.99}
                rating ={3}/>
                <Product />
             </div>

             <div className="home__row">
              <Product />
              <Product />
              <Product />
             </div>

             <div className="home__row">
              <Product />
             </div>
             </div>
        </div>
    )
}

export default Home
