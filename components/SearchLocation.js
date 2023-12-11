import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SearchResults from './SearchResults'
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';


const mapboxClient = MapboxGeocoding({ accessToken: 'sk.eyJ1IjoibXJ3aWx2IiwiYSI6ImNscHB4ejBwejAybnEya2s4ZjV1Z2NnZjIifQ.uN1cXDshYEetXTCk69CnEQ' });

export default function SearchLocation() {

    const [inputValue, setInputValue] = useState('')

    const response = async () => {
        const response = await mapboxClient.forwardGeocode({
            query: inputValue,
            types: ['place'],
        }).send();

        console.log('result :');
        console.log(response.body.features[0].geometry);
    }



    const handleSubmit = () => {
        response()
    }

    const handleChange = (e) => {
        setInputValue(e.nativeEvent.text);
        console.log(e.nativeEvent.text);
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