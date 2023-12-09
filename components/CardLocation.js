import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardLocation = ({ location = 'Location Name' }) => {
    return (
        <View>
            <TouchableOpacity >
                <Text style={styles.item}>{location}</Text>
            </TouchableOpacity>
            <View style={styles.line} />
        </View>
    )
}

export default CardLocation

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#adadad',
        marginBottom: 5,
        width: '100%',
        alignSelf: 'start',
    },
    item: {
        fontSize: 15,
        padding: 5,
        marginBottom: 5,
        alignSelf: 'start',
    }
})