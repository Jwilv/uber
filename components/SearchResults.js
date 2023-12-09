import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLocation from './CardLocation'

export default function SearchResults() {
    return (
        <View style={styles.container}>
            <CardLocation location='Location 1' />
            <CardLocation location='Location 2' />
            <CardLocation />
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