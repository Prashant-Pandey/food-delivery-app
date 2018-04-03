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
    TouchableHighlight
} from 'react-native';
import {Card, Button, Badge, Text} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../navbarStyles";



const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

export default class Cart extends Component {
    constructor() {
        super();
        this._goToCheckout = this._goToCheckout.bind(this);
        this.state = {
            itemCount: 1
        }
    }

    _goToCheckout(){
        this.props.navigator.showModal({
            screen: 'Checkout', // unique ID registered with Navigation.registerScreen
            title: 'CHECKOUT NOW', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    componentWillMount() {
        // adding data to our list
    }

    render() {
        return(
            <ScrollView>
                <View style={[styles.container]}>
                    <Card containerStyle={{borderWidth:0}}>
                        <View style={[styles.contentInRow, {justifyContent:'space-between', paddingBottom: 16}]}>
                            <View>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>American Sushi Salomen</Text>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize: 12}]}>Avengers EastWood</Text>
                            </View>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:24, color: '#0fb14a'}]}>$500</Text>
                        </View>
                        <View style={[styles.contentInRow, {justifyContent:'space-between', paddingTop:16, paddingBottom:8, borderTopWidth:1, borderTopColor:'#d8dde1'}]}>
                            <View style={[styles.contentInRow, {justifyContent:'space-around'}, styles.centerVertically]}>
                                <TouchableHighlight underlayColor={'transparent'} 
                                    onPress={()=>{this.setState({itemCount:this.state.itemCount-1});this.forceUpdate();}}>
                                    <View style={[styles.cartAddSubBtnStyling, styles.centerVertically, styles.centerHorizontally]}>
                                    <FeatherIcon name={'minus'} size={24} color={'#1D2029'}/> 
                                    </View> 
                                </TouchableHighlight>
                                <Text style={{fontSize:24, paddingHorizontal: 20}}>{this.state.itemCount}</Text>
                                <TouchableHighlight underlayColor={'transparent'} 
                                    onPress={()=>{this.setState({itemCount:this.state.itemCount+1});this.forceUpdate();}}>
                                    <View style={[styles.cartAddSubBtnStyling, styles.centerVertically, styles.centerHorizontally]}>
                                    <MaterialIcons name={'add'} size={24} color={'#1D2029'}/>
                                </View>
                                </TouchableHighlight>
                                
                            </View>
                            <View style={[styles.centerVertically, styles.centerHorizontally]}>
                            <MaterialIcons name={'delete-sweep'} size={24} color={'#1D2029'}/> 
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={[styles.container]}>
                    <Card containerStyle={{borderWidth:0}}>
                        <View style={[styles.contentInRow, {justifyContent:'space-between', paddingBottom: 16}]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Subtotal</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>$500</Text>
                        </View>
                        <View style={[styles.contentInRow, {justifyContent:'space-between', paddingTop:16, paddingBottom:8, borderTopWidth:1, borderTopColor:'#d8dde1'}]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Tax</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>$3.45</Text>
                        </View>
                        <View style={[styles.contentInRow, {justifyContent:'space-between', paddingTop:16, paddingBottom:8, borderTopWidth:1, borderTopColor:'#d8dde1'}]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Total</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>$503.45</Text>
                    </View>
                    </Card>
                </View>
                <View style={[styles.centerHorizontally, styles.centerVertically, {marginTop: 10},]}>
                <TouchableHighlight underlayColor={'#F57F17'} 
                onPress={this._goToCheckout}
                style={[styles.centerHorizontally, styles.centerVertically,{ backgroundColor: '#F57F17',
                width: viewWidth-40, alignContent:'center',
                height: 50, borderRadius: 25}]}>
                <View style={[styles.centerVertically, styles.contentInRow, styles.centerHorizontally]}>
                    <Text style={{color: '#fff', fontSize: 20, fontFamily: 'sans-serif-medium', paddingLeft:10}}>GO TO CHECKOUT</Text>
                </View>
                </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    cartAddSubBtnStyling:{height:30, width:30, borderRadius: 15, borderWidth:1},
    numberingOrders:{
        borderColor: '#c7c8c3',
        borderWidth: 0,
        borderRadius: 0,
        width: 20,
        height: 20,
        shadowColor: '#c7c8c3',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 30,
        elevation: 1,
    },
    productNameStyle: {
        fontWeight: '500'
    },
    fontFamilyRoboto: {
        fontFamily: 'Roboto'
    },
    orderInfoTitleStyle:{color: '#e67e22', fontWeight: '100'}
});