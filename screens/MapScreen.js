import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker, Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import { MainLayout } from '../components/layouts/MainLayout';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin, selectRoutes } from '../sclices/navSlice';
import SearchLocation from '../components/SearchLocation';
import SearchResults from '../components/SearchResults';
import { TravelCard } from '../components/TravelCard';


// sk.eyJ1IjoibXJ3aWx2IiwiYSI6ImNscHB4ejBwejAybnEya2s4ZjV1Z2NnZjIifQ.uN1cXDshYEetXTCk69CnEQ

const MapScreen = () => {

  const { coordinates: coordinatesOrigin } = useSelector(selectOrigin);
  const { coordinates: coordinatesDestination } = useSelector(selectDestination);

  const routeCoordinates = useSelector(selectRoutes);

  const markerDestination = {
    latitude: coordinatesDestination[1],
    longitude: coordinatesDestination[0],
  }


  const [cors, setCors] = useState({
    latitude: coordinatesOrigin[1],
    longitude: coordinatesOrigin[0],
  });

  useEffect(() => {
    console.log(routeCoordinates);
  }, [routeCoordinates])



  return (

    <MainLayout>
      <View style={[tw`mt-5`, styles.page]}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: cors.latitude,
            longitude: cors.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.0004,
          }}
        >
          <Marker coordinate={cors} />
          {
            routeCoordinates.length > 0 ? <Polyline coordinates={routeCoordinates} strokeWidth={2} strokeColor="blue" /> : null
          }
          {
            markerDestination.latitude && (
              <Marker coordinate={markerDestination} />
            )

          }
        </MapView>

        <View
          style={{
            marginTop: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TravelCard /> 
        </View>
        <View style={{
          position: 'absolute',
          marginTop: 15,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
          <SearchLocation />
          <SearchResults isDestination={true} />
        </View>
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
    height: '70%',
    width: '100%',
  }
})
