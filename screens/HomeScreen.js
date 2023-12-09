import React from 'react'
import { View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { MainLayout } from '../components/layouts/MainLayout'
import SearchLocation from '../components/SearchLocation'

const HomeScreen = () => {
  return (
    <MainLayout >
      <View style={tw`p-5`}>
        <Image
          style={[
            tw`ml-3`,
            {
              width: 100,
              height: 100,
              resizeMode: 'contain'
            }
          ]}
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" }}
        />
        <SearchLocation />
        <NavOptions />
      </View>
    </MainLayout>
  )
}

export default HomeScreen