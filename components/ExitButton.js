import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const ExitButton = ({ onPress }) => {

    return (
        <View>
            <Text onPress={onPress}>ExitButton</Text>
        </View>
    )
}

const styles = StyleSheet.create({})