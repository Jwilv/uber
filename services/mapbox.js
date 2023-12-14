import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';


const mapboxClient = MapboxGeocoding({ accessToken: 'sk.eyJ1IjoibXJ3aWx2IiwiYSI6ImNscHB4ejBwejAybnEya2s4ZjV1Z2NnZjIifQ.uN1cXDshYEetXTCk69CnEQ' });

export const getLocationByName = async (location = '') => {

    const response = await mapboxClient.forwardGeocode({
        query: location,
        types: ['place', 'address', 'neighborhood']
    }).send();

    return response.body.features.map(
        ({ place_name, text, center, id }) => ({
                place_name,
                text,
                center,
                id
        })
    );

}
