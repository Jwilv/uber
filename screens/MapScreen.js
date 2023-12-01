import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Platform } from 'react-native'

const MapScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.androidSafeArea]}>
      <View style={tw`p-5`}>
        <Text>MapScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    androidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  })
