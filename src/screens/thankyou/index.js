/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import GridView from '../../Components/GridView';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../../navbarStyles';
const mainBtnThemeColor = '#FF6F00';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

export default class ThankYou extends Component {

    constructor(){
        super();
        this._goToHome = this._goToHome.bind(this);
    }

    _goToHome(){
        this.props.navigator.dismissAllModals({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
        this
            .props
            .navigator
            .resetTo({
                screen: 'Home', title: 'Welcome to Foodie',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: navigationStyle,
                animated: true, animationType: 'fade'
            });
    }


    render() {
        return (
           <View style={{flex:1}}>
           <Image
                    source={require('../../images/bg.png')}
                    style={{
                    height: viewHeight+100,
                    width: viewWidth,
                    position: 'absolute',
                }}
                resizeMethod={'scale'}
                resizeMode={'cover'}/>
                <TouchableHighlight onPress={this._goToHome}  style={styles.closeBtn}>
                <Icon
                    name='cross'
                    color='#000'
                    size={20}
                />
            </TouchableHighlight>
            <View style={{minHeight:viewHeight-24, justifyContent:'center', alignContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff', fontFamily:'AcademyEngravedLetPlain', fontSize: 32, fontWeight:'500', textAlign:'center'}}>{'Thank You For\nUsing Foodie'.toUpperCase()}</Text>
            <Button
            onPress={this._goToHome}
            textStyle={{
                color: '#ffffff',
                fontSize: 16
            }}
            buttonStyle={{
                backgroundColor: mainBtnThemeColor,
                minWidth: 200,
                marginTop:16,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
            }}
            title='CONTINUE SHOPPING'/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 25,
        flex: 1,
        minHeight:Dimensions.get('window').height,
        alignContent:'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    closeBtn: {position:'absolute', top: 16, right: 0, backgroundColor:'#ffffff', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 5, paddingLeft: 10, paddingRight:20},
});
