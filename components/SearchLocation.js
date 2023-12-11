import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SearchResults from './SearchResults'
import { getLocationByName } from '../services/mapbox'



export default function SearchLocation() {

    const [inputValue, setInputValue] = useState('')


    const handleSubmit = async() => {
        const data = await getLocationByName('temperley');
    }

    const handleChange = (e) => {
        setInputValue(e.nativeEvent.text);
    }

    return (
        <View>
            <TextInput
                placeholder='Search for Location'
                style={styles.input}
                value={inputValue}
                onChange={handleChange}
                onSubmitEditing={handleSubmit}
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