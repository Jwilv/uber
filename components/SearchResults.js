import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLocation from './CardLocation'
import { useSelector } from 'react-redux';

export default function SearchResults() {

    const locations = useSelector(state => state.searchGeo.locations);

    console.log(locations);

    return (
        <View style={styles.container}>
            {
                locations.length === 0
                ?
                null
                :
                locations.map((location) => (
                    <CardLocation key={location.id} location={location.place_name} coordinates={location.center} />
                ))
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