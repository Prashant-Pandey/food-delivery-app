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
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle} from "../../navbarStyles";


import { gradientColors } from "../../Constants/GradientColors";
import styles from '../../Constants/StyleConstants';

const mapIconColor = '#222222';

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
                    case 'Menu':
                    this.props.navigator.resetTo({
                        screen: 'Menu', title: 'Restraunt Name', 
                        navigatorStyle: coloredNavigationStyle,
                        animated: true, animationType: 'fade'
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
            <LinearGradient colors={gradientColors} style={[styles.fullScreen]}>
            <ScrollView style={styles.container}>
                {/*map your array of data here*/}
                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'} style={styles.paddingBottom10}>
                    <View style={styles.marginTop24px}>
                    <Card
                  containerStyle={styles.dealsCardContainerStyle}>
                  {/*put image uri here*/}
                <Image  source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}}
                    style={styles.dealsCardImage} />
                    <View
                        style={[styles.contentInRow,
                            styles.centerVertically, styles.justifyContentSpaceBetween, styles.paddingTop5]}>
                        <View style={[styles.contentInRow, styles.centerVertically, styles.paddingHorizontal10]}>
                            <View style={styles.marginLeft10}>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                {/*put restaurant here*/}
                                    Chchabra's Pure Veg
                                </Text>
                                <Text style={styles.dealsCardLocation}>
                                {/*put location here*/}
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
                            <Text style={styles.dealsCardDiscount}>
                            {/*put discount percent or amount here*/}
                                40%
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[styles.contentInRow, styles.centerVertically, styles.paddingTop10, styles.paddingHorizontal10]}>
                        <Text style={[styles.fontFamilyRoboto, styles.textAlignJustify]}>
                        {/*put description here*/}
                            a contagious disease that affects the skin, mucous membranes, and nerves, causing discoloration and lumps on the skin and, in severe cases, disfigurement and deformities. Leprosy is now mainly confined to tropical Africa and Asia.
                        </Text>
                    </View>
                    <View style={[styles.paddingTop10, { paddingBottom:5, paddingHorizontal: 10}, styles.contentInRow, styles.centerVertically]}>
                        <Icon name = 'map-pin' size = {16}
                              color={mapIconColor} />
                        <Text style={[styles.dealsCardLocationStyle, styles.condensedFonts]}>
                            {/*put location here*/}
                            LOS ANGELES, CA
                        </Text>
                    </View>
    </Card>
                    </View>
                </TouchableHighlight>

            </ScrollView>
            </LinearGradient>
        );
    }
}

