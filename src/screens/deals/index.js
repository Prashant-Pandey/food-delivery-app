/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    Dimensions, Keyboard,
} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../navbarStyles";


import styles from '../../Constants/StyleConstants';
import { gradientColors } from "../../Constants/GradientColors";
const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = viewWidth-50;

export default class Deals extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../images/menu.png'), // for icon button, provide the local image asset name
            id: 'sideMenu' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

    constructor(props) {
        super(props);

        this._goToRestaurant = this
            ._goToRestaurant
            .bind(this);
            this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    } 
       
        onNavigatorEvent(event) {
            console.log('event triggered');
            if (event.type === 'DeepLink') {
                switch (event.link) {
                    case 'Home':
                        this.props.navigator.resetTo({
                            screen: 'Home', title: 'Welcome to Foodie',
                            
                            navigatorStyle: navigationStyle,
                            animated: true, animationType: 'fade'
                        });
                        break;
                    case 'Orders':
                    this.props.navigator.resetTo({
                        screen: 'Orders', title: 'Orders Summary',
                        
                        navigatorStyle: coloredNavigationStyle,
                        animated: true, animationType: 'fade'
                    });
                    break;
                    case 'Deals':
                    this.props.navigator.resetTo({
                        screen: 'Deals', title: 'Deals for You',
                        
                        navigatorStyle: coloredNavigationStyle,
                        animated: true, animationType: 'fade'
                    });
                    break;
                    case 'Settings':
                    this.props.navigator.resetTo({
                        screen: 'Settings', title: 'Settings',
                        
                        navigatorStyle: coloredNavigationStyle,
                        animated: true, animationType: 'fade'
                    });
                    break;
                    case 'Login':
                    this.props.navigator.resetTo({
                        screen: 'Login', title: '',
                        navigatorStyle: hideNavigationStyle, animated: true, animationType: 'fade'
                    });
                    break;
                
                    default:
                        break;
                }
            }
            if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
                if (event.id == 'sideMenu') { // this is the same id field from the static navigatorButtons definition
                    this.props.navigator.toggleDrawer({
                        side: 'left',
                        animated: true
                    });
                }
              }
          }

    _goToRestaurant(){
        console.log('_goToRestaurant');
        Keyboard.dismiss();
        this.props.navigator.showModal({
            screen: 'Item', // unique ID registered with Navigation.registerScreen
            title: 'Sushi Title', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    render() {
        return (
            <LinearGradient colors={gradientColors} style={styles.fullScreen}>

            <ScrollView style={styles.container}>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View style={styles.marginTop24px}>
                    <Card
                  containerStyle={{backgroundColor:'#fff', padding:0, borderRadius: 10, borderWidth:0, elevation:5, marginVertical:0}}>
                <Image  source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}}
                    style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, top:0.5, width:'99%', left:'0.5%', height:175}} />
                    <View
                        style={[styles.contentInRow,
                            styles.centerVertically, {
                                justifyContent: 'space-between',
                                paddingTop: 5
                            }]}>
                        <View style={[styles.contentInRow, styles.centerVertically, {paddingHorizontal: 10,}]}>
                            <View style={{marginLeft: 10}}>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                    Chchabra's Pure Veg
                                </Text>
                                <Text style={{fontFamily: 'AppleSDGothicNeo-Medium', color: '#757575', fontWeight: '100'}}>
                                    Malviya Nagar, Jaipur
                                </Text>
                            </View>
                        </View>

                        <View style={styles.twelvePointBurst}>
                            <View style={styles.twelvePointBurstMain} />
                            <View style={styles.twelvePointBurst30} />
                            <View style={styles.twelvePointBurst60} />
                        </View>
                        <View style={[styles.discountValuePosition]}>
                            <Text style={{fontFamily: 'Arial Rounded MT Bold', fontWeight: '500', fontSize: 26, color:'#ffffff'}}>
                                40%
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[styles.contentInRow, styles.centerVertically,{
                            paddingTop: 10, paddingHorizontal: 10
                        }]}>
                        <Text style={[styles.fontFamilyRoboto,{textAlign:'justify'}]}>
                            a contagious disease that affects the skin, mucous membranes, and nerves, causing discoloration and lumps on the skin and, in severe cases, disfigurement and deformities. Leprosy is now mainly confined to tropical Africa and Asia.
                        </Text>
                    </View>
                    <View style={[{paddingTop: 10, paddingBottom:5, paddingHorizontal: 10}, styles.contentInRow, styles.centerVertically]}>
                        <Icon name = 'map-pin' size = {16}
                              color = '#222222' />
                        <Text style={[{textAlign:'center', fontSize: 16, paddingLeft:10}, styles.condensedFonts]}>LOS ANGELES, CA</Text>
                    </View>
    </Card>
                    </View>
                </TouchableHighlight>

            </ScrollView>
            </LinearGradient>
        );
    }
}


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
