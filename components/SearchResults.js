import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLocation from './CardLocation'
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuOrigin, setMenuOriginStatus } from '../sclices/uiSlice';
import { setDestination, setOrigin } from '../sclices/navSlice';

export default function SearchResults({ isDestination = false }) {

    const locations = useSelector(state => state.searchGeo.locations);

    const menuOrigin = useSelector(selectMenuOrigin)

    const dispatch = useDispatch();

    const handlePress = (location) => {
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