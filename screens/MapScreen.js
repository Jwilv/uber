import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Platform } from 'react-native'
import MapView from 'react-native-maps';
import polyline from '@mapbox/polyline';

const MapScreen = () => {

  const decodedGeometry = polyline.decode("sxxwFfkpbMmmX`np@knE~ifDat[jc{@tfPhc`GuvPz`i@fo@vk|AjlWra}@{uNf_c@bdKjzd@ab_@xvyA_lKpb}B`_@|}|FnpMfu|@giXn_^}kAv`sBktWzmnAz|IlxqB_vF|wdAook@~whCajFplcFazWni|@{BfecGxbc@x}eBqiAl~jCpqQzi`Bj{`@gg@bznA~y{A`en@teSpqWjn`@wvf@rdoE");
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
