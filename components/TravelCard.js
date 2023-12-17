import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';

export class TravelCard extends Component {
    render() {
        return (
            <View
                style={{
                    width: '100%',
                    height: '100%',
                }}>

                <View style={{
                    width: '30%',
                    height: '100%',
                }}>


                    <Entypo
                        style={{
                            position: 'relative',
                            top: 20,
                            left: 44,
                            zIndex: 10,
                        }}
                        name="location-pin"
                        size={40}
                        color="#3559E0"
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            position: 'relative',
                            top: 55,
                            transform: [{ rotate: '-90deg' }],
                            color: 'lightgray',
                        }}
                    >
                        - - - - - - - - -
                    </Text>
                    <Entypo
                        style={{
                            position: 'relative',
                            top: 107,
                            left: 46,
                            zIndex: 10,
                        }}
                        name="location"
                        size={35}
                        color="lightgray"
                    />



                </View>


            </View>
        )
    }
}

export default TravelCard