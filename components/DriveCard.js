import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

const DriveCard = ({title, desc, uri}) => {
    return (
        <View
            style={{
                width: '60%',
                height: '6%',
                backgroundColor: 'white',
                margin: 8,
            }}
        >

            <TouchableOpacity>

                <Text
                    style={{
                        fontSize: 18,
                        left: 110,
                        position: 'absolute',
                        zIndex: 10,
                    }}
                >{title}</Text>

                <Text
                    style={{
                        fontSize: 12,
                        left: 110,
                        top: 22,
                        position: 'absolute',
                        zIndex: 10,
                    }}
                >{desc}</Text>


                <Image
                    style={{
                        width: 120,
                        height: 110,
                        top: -30,
                        zIndex: 15,
                        objectFit: 'contain',
                    }}
                    source={{
                        uri: uri,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default DriveCard