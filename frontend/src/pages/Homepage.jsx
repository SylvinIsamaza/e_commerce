import React from 'react'
import Header from '../components/Header.jsx';
import Hero from '../components/routes/Hero.jsx';
import Categories from '../components/routes/heroComponent/Categories.jsx'
import BestDeals from '../components/routes/bestDeals/BestDeals.jsx'
import FeaturedProduct from '../components/featuredProduct/FeaturedProduct.jsx'
import Events from '../components/Events/Events.jsx'
import Sponsored from '../components/routes/Sponsored.jsx'
import Footer from '../components/layout/Footer.jsx'
function Homepage({user}) {
  return (
<>
          <Header activeHeading={1} user={user}/>
          <Hero/>
          <Categories />
          <BestDeals></BestDeals>
          <Events/>
          <FeaturedProduct/>
          <Sponsored/>
          <Footer/>
 
 </>
  )
}

export default Homepage