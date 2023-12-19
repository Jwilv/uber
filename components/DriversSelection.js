import { View, Text } from 'react-native'
import React from 'react'
import DriveCard from './DriveCard'

const drivers = [
    {
        title: 'Black',
        desc: 'The premium Uber service',
        uri: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png'
    },
    {
        title: 'Uber Van',
        desc: 'The Van Uber service',
        uri: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png'
    },
    {
        title: 'UberX',
        desc: 'The UberX service',
        uri: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1682350380/assets/2f/29d010-64eb-47ac-b6bb-97503a838259/original/UberX-%281%29.png'
    },
]

export default function DriversSelection() {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >

            {
                drivers.map((item, index) => (
                    <DriveCard
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        uri={item.uri}
                    />
                ))}
        </View>
    )
}