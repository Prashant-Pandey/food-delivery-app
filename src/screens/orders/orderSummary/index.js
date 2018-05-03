/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import {Card, Button, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';
import GridView from '../../../Components/GridView';
import {gradientColors} from '../../../Constants/GradientColors';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../../../navbarStyles';
import styles from '../../../Constants/StyleConstants';
import Fade from "../../../Components/Fade";

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;
let subTotal = 0;


export default class OrderSummary extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../../images/menu.png'), // for icon button, provide the local image asset name
            id: 'sideMenu' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

    constructor(props) {
        super(props);
        this.state = {
            orderData: {
                name:"Burger King",
                restaurantAddress:"11'N, Way Street, Madison, WI 53703",
                userAddress:"14'S, Hop Avenue, Madison, WI 53703",
                orderCompleteDate:"Sep 21, 2018",
                orderCompleteTime:"10:30 AM",
                orders:[{
                    itemName: "Paneer Tikka Masala",
                    noOfItems: 1,
                    costPerItem: 170
                },{
                    itemName: "American Choupsey",
                    noOfItems: 1,
                    costPerItem: 120
                },{
                    itemName: "Tandoori Butter Roti",
                    noOfItems: 5,
                    costPerItem: 10
                }]
            },
        };
        this._goToTrackOrder = this._goToTrackOrder.bind(this);
    } 
   
   
    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../../images/back.png'), // for icon button, provide the local image asset name
            id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

    _goToTrackOrder(){
        this.props.navigator.showModal({
            screen: 'Orders.TrackOrder', // unique ID registered with Navigation.registerScreen
            title: 'Track Order', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }


    componentWillMount() {
        // adding data to our list
    }

    render() {
        return (
            <LinearGradient colors={gradientColors} style={styles.fullScreen}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
                <View style={[styles.orderContainer]}>
                    <View style={[s.orderSummaryRestaurantDetails]}>
                    <View style={[s.orderSummaryRestaurantRow]}>
                        <MaterialIcons size={30} name="restaurant" color="#000" />
                        <View style={[s.orderSummaryRestaurantNameAddress]}>
                            <Text style={[s.orderSummaryHeading]}>{this.state.orderData.name}</Text>
                            <Text>{this.state.orderData.restaurantAddress}</Text>   
                        </View>
                    </View>
                    <View style={[s.orderSummaryRestaurantRow]}>
                        <Icon size={30} name="map-pin" color="#000" />
                        <View style={[s.orderSummaryRestaurantNameAddress]}>
                            <Text style={[s.orderSummaryHeading]}>Home</Text>
                            <Text>{this.state.orderData.userAddress}</Text>   
                        </View>
                    </View>
                    <View style={[s.orderSummaryRestaurantRow]}>
                        <MaterialIcons size={30} name="done-all" color="#000" />
                        <View style={[s.orderSummaryRestaurantNameAddress]}>
                            <Text style={[s.orderSummaryHeading]}>Delivered on</Text>
                            <Text>{this.state.orderData.orderCompleteDate+', '+
                            this.state.orderData.orderCompleteTime}</Text>   
                        </View>
                    </View>
                    </View>
                    <View style={[styles.billRow, styles.billPaddingTopRow]}>
                        {/*serial no col*/}
                        <View style={[styles.serialCol]}>
                            <Text>Sr.</Text>
                        </View>
                        {/*name no col*/}
                        <View style={[styles.nameCol]}>
                            <Text>Dishes</Text>
                        </View>
                        {/*no of items col*/}
                        <View style={[styles.noOfItemsCol]}>
                            <Text>Items</Text>
                        </View>
                        {/*price no col*/}
                        <View style={[styles.priceCol]}>
                            <Text>Total</Text>
                        </View>
                    </View>
                    {
                        this.state.orderData.orders.map((data, key)=>{
                            subTotal += data.costPerItem*data.noOfItems;
                            console.log(subTotal)
                            return(
                                <View style={[styles.billRow, styles.billContentRow]}>
                                    {/*serial no col*/}
                                    <View style={[styles.serialCol]}>
                                        <Text>{key+1}</Text>
                                    </View>
                                    {/*name no col*/}
                                    <View style={[styles.nameCol]}>
                                        <Text>{data.itemName}</Text>
                                    </View>
                                    {/*no of items col*/}
                                    <View style={[styles.noOfItemsCol]}>
                                        <Text>{data.noOfItems}</Text>
                                    </View>
                                    {/*price no col*/}
                                    <View style={[styles.priceCol]}>
                                        <Text>INR {data['costPerItem']*data['noOfItems']}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                     {/*showing sub total*/}
                    <View style={[styles.billRow, styles.billPaddingTopRow]}>
                        <View style={[styles.subTotalTxt]}>
                            <Text>Sub Total</Text>
                        </View>
                        <View style={[styles.subTotalAmt]}>
                            <Text style={{fontWeight: '500'}}>INR {subTotal}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </LinearGradient>
        );
    }
}

const s = StyleSheet.create({
    orderSummaryRestaurantDetails:{
        minHeight: 100,
        marginTop: 10
    },
    orderSummaryRestaurantRow:{
        minHeight:30,
        paddingTop: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'center',
    },
    orderSummaryRestaurantNameAddress :{
        paddingLeft: 10,
        justifyContent:'center'
    },
    orderSummaryHeading:{
        fontWeight: '600',
        color:'#000'
    }
});