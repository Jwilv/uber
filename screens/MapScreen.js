import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Platform } from 'react-native'
import MapView from 'react-native-maps';

const MapScreen = () => {

  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.androidSafeArea]}>
      <View style={[tw`mt-5`, styles.page]}>
        <MapView 
        style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  page: {
    flex: 1,
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    height: '60%',
    width: '100%',
  }
})
