import React from 'react'
import { compose, withProps, withState, withHandlers } from 'recompose'
import { FaAnchor } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBs9VBP6JJN7eVW25f9KEVYO5JNdMNZ7to&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <Box h={{ xl: 'full' }} />,
    containerElement: <Box h={{ xl: 125 }} pos='relative' />,
    mapElement: <Box h={{ xl: 'full' }} />
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          <FaAnchor /> Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
))

export default MapWithControlledZoom
