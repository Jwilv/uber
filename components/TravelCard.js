import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectDestination } from '../sclices/navSlice';
import { ExitButton } from './ExitButton';
import { useNavigation } from '@react-navigation/native';
import TravelButton from './TravelButton';
import TravelInformation from './TravelInformation';
import DriversSelection from './DriversSelection';

export const TravelCard = () => {

    const [isChoose, setIsChoose] = useState(false)

    const navegation = useNavigation();

    const { location: locationDestination } = useSelector(selectDestination);

    const handleExit = () => {
        if (isChoose) {
            setIsChoose(false);
            return
        }
        navegation.navigate('HomeScreen');
    }


    return (

        <View style={{
            width: '100%',
            height: '100%',
        }}>

            <ExitButton
                onPress={handleExit}
            />

            {
                !isChoose
                    ?
                    <TravelInformation />
                    :
                    <DriversSelection />
            }

            <View
                style={{
                    position: 'absolute',
                    top: 200,
                    left: 0,
                    right: 0,
                }}>
                {
                    !isChoose
                        ?
                        <TravelButton
                            style={{
                                backgroundColor: '#000',
                            }}
                            disabled={locationDestination ? false : true}
                            onPress={() => setIsChoose(true)}
                            text={'Travel'}
                        />
                        :
                        <TravelButton
                            style={{
                                backgroundColor: '#000',
                            }}
                            disabled={locationDestination ? false : true}
                            onPress={() => setIsChoose(true)}
                            text={'Choose'}
                        />
                }
            </View>
        </View>
    )
}

export default TravelCard