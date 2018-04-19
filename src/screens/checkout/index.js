/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, Switch,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import {Card, Button, Badge, Text, Divider} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {hideNavigationStyle} from '../../navbarStyles';
import styles from '../../Constants/StyleConstants';
const paymentSelectedColor = '#A9AAAE';

export default class Checkout extends Component {
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
        this.state={
            isCreditCardSelected : false,
            isPayPalSelected : false,
        }
        this._goToBack = this._goToBack.bind(this);
        this._creditCardSelected = this._creditCardSelected.bind(this);
        this._paypalSelected = this._paypalSelected.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.dismissAllModals();
            }
        }
    }

    _goToBack() {
        this.props.navigator.showModal({
            screen: 'ThankYou', // unique ID registered with Navigation.registerScreen
            title: 'Thank You', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    // function run when CreditCard is selected
    _creditCardSelected(){
        this.setState({isCreditCardSelected: !this.state.isCreditCardSelected, isPayPalSelected:false});this.forceUpdate();
    }

    // function run when PayPal is selected
    _paypalSelected(){
        this.setState({isPayPalSelected: !this.state.isPayPalSelected, isCreditCardSelected:false});this.forceUpdate();
    }

    _onChange(formData){console.log(JSON.stringify(formData, null, " "));}
    _onFocus (field){console.log("focusing", field);}

    componentWillMount() {
        // adding data to our list
    }

    render() {
        return(
            <View style={[styles.flex1,styles.silverColorBackground]}>
            <ScrollView>
                <View style={[styles.checkoutFullContainer, styles.centerVertically,{paddingVertical: 8}]}>
                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Select Payment Method</Text>
                    <Card containerStyle={styles.checkoutPaymentModeChooseCard}>
                        <View style={[styles.contentInRow, styles.justifyContentFlexStart, styles.paddingBottom16, styles.paddingTop16, styles.centerVertically]}>
                            <Button
                                onPress={this._creditCardSelected}
                                titleStyle={styles.paymentMethodChooseBtnTitle}
                                containerStyle={[styles.paymentMethodChooseBtnContainer, {backgroundColor:this.state.isCreditCardSelected?'#7AB43A':'#E0E0E0'}]}
                                title={''}/>

                            <Button
                                onPress={this._creditCardSelected}
                                buttonStyle={[{elevation:0, backgroundColor: 'transparent'}]}
                                icon={ <Octicons name={'credit-card'} color={paymentSelectedColor} size={32} />}
                                titleStyle={[styles.fontFamilyRoboto, styles.productNameStyle, styles.paymentMethodChooseBtnTextTitle, {backgroundColor: 'transparent'}]}
                                containerStyle={[styles.contentInRow, styles.centerVertically]}
                                title={'Credit Card'.toUpperCase()}/>
                        </View>


                <Divider style={{backgroundColor: '#d8dde1'}}/>

                        <View style={[styles.contentInRow, styles.justifyContentFlexStart, styles.paddingBottom16, styles.centerVertically]}>
                        <Button
                        onPress={this._paypalSelected}
                        titleStyle={styles.paymentMethodChooseBtnTitle}
                        containerStyle={ [styles.paymentMethodChooseBtnContainer, {backgroundColor:this.state.isPayPalSelected?'#7AB43A':'#E0E0E0'}]}
                        title={''}/>
                        <Button
                        onPress={this._paypalSelected}
                    buttonStyle={[{elevation:0, backgroundColor: 'transparent'}]}
                    icon={  <FontAwesome name={'cc-paypal'} color={paymentSelectedColor} size={32} /> }
                    titleStyle={[styles.fontFamilyRoboto, styles.productNameStyle, styles.paymentMethodChooseBtnTextTitle]}
                    containerStyle={[styles.contentInRow, styles.centerVertically]}
                    title={'Paypal'.toUpperCase()}/>
                        </View> 
                    </Card>

                    <View style={[styles.silverColorBackground,{marginTop:16}]}>
                    { !this.state.isCreditCardSelected ?
                      (
                        <LiteCreditCardInput
                          autoFocus
                          inputStyle={styles.paymentInput}
            
                          validColor={"black"}
                          invalidColor={"red"}
                          placeholderColor={"darkgray"}
            
                          onFocus={this._onFocus}
                          onChange={this._onChange} />
                      ) : (
                        <CreditCardInput
                          requiresName
                          requiresCVC
                          requiresPostalCode
            
                          labelStyle={styles.paymentLabel}
                          inputStyle={styles.paymentInput}
                          validColor={"black"}
                          invalidColor={"red"}
                          placeholderColor={"darkgray"}
            
                          onFocus={this._onFocus}
                          onChange={this._onChange} />
                      )
                    }
                  </View>
                  </View>
            </ScrollView>
            <Button
            onPress={this._goToBack}
            titleStyle={styles.checkoutPlaceOrderTitle}
            buttonStyle={styles.checkoutPlaceOrderBtn}
            title='PLACE ORDER'/>
            </View>
        )
    }
}
