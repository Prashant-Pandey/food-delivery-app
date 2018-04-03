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
            title: 'Search Title', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
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
            <LinearGradient colors={['#FFF8E1', '#F89406', '#FFC107', '#FF9800']} style={{minHeight: viewHeight-24}}>
            <ScrollView>
            <Image
            source={require('../../images/headerImg.jpg')}
            style={{
                height: viewHeight / 2,
                width: viewWidth
            }}/>

        <View style={{marginTop: 10}}>
            <Icon name='location' size={30}
                  color='#fff' style={{textAlign: 'center', marginVertical: 10}}/>
            <Text style={{textAlign: 'center', color:'#fff', fontSize: 24, fontFamily: 'sans-serif-condensed'}}>LOS ANGELES,
                CA</Text>
        </View>

        <TouchableHighlight
        style={[{height:50, width:50, borderRadius: 25, position:'absolute', right: 16,top: (viewHeight/2-30), backgroundColor:fabThemeColor, justifyContent: 'center',alignItems: 'center',}]}
         underlayColor={fabThemeColor} onPress={this._goToCart}>
            <View>
                <FeatherIcon name={'shopping-cart'} size={24} color={'white'} />
            </View>
        </TouchableHighlight>

        <Button
            icon={<FeatherIcon name='search' size={15}
                               color='white'/>}
            onPress={this._goToSearch}
            textStyle={{
                color: '#ffffff',
                fontSize: 18,
            }}
            buttonStyle={{
                backgroundColor: mainBtnThemeColor,
                minWidth: btnWidth,
                height: 50,
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 24, marginBottom: 20,
            }}
            text='SEARCH'/>

        <Button
            icon={< Icon name='map' size={15}
                         color='white'/>}
            onPress={this._goToExplore}
            textStyle={{
                color: '#ffffff',
                fontSize: 18
            }}
            buttonStyle={{
                backgroundColor: mainBtnThemeColor,
                minWidth: btnWidth,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginBottom: 10
            }}
            text='EXPLORE'/>

            </ScrollView>
            
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
});
