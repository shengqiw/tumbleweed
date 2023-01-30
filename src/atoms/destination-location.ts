import { atom, useAtom } from 'jotai';

const destinationLocation = atom({
    latitude: 41.5868353,
    longitude: -93.6249593,
    latitudeDelta: 3,
    longitudeDelta: 3
});

export const readDestination = atom((get) => get(destinationLocation));

export const readDestinationLatLon = atom((get) => ({
    latitude: get(destinationLocation).latitude,
    longitude: get(destinationLocation).longitude
}));

export const writeDestination = atom(null, (get, set, update: any) => {
    set(destinationLocation, {
        ...update,
    })
})