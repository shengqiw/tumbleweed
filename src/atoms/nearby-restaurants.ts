import { atom } from 'jotai';

const nearbyRestaurants = atom([]);

export const readRestaurants = atom((get) => get(nearbyRestaurants));

export const writeRestaurants = atom(null, (get, set, update: any) => {
    set(nearbyRestaurants, update)
})