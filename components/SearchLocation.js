import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function SearchLocation() {
    return (
        <View>
            <TextInput
                placeholder='Search for Location'
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
        width: 330,
        fontSize: 18,
    }
})