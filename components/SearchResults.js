import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function SearchResults() {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity >
                    <Text style={styles.item}>Search Results, no results, no results</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>

            <View>
                <TouchableOpacity >
                    <Text style={styles.item}>Search Results, no results, no results</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>

            <View>
                <TouchableOpacity >
                    <Text style={styles.item}>Search Results, no results, no results</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>

            <View>
                <TouchableOpacity >
                    <Text style={styles.item}>Search Results, no results, no results</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>
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