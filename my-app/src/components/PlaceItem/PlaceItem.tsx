// src/components/PlaceItem.tsx
import React from 'react';
import { Place } from '../../../types';

import styles from "./style.module.scss";


interface PlaceItemProps {
    place: Place;
    onVisitToggle: (id: number) => void;
}

export const PlaceItem: React.FC<PlaceItemProps> = ({ place, onVisitToggle }) => {
    return (
        <div className={styles.item}>
            <h3 className={styles.item__name}>{place.name}</h3>
            <img className={styles.item__img} src={place.imageUrl} alt={place.name} />
            <p className={styles.item__description}>{place.description}</p>
            <button className={styles.item__button} onClick={() => onVisitToggle(place.id)}>
                {place.visited ? "Unmark as Visited" : "Mark as Visited"}
            </button>
        </div>
    );
};

