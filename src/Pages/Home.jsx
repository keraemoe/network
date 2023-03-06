import React from 'react';
import ServiceCard from '../Components/ServiceCard/ServiceCard';
import Services from '../Components/Services/Services';
import Work from '../Components/Work/Work';
import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <ServiceCard />
            <Work />
            <Footer />
        </div>
    );
};

export default Home;