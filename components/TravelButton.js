import React from 'react'
import { Button } from 'react-native-elements'

const TravelButton = ({ style, onPress, text, disabled }) => {
    return (
        <Button
            buttonStyle={style}
            onPress={onPress}
            title={text}
            disabled={disabled}
        />
    )
}

export default TravelButton