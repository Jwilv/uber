import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ExitButton = ({ onPress }) => {

    return (
        <View style={{
            position: 'absolute',
            width: 40,
            height: 30,
            overflow: 'hidden',
            backgroundColor: 'black',
            display: 'flex',
            paddingLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10
        }}>
            <TouchableOpacity>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    onPress={onPress}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})