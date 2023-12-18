import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLocation from './CardLocation'
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuOrigin, setMenuOriginStatus } from '../sclices/uiSlice';
import { selectOrigin, setDestination, setOrigin, setRoutes, setTravel } from '../sclices/navSlice';
import { getRoute } from '../services/routeMap';
import { travelDataAdapter } from '../adapters/travelDataAdapter';

export default function SearchResults({ isDestination = false }) {

    const locations = useSelector(state => state.searchGeo.locations);

    const menuOrigin = useSelector(selectMenuOrigin);

    const origin = useSelector(selectOrigin);

    const dispatch = useDispatch();

    const handlePress = async(location) => {
        isDestination
            ?
            dispatch(setDestination({
                location: location.place_name,
                coordinates: location.center
            }))
            :
            dispatch(setOrigin({
                location: location.place_name,
                coordinates: location.center
            }))

            if (isDestination) {
                const { navegation, distance, duration } = await getRoute(origin.coordinates, location.center);
                dispatch(setTravel(travelDataAdapter(duration, distance)));
                dispatch(setRoutes(navegation)); 
            }

            dispatch(setMenuOriginStatus(false));
    }

    return (
        <View style={styles.container}>
            {
                locations.length !== 0 && menuOrigin
                    ?
                    locations.map((location) => (
                        <CardLocation key={location.id} handlePress={() => handlePress(location)} location={location.place_name} />
                    ))
                    :
                    null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginBottom: 10,
        width: 330,
        padding: 5,
    },

})