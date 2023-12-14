import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../sclices/navSlice';

const CardLocation = ({ location, coordinates }) => {

    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(setOrigin({
            location,
            coordinates
        }));
    }

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
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