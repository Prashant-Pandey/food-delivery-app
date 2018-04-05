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
    Dimensions
} from 'react-native';
import {Card, Badge, Text, Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../navbarStyles";



const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

export default class Cart extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../images/back.png'), // for icon button, provide the local image asset name
            id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };


    constructor(props) {
        super(props);
        this._goToCheckout = this._goToCheckout.bind(this);
        this.state = {
            itemCount: 1
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
          if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.dismissModal({
                animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
              });
          }
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
                                <Button
                                onPress={()=>{this.setState({itemCount:this.state.itemCount-1});this.forceUpdate();}}
                                textStyle={styles.white18pxfont}
                                containerStyle={[styles.cartAddSubBtnStyling]}
                                buttonStyle={[{elevation: 0, paddingTop: 1, paddingRight:2}]}
                                icon={
                                    <FeatherIcon name={'minus'} size={24} color={'#1D2029'}/>
                                } 
                                title={''}/>
                                <Text style={{fontSize:24, paddingHorizontal: 20}}>{this.state.itemCount}</Text>
                                <Button
                                onPress={()=>{this.setState({itemCount:this.state.itemCount+1});this.forceUpdate();}}
                                textStyle={styles.white18pxfont}
                                containerStyle={[styles.cartAddSubBtnStyling]}
                                buttonStyle={[{elevation: 0, paddingTop: 1, marginLeft:-3}]}
                                icon={
                                    <MaterialIcons name={'add'} size={24} color={'#1D2029'}/>
                                } 
                                title={''}/>
                                
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
                <Button
                    onPress={this._goToCheckout}
                    titleStyle={{color: '#fff', fontSize: 20, fontFamily: 'AvenirNext-Bold', paddingLeft:10}}
                    containerStyle={[styles.centerHorizontally, styles.centerVertically]}
                    buttonStyle={[{elevation: 0, backgroundColor: '#F57F17',
                    width: viewWidth-40, alignContent:'center',
                    height: 50, borderRadius: 25}]}
                    title={'CHECKOUT'}/>
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
    cartAddSubBtnStyling:{height:30, width:30, borderRadius: 15, borderWidth:1, backgroundColor: 'transparent'},
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
        fontFamily: 'AcademyEngravedLetPlain'
    },
    orderInfoTitleStyle:{color: '#e67e22', fontWeight: '100'}
});
