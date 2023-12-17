import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../sclices/navSlice';

export const TravelCard = () => {

    const { location: locationOrigin } = useSelector(selectOrigin);
    const { location: locationDestination } = useSelector(selectDestination);

    const originName = locationOrigin.split(' ').slice(0, 3).join(' ');
    const destinationName = locationDestination.split(' ').slice(0, 5).join(' ');

    return (

        <View style={{
            width: '100%',
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
            >
                <Text style={{ color: 'black', fontSize: 15 }}>{originName}</Text>
            </Entypo>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    position: 'relative',
                    top: -90,
                    left: -143,
                    transform: [{ rotate: '-90deg' }],
                    color: locationDestination ? "#3559E0" : "#D3D3D3",
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
                color={locationDestination ? "#3559E0" : "#D3D3D3"}
            >
                {
                    locationDestination
                    &&
                    <Text style={{ color: 'black', fontSize: 15 }}>&nbsp;{destinationName}</Text>
                }
            </Entypo>

        </View>
    )
}

export default TravelCard