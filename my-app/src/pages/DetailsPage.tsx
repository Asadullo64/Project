import React from 'react';
import { useParams } from 'react-router-dom';
import { Place } from '../../types';
import styles from '../components/PlaceItem/style.module.scss';


export const DetailsPage: React.FC<{ places: Place[] }> = ({ places }) => {
    const { id } = useParams<{ id: string }>();
    const place = places.find((p) => p.id === parseInt(id!));

    if (!place) return <div>Place not found</div>;

    return (
        <div className={styles.container}>
            <div className={styles['place-details']}>
                <img src={place.imageUrl} alt={place.name} className={styles['place-image']} />
                <div className={styles['place-title']}>{place.name}</div>
                <div className={styles['place-description']}>{place.description}</div>
                <button className={styles.button}>
                    {place.visited ? 'Unmark as Visited' : 'Mark as Visited'}
                </button>
            </div>
        </div>
    );
};

