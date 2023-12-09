import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchResults from './SearchResults'

export default function SearchLocation() {
    return (
        <View>
            <TextInput
                placeholder='Search for Location'
                style={styles.input}
            />
            <SearchResults /> 
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
        width: 330,
        fontSize: 18,
    }
})