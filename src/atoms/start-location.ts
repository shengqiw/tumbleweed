import { atom, useAtom } from 'jotai';

const geoDesMoines = {
    latitude: 41.5868353,
    longitude: -93.6249593
}

const startLocation = atom({
    latitude: 41.5868353,
    longitude: -93.6249593,
    latitudeDelta: 5,
    longitudeDelta: 5
});

export const readLocation = atom((get) => get(startLocation));

export const readLatLon = atom((get) => ({
    latitude: get(startLocation).latitude,
    longitude: get(startLocation).longitude
}));

export const writeLocation = atom(null, (get, set, update: any) => {
    set(startLocation, {
        ...update,
    })
});
