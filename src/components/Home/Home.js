import React from 'react';
import Services from "./Services/Services";
import Experts from "./Experts/Experts";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div id="home">
            <Banner/>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;