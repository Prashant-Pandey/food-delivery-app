import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';



import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAEcO5pc5yk8CNgAUDQtgIminvFCXAY_8Q';
const viewWidth = Dimensions.get('window').width;
const initialRegion = {
    latitude: 37.3318456, longitude: -122.0296002,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

const mapStyle=[
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];


const navBarThemeColor = '#FFB300', fabThemeColor = '#FFCA28';

export default class TrackOrder extends Component {
    
    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../../images/back.png'), // for icon button, provide the local image asset name
            id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };


    constructor(props) {
        super(props);
        this._goToRestaurant = this._goToRestaurant.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
          if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.dismissAllModals();
          }
        }
      }

    _goToRestaurant(){
       
    }

    componentDidMount(){
    }

    render() {
        return (
            <View style={{flex:1}}>
            <View style={[styles.trackOrderHeaderColor, styles.contentInRow,{justifyContent:'space-around', paddingVertical: 12}]}>
                <View style={[{width: 150}]}>
                <View style={[styles.contentInRow]}>
                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, styles.whiteFont]}>
                        Order ID :&nbsp;
                    </Text>
                    <Text style={[styles.whiteFont]}>232376776553</Text>
                </View>
                <Text style={[styles.fontFamilyRoboto,{fontWeight: '100', flexWrap: 'wrap'}, styles.whiteFont]}>
                    Chhabras pure veg food
                </Text>
                </View>
                <TouchableHighlight
                style={[{height:30, width:30, borderRadius: 15, backgroundColor:fabThemeColor, justifyContent: 'center',alignItems: 'center',}]}
                 underlayColor={fabThemeColor} onPress={this._doCall}>
                    <View>
                        <FeatherIcon name={'phone-call'} size={16} color={'white'} />
                    </View>
                </TouchableHighlight>
            </View>
                <MapView style={{flex:1}}
                    customMapStyle={mapStyle}
                    region={initialRegion}>
                    <Marker
                        coordinate={{latitude: 37.3318456,
                            longitude: -122.0296002,}}
                        onPress={this._goToRestaurant}
                        title={'new home'}
                        description={'sweet home'}
                    />

                    <Marker
                        coordinate={{latitude: 37.771707,
                            longitude:  -122.4053769,}}
                        onPress={this._goToRestaurant}
                        title={'home'}
                        description={'sweet home'}
                    />
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        strokeWidth={7}
                        strokeColor="red"
                        apikey={GOOGLE_MAPS_APIKEY}/>
                </MapView>
                <View style={styles.mapBottomOverlay}>
                <Card containerStyle={[{backgroundColor:'#fff', borderRadius: 5, borderWidth:0}]}>
                <View style={[styles.contentInRow, styles.centerVertically, styles.centerHorizontally]}>
                <View style={[{paddingVertical: 8, width: 150}]}>
                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                    Delivery Address : 
                </Text>
                <Text style={{fontFamily: 'ArialHebrew', color: '#757575', fontWeight: '100', flexWrap: 'wrap'}}>
                    E-74 Name Appartment, Near Bharadwaj Petrol Pump, Malviya Nagar
                </Text>
                </View>
                <View style={[styles.centerVertically]}>
                    <Text style={[styles.trackOrderSmallText]}>{'On your doorsteps in'.toUpperCase()}</Text>
                    <Text style={[styles.trackOrderLargeText]}>15</Text>
                    <Text style={[styles.trackOrderSmallText, styles.trackOrderSmallTextDiffFont]}>{'minutes'.toUpperCase()}</Text>
                </View>
                </View>
                </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdffff'
    },
    contentInRow:{
        flexDirection: 'row',
    },
    centerVertically:{
        alignItems: 'center',
    },
    centerHorizontally:{
        justifyContent: 'center',
    },
    mapBottomOverlay:{height: 150, position:'absolute', bottom:0, width: viewWidth},
    productNameStyle: {
        fontWeight: '500'
    },
    fontFamilyRoboto: {
        fontFamily: 'ArialHebrew'
    },
    trackOrderSmallText:{
        fontFamily:'Academy Engraved LET',
        fontSize: 12,
        paddingBottom: -10,
        padding:0,
        margin: 0,
    },
    trackOrderLargeText:{
        fontFamily:'ArialHebrew',
        fontSize: 42,
        paddingVertical: 0,
        marginVertical: 0,
        lineHeight: 45,
        color:'#9EC86E'
    },
    trackOrderSmallTextDiffFont:{
        fontSize: 16
    },
    trackOrderHeaderColor:{
        backgroundColor: navBarThemeColor
    },
    whiteFont:{
        color:'#fff'
    }
});



{/*
 <Card
    image={{
    uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'
  }}>
    <Text style={{
      marginBottom: 10
    }}>
      The idea with React Native Elements is more about component structure than
      actual design.
    </Text>
</Card>
*/}
