import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export const MainLayout = (props) => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.androidSafeArea]}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})