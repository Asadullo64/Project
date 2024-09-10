// src/redux/reducers.ts
import { Place } from '../../types';
import { PlaceActionTypes, TOGGLE_VISITED } from './action';

interface PlacesState {
    places: Place[];
}

const initialState: PlacesState = {
    places: []
};

export const placesReducer = (state = initialState, action: PlaceActionTypes): PlacesState => {
    switch (action.type) {
        case TOGGLE_VISITED:
            return {
                ...state,
                places: state.places.map(place =>
                    place.id === action.payload ? { ...place, visited: !place.visited } : place
                )
            };
        default:
            return state;
    }
};
