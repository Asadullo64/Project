// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '../services/placeSetvice';
import { PlaceList } from '../components';
import { Place } from '../../types';

const HomePage: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        const loadPlaces = async () => {
            const data = await fetchPlaces();
            setPlaces(data);
        };
        loadPlaces();
    }, []);

    const toggleVisited = (id: number) => {
        setPlaces(places.map(place =>
            place.id === id ? { ...place, visited: !place.visited } : place
        ));
    };

    return (
        <div>
            <h1>Historical Places</h1>
            <PlaceList places={places} onVisitToggle={toggleVisited} />
        </div>
    );
};

export default HomePage;
