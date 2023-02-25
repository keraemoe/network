import React from 'react';
import { Router, Routes } from 'react-router';

const Route = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default Route;