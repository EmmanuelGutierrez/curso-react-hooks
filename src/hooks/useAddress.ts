import axios from 'axios';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { config } from '../config';
// eslint-disable-next-line @typescript-eslint/ban-types

const { locationIQ } = config;

export const useAddress = (address: string) => {
    const [map, setMap] = useState<LatLngExpression | undefined>(undefined);
    const API = `https://us1.locationiq.com/v1/search.php?key=${locationIQ.api_key}=${address}&limit=1&accept-language=es&format=json`;
    useEffect(() => {
        const func = async () => {
            const res = await axios(API);
            let location: LatLngExpression | undefined = undefined;
            if (res.data[0].lat && res.data[0].lon) {
                location = [parseInt(res.data[0].lat), parseInt(res.data[0].lon)];
                console.log(location);
                console.log(API);
            }
            setMap(location);
        };
        func();
    }, []);
    return map;
};
