import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import { MainLayout } from '../components/layouts/MainLayout';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../sclices/navSlice';


// sk.eyJ1IjoibXJ3aWx2IiwiYSI6ImNscHB4ejBwejAybnEya2s4ZjV1Z2NnZjIifQ.uN1cXDshYEetXTCk69CnEQ

const MapScreen = () => {

  const { coordinates } = useSelector(selectOrigin);

  const [cors, setCors] = useState({
    latitude: coordinates[1],
    longitude: coordinates[0],
  });




  const decodedGeometry = polyline.decode("sxxwFfkpbMmmX`np@knE~ifDat[jc{@tfPhc`GuvPz`i@fo@vk|AjlWra}@{uNf_c@bdKjzd@ab_@xvyA_lKpb}B`_@|}|FnpMfu|@giXn_^}kAv`sBktWzmnAz|IlxqB_vF|wdAook@~whCajFplcFazWni|@{BfecGxbc@x}eBqiAl~jCpqQzi`Bj{`@gg@bznA~y{A`en@teSpqWjn`@wvf@rdoE");
  return (

    <MainLayout>
      <View style={[tw`mt-5`, styles.page]}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: cors.latitude,
            longitude: cors.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.0004,
          }}

        >
          <Marker coordinate={cors} />
        </MapView>
      </View>
    </MainLayout>

  )
}

export default MapScreen

const styles = StyleSheet.create({
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
