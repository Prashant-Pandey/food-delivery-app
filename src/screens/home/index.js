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

import {Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import Input from '../../Components/Input';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../navbarStyles";
import {Navigation} from "react-native-navigation";

import styles from '../../Constants/StyleConstants';
import { gradientColors } from "../../Constants/GradientColors";
const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = viewWidth-50;


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        //   longitude: '', latitude: '',
        //   json:''
            search:''
        };

        this._goToSearch = this._goToSearch.bind(this);
        this._goToExplore = this._goToExplore.bind(this);
        this._goToCart = this._goToCart.bind(this);
    }

    _goToCart() {
        this.props.navigator.showModal({
            screen: 'Cart', // unique ID registered with Navigation.registerScreen
            title: 'ORDER CART', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    _goToSearch() {
        Keyboard.dismiss();
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
            title: 'Sushi Title', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
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
            <Text style={[styles.textAlignCenter, styles.theme24pxfont, styles.condensedFonts, styles.marginTop24px]}>LOS ANGELES,
                CA</Text>
        </View>

        <TouchableHighlight
        style={[styles.homeCartBtn]}
         underlayColor={fabThemeColor} onPress={this._goToCart}>
            <View>
                <FeatherIcon name={'shopping-cart'} size={24} color={'white'} />
            </View>
        </TouchableHighlight>

        <Button
            icon={<FeatherIcon name='search' size={15}
                               color='white'/>}
            onPress={this._goToSearch}
            textStyle={styles.white18pxfont}
            buttonStyle={[styles.homeBtnStyle, styles.marginTop24px, styles.marginBottom24px]}
            title='SEARCH'/>

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

