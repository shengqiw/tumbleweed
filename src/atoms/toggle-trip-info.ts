import { atom } from 'jotai';

const toggleTripInfo = atom(false);

export const readToggleTripInfo = atom((get) => get(toggleTripInfo));

export const writeToggleTripInfo = atom(null, (get, set, update: any) => {
    set(toggleTripInfo, update)
});

const tripInfo = atom({
    distance: 0
});

export const readTripInfo = atom((get) => get(tripInfo));

export const writeTripInfo = atom(null, (get, set, update: any) => {
    const distanceMiles = update.distance * 0.621371;
    const roundedDistance = Math.round(distanceMiles * 10) /10;

    set(tripInfo, {
        ...update,
        distance: roundedDistance
    })
});
