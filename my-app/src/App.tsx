// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage places={[HomePage]} />} />
            </Routes>
        </Router>
    );
};

export default App;
