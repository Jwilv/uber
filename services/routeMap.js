import polyline from '@mapbox/polyline';

export const getRoute = async (origin, destination) => {

    const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}`
    );

    const data = await response.json();

    console.log(data.routes[0].duration);
    console.log(data.routes[0].distance);

    const routeDecoded = polyline.decode(data.routes[0].geometry);

    return routeDecoded.map((coordinate) => ({
        latitude: coordinate[0],
        longitude: coordinate[1],
    }))
}