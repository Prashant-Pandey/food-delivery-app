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
import {coloredNavigationStyle} from "../../navbarStyles";
import styles from '../../Constants/StyleConstants';


const cartIconColor = '#1D2029';

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
                <View>
                    <Card containerStyle={{borderWidth:0}}>
                        <View style={[styles.contentInRow, styles.justifyContentSpaceBetween, styles.paddingBottom16]}>
                            <View>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                    American Sushi Salomen
                                </Text>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize: 12}]}>
                                    Avengers EastWood
                                </Text>
                            </View>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, styles.fontSize24, styles.cartProductCostColor]}>$500</Text>
                        </View>
                        <View style={[styles.contentInRow, styles.justifyContentSpaceBetween, styles.paddingWithLightBorder]}>
                            <View style={[styles.contentInRow, {justifyContent:'space-around'}, styles.centerVertically]}>
                                <Button
                                    onPress={
                                        ()=>{this.setState({itemCount:this.state.itemCount-1});this.forceUpdate();}
                                    }
                                    textStyle={styles.white18pxfont}
                                    containerStyle={[styles.cartAddSubBtnContainerStyle]}
                                    buttonStyle={[styles.cartAddSubBtnStyling, styles.paddingRight3]}
                                    icon={<FeatherIcon name={'minus'} size={24} color={cartIconColor}/>} 
                                    title={''}/>
                                    
                                    <Text style={[styles.fontSize24, {paddingHorizontal: 20}]}>
                                        {this.state.itemCount}
                                    </Text>
                                <Button
                                    onPress={
                                        ()=>{this.setState({itemCount:this.state.itemCount+1});this.forceUpdate();}
                                    }
                                    textStyle={styles.white18pxfont}
                                    containerStyle={[styles.cartAddSubBtnContainerStyle]}
                                    buttonStyle={[styles.cartAddSubBtnStyling, styles.marginLeftNeg3]}
                                    icon={<MaterialIcons name={'add'} size={24} color={cartIconColor}/>} 
                                    title={''}/>
                                
                            </View>
                            <View style={[styles.centerVertically, styles.centerHorizontally]}>
                                <MaterialIcons name={'delete-sweep'} size={24} color={cartIconColor}/> 
                            </View>
                        </View>
                    </Card>
                </View>
                <View>
                    <Card containerStyle={{borderWidth:0}}>
                        <View style={[styles.contentInRow, styles.justifyContentSpaceBetween, styles.paddingBottom16]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Subtotal</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>
                                {/* add sub total here */}
                                $500
                            </Text>
                        </View>
                        <View style={[styles.contentInRow, styles.justifyContentSpaceBetween,styles.paddingWithLightBorder]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Tax</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>
                                {/* add tax here */}
                                $3.45
                            </Text>
                        </View>
                        <View style={[styles.contentInRow, styles.justifyContentSpaceBetween, styles.paddingWithLightBorder]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Total</Text>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:18,}]}>
                                {/* add net cost here */}
                                $503.45
                            </Text>
                    </View>
                    </Card>
                </View>
                <View style={[styles.centerHorizontally, styles.centerVertically, {marginTop: 10},]}>
                <Button
                    onPress={this._goToCheckout}
                    titleStyle={styles.goToCheckoutBtnTitleStyle}
                    containerStyle={[styles.centerHorizontally, styles.centerVertically]}
                    buttonStyle={[styles.goToCheckoutBtnStyle]}
                    title={'CHECKOUT'}/>
                </View>
            </ScrollView>
        )
    }
}

