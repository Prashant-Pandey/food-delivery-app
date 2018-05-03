import React, {Component} from 'react';
import {
    View, Dimensions, Text,TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'; 
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

const vw = Dimensions.get('window').width/100, vh = Dimensions.get('window').height/100;

// can be removed just to custom style map
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

export default class Explore extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../images/back.png'), // for icon button, provide the local image asset name
            id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

    constructor(props){
        super(props);
        this.state = {
            initialRegion : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.2,
                longitudeDelta: 0.1,
            },
            restaurants:[{
                location:{
                    latitude:37.78825,
                    longitude:-122.4324
                },
                restaurantName:"Burger King",
                restaurantAddress:"11'N, Way Street, Madison, WI 53703"
            },{
                location:{
                    latitude:37.73825,
                    longitude:-122.4224
                },
                restaurantName:"Burger King",
                restaurantAddress:"11'N, Way Street, Madison, WI 53703"
            },]
        }
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

    //   go to the menu of perticular restaurant
    _goToRestaurant(){
        this.props.navigator.dismissAllModals();
        this.props.navigator.handleDeepLink({ 
            link: 'Menu'
        }); 
    }

    componentWillMount(){
        console.log('map started')
    }

    render() {
        return (
            <View style={{flex:1}}>
                <MapView
                    style={{flex: 1}}
                    customMapStyle={mapStyle}
                    region={this.state.initialRegion}>
                    {this.state.restaurants.map((data, key)=>{
                        return(
                            <Marker
                                coordinate={{
                                    latitude: data.location.latitude,
                                    longitude: data.location.longitude,
                                }}
                                title={data.restaurantName}
                                description={data.restaurantAddress}
                            />
                        );
                    })}
                </MapView>
                <View style={{position:'absolute', bottom:0, width: 100*vw, backgroundColor:'rgba(255,255,255,0.6)', minHeight:10*vh, zIndex: 100, elevation: 100, padding: 10}}>
                    <Card>
                        <View style={{flex: 1, flexDirection:'row', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Text style={{color:'#000', fontWeight:'600', fontSize:16}}>Burger Farms</Text>
                                <Text>11'N, Way Street, Madison, WI 53703</Text>
                            </View>
                            <TouchableHighlight onPress={this._goToRestaurant}>
                                <Icon size={30} name="chevron-right" />
                            </TouchableHighlight>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}
