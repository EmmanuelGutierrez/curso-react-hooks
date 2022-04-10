import { LatLngExpression } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const style = {
    width: '100%',
    height: '400px',
};

interface IMapProps {
    location: LatLngExpression | undefined;
}
const Map = (props: IMapProps) => {
    const { location } = props;
    /* const position: LatLngExpression = [20, -100]; */
    const [loc, setLoc] = useState<LatLngExpression | undefined>(undefined);
    useEffect(() => {
        setLoc(location);
    }, [location]);

    return (
        <div>
            {loc && (
                <MapContainer center={location} zoom={9} style={style}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {location && <Marker position={location} />}
                </MapContainer>
            )}
        </div>
    );
};

export { Map };
