// src/redux/store.ts
import { createStore } from 'redux';
import { placesReducer } from './reducers';

export const store = createStore(placesReducer);
