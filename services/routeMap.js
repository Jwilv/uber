import polyline from '@mapbox/polyline';
import axios from 'axios';

export const getRoute = async (origin, destination) => {

    const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}`
    );

    const data = await response.json();

    const routeDecoded = polyline.decode(data.routes[0].geometry);

    return routeDecoded.map((coordinate) => ({
        latitude: coordinate[0],
        longitude: coordinate[1],
    }))
}