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
    TouchableHighlight
} from 'react-native';
import {Card, Button, Badge, Text, Divider} from 'react-native-elements';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {modalNaviagtionStyle, rightCrossButton, sideNavigatorButton, navigationStyle, hideNavigationStyle} from '../../navbarStyles';




const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const mainBtnThemeColor = 'rgba(255, 193, 7, 1)';

export default class Checkout extends Component {
    constructor() {
        super();
        this.state={
            isCreditCardSelected : false,
            isPayPalSelected : false,
        }
        this._goToBack = this._goToBack.bind(this);
        this._creditCardSelected = this._creditCardSelected.bind(this);
        this._paypalSelected = this._paypalSelected.bind(this);
        
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


    _creditCardSelected(){
        this.setState({isCreditCardSelected: !this.state.isCreditCardSelected, isPayPalSelected:false});this.forceUpdate();
    }

    _paypalSelected(){
        this.setState({isPayPalSelected: !this.state.isPayPalSelected, isCreditCardSelected:false});this.forceUpdate();
    }

    _onChange(formData){console.log(JSON.stringify(formData, null, " "));}
    _onFocus (field){console.log("focusing", field);}

    componentWillMount() {
        // adding data to our list
    }

    _onChange(form){
        console.log(form);
    }

    render() {
        return(
            <View style={[{flex:1},s.container]}>
            <ScrollView>
                <View style={[styles.container, styles.centerVertically,{paddingVertical: 8}]}>
                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>Select Payment Method</Text>
                    <Card containerStyle={{borderWidth:0, width: viewWidth-30, borderRadius:5}}>
                    <View style={[styles.contentInRow, {justifyContent:'flex-start', paddingBottom: 16}, styles.centerVertically]}>
                    <TouchableHighlight 
                    onPress={this._creditCardSelected}
                    style={{height: 16, width: 16, borderRadius: 8, backgroundColor:this.state.isCreditCardSelected?'#7AB43A':'#E0E0E0', borderWidth: 0, borderColor:'#222', marginRight: 16}}>
                       <View></View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                    underlayColor={'transparent'}
                    style={[styles.contentInRow, styles.centerVertically]}
                    onPress={this._creditCardSelected}>
                       <View style={[styles.contentInRow, styles.centerVertically]}>
                       <Octicons name={'credit-card'} color={'#A9AAAE'} size={32} />
                       <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:16, paddingLeft: 8}]}>{'Credit Card'.toUpperCase()}</Text>
                       </View>
                    </TouchableHighlight>
                </View>


                <Divider style={{backgroundColor: '#d8dde1'}}/>

                        <View style={[styles.contentInRow, {justifyContent:'flex-start', paddingVertical: 16}, styles.centerVertically]}>
                            <TouchableHighlight 
                            onPress={this._paypalSelected}
                            style={{height: 16, width: 16, borderRadius: 8, backgroundColor:this.state.isPayPalSelected?'#7AB43A':'#E0E0E0', borderWidth: 0, borderColor:'#222', marginRight: 16}}>
                               <View></View>
                            </TouchableHighlight>
                            <TouchableHighlight 
                            underlayColor={'transparent'}
                            style={[styles.contentInRow, styles.centerVertically]}
                            onPress={this._paypalSelected}>
                               <View style={[styles.contentInRow, styles.centerVertically]}>
                               <FontAwesome name={'cc-paypal'} color={'#A9AAAE'} size={32} />
                               <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, {fontSize:16, paddingLeft: 8}]}>{'Paypal'.toUpperCase()}</Text>
                               </View>
                            </TouchableHighlight>
                        </View> 
                    </Card>

                    <View style={[s.container,{marginTop:16}]}>
                    { !this.state.isCreditCardSelected ?
                      (
                        <LiteCreditCardInput
                          autoFocus
                          inputStyle={s.input}
            
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
            
                          labelStyle={s.label}
                          inputStyle={s.input}
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
            textStyle={{
                color: '#ffffff',
                fontSize: 18
            }}
            buttonStyle={{
                backgroundColor: mainBtnThemeColor,
                minWidth: 150,
                marginBottom:16,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
            }}
            title='PLACE ORDER'/>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
      backgroundColor: "#F5F5F5",
    },
    label: {
      color: "black",
      fontSize: 12,
    },
    input: {
      fontSize: 16,
      color: "black",
    },
  });
  

const styles = StyleSheet.create({
    container: {
        minHeight: viewHeight-324,
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
        fontFamily: 'AcademyEngravedLetPlain'
    },
    orderInfoTitleStyle:{color: '#e67e22', fontWeight: '100'}
});
