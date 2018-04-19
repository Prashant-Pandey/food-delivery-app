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
    ScrollView,
    Dimensions,
    PermissionsAndroid, Keyboard, TouchableHighlight
} from 'react-native';

import {Text} from 'react-native-elements';
import Button from "../../Components/Button";
import Icon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import Input from '../../Components/Input';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton, backNavigatorButton} from "../../navbarStyles";
import {Navigation} from "react-native-navigation";

import styles from '../../Constants/StyleConstants';
import { gradientColors } from "../../Constants/GradientColors";
const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = viewWidth-50;


export default class Home extends Component {

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
        this.state = {
            search:''
        };

        this._goToSearch = this._goToSearch.bind(this);
        this._goToExplore = this._goToExplore.bind(this);
        this._goToCart = this._goToCart.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    } 
   // for side drawer navigation block
    onNavigatorEvent(event) {
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
                this.props.navigator.resetTo({screen: 'Menu', title: 'Restraunt Name',
                    
                    navigatorStyle: coloredNavigationStyle,
                    animated: true, animationType: 'fade'});
                break;
                default:
                    break;
            }
        }

        // opening side menu
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'sideMenu') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
          }
      }

    _goToCart() {
        this.props.navigator.showModal({
            screen: 'Cart', // unique ID registered with Navigation.registerScreen
            title: 'ORDER CART', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            buttonStyle:backNavigatorButton,
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    _goToSearch() {
        Navigation.showModal({
            screen: 'Search', // unique ID registered with Navigation.registerScreen
            title: 'Search', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    _goToExplore(){
        Keyboard.dismiss();
        this.props.navigator.showModal({
            screen: 'Explore', // unique ID registered with Navigation.registerScreen
            title: 'Explore Nearby Places', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    componentWillMount() {

    }

    render() {
        return (
            <LinearGradient colors={gradientColors} style={styles.fullScreen}>
            <ScrollView>
            <Image
            source={require('../../images/headerImg.jpg')}
            style={styles.homeHeaderImage} />

            <View style={{marginTop: 10, backgroundColor: "transparent"}}>
                <Icon name='location' size={30}
                    color='#FFA000' style={[styles.textAlignCenter, styles.marginTop24px]}/>
                <Text 
                style={[styles.textAlignCenter, styles.theme24pxfont, styles.condensedFonts, styles.marginTop24px]}>
                 {/* show location here */}
                    LOS ANGELES, CA
                </Text>
            </View>
            {/* go to shopping cart here */}
            <TouchableHighlight
            style={[styles.homeCartBtn]}
            underlayColor={fabThemeColor} onPress={this._goToCart}>
                <View>
                    <FeatherIcon name={'shopping-cart'} size={24} color={'white'} />
                </View>
            </TouchableHighlight>
            {/* go to dish search page here */}
            <Button
                icon={<FeatherIcon name='search' size={15}
                                color='white'/>}
                onPress={this._goToSearch}
                textStyle={styles.white18pxfont}
                buttonStyle={[styles.homeBtnStyle, styles.marginTop24px, styles.marginBottom24px]}
                title='SEARCH'/>
            {/* go to nearby EXPLORE page here */}
            <Button
                icon={< Icon name='map' size={15}
                            color='white'/>}
                onPress={this._goToExplore}
                textStyle={styles.white18pxfont}
                buttonStyle={[styles.homeBtnStyle, styles.marginBottom24px]}
                title='EXPLORE'/>

            </ScrollView>
            
            </LinearGradient>
        );
    }
}

