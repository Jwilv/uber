import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLocation from './CardLocation'
import { useSelector } from 'react-redux';
import { selectMenuOrigin } from '../sclices/uiSlice';

export default function SearchResults() {

    const locations = useSelector(state => state.searchGeo.locations);

    const menuOrigin = useSelector(selectMenuOrigin)

    return (
        <View style={styles.container}>
            {
                locations.length !== 0 && menuOrigin
                    ?
                    locations.map((location) => (
                        <CardLocation key={location.id} location={location.place_name} coordinates={location.center} />
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