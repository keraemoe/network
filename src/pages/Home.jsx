import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Services from '../components/Services/Services';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <ServiceCard />
            <Footer />
        </div>
    );
};

export default Home;