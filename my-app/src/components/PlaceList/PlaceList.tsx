// src/components/PlaceList.tsx
import React from 'react';
import { Place } from '../../../types';
import { PlaceItem } from '../PlaceItem';

import style from './style.module.scss'

interface PlaceListProps {
    places: Place[];
    onVisitToggle: (id: number) => void;
}

export const PlaceList: React.FC<PlaceListProps> = ({ places, onVisitToggle }) => {
    return (
        <div className={style.block}>
            {places.map(place => (
                <PlaceItem 
                    key={place.id} 
                    place={place} 
                    onVisitToggle={onVisitToggle} 
                />
            ))}
        </div>
    );
};


