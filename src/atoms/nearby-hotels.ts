import { atom } from 'jotai';

const nearbyHotels = atom([]);

export const readHotels = atom((get) => get(nearbyHotels));

export const writeHotels = atom(null, (get, set, update: any) => {
    set(nearbyHotels, update)
})