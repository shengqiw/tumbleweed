import { atom } from 'jotai';

const toggleRoute = atom(false);

export const readToggleRoute = atom((get) => get(toggleRoute));

export const writeToggleRoute = atom(null, (get, set, update: any) => {
    set(toggleRoute, update)
});