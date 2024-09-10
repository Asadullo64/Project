// src/redux/actions.ts
export const TOGGLE_VISITED = 'TOGGLE_VISITED';

export interface ToggleVisitedAction {
    type: typeof TOGGLE_VISITED;
    payload: number;
}

export type PlaceActionTypes = ToggleVisitedAction;

export const toggleVisited = (id: number): PlaceActionTypes => ({
    type: TOGGLE_VISITED,
    payload: id,
});
