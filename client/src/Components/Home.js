import React from 'react';
import JumbotronOne from './JumbotronOne';
import Carousel from './Carousel';
import Cards from './Cards';
import CardsTwo from './CardsTwo';

const Home = () => {

    return(
        <div>
        <JumbotronOne />
        <Cards />
        {''}
        <CardsTwo/>
        {''}
        <Carousel/>
        </div>
    );
}

export default Home;