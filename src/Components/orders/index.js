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
import LinearGradient from 'react-native-linear-gradient';
import GridView from '../../Commons/GridView';
import {gradientColors} from '../../Styles/GradientColors';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../../Styles/navbarStyles';
import styles from '../../Styles/StyleConstants';


export default class Orders extends Component {

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
            onGoing: true,
            orderData: [{
                orderID:1234524,
                name:"Chchabras Pure Veg",
                restaurantAddress:"N-34 Malviya Nagar",
                orderDate:"Sep 21, 2018",
                orderTime:"10:30 AM",
                netCost:300.00,
                orderStatus:'going'
            },{
                orderID:347563,
                name:"Chchabras Pure Veg",
                restaurantAddress:"N-34 Malviya Nagar",
                orderDate:"Sep 21, 2018",
                orderTime:"10:30 AM",
                netCost:370.00,
                orderStatus:'completed'
            }],
        };
        this._goToTrackOrder = this._goToTrackOrder.bind(this);
        this._goToOrderSummary = this._goToOrderSummary.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    } 
   
    onNavigatorEvent(event) {
        console.log('event triggered', event);
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
            
                default:
                    break;
            }
        }

        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'sideMenu') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
      }

    _goToTrackOrder(){
        this.props.navigator.showModal({
            screen: 'Orders.TrackOrder', // unique ID registered with Navigation.registerScreen
            title: 'Track Order', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    _goToOrderSummary(){
        this.props.navigator.showModal({
            screen: 'Orders.OrderSummary', // unique ID registered with Navigation.registerScreen
            title: 'Order Summary', // title of the screen as appears in the nav bar (optional)
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
            {this.state.orderData.map((data, key)=>{
                let going = false;
                if(data.orderStatus=="going"){
                    going = true;
                }
                return(
                    <Card containerStyle={styles.orderScreenCardStyle}>
                        <View
                            style={[styles.contentInRow,
                            styles.centerVertically, styles.justifyContentSpaceBetween, styles.blackBorderWidth1]}>
                            <View style={[styles.contentInRow, styles.centerVertically,{paddingVertical: 8}]}>
                                <View style={[styles.centerVertically, styles.centerHorizontally,styles.numberingOrders]}>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                    {/* put serial no of product here */}
                                        {key+1}
                                    </Text>
                                </View>
                                <View style={{marginLeft: 20}}>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                    {/* put name of restaurant here */}
                                        {data.name}
                                    </Text>
                                    <Text style={styles.dealsCardLocation}>
                                    {/* put location of restaurant here */}
                                        {data.restaurantAddress}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.orderCardCostStyle}>
                                {/* put cost of product here */}
                                    INR {data.netCost}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[styles.contentInRow, styles.centerVertically, styles.justifyContentSpaceBetween, styles.orderCardDescriptionContainer]}>
                        <Image source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}} style={styles.orderScreenCardImage} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View>
                                <View style={[styles.contentInRow, styles.centerVertically]}>
                                    <Text style={[styles.centerVertically, styles.orderInfoTitleStyle, styles.fontSize15, styles.fontArielMT]}>
                                        Status&nbsp;:&nbsp;
                                    </Text>
                                    <Text style={[{color:'green'}, styles.fontSize15, styles.fontArielMT]}>
                                        {data.orderStatus.toUpperCase()}
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically]}>
                                    <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                        Order ID&nbsp;:&nbsp;
                                    </Text>
                                    <Text style={[styles.fontFamilyRoboto]}>
                                        {data.orderID}
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically]}>
                                    <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                        Ordered at&nbsp;:&nbsp;
                                    </Text>
                                    <Text style={[styles.fontFamilyRoboto]}>
                                        {data.orderDate}
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically]}>
                                    <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                        Time&nbsp;:&nbsp;
                                    </Text>
                                    <Text style={[styles.fontFamilyRoboto]}>
                                        {data.orderTime}
                                    </Text>
                                </View>
                            </View>
                        </View>
                       {going&&<Button
                            onPress={this._goToTrackOrder}
                            icon={<Icon name = 'map-pin' size = {15}
                                            color = 'white' />}
                            textStyle={[styles.fontWeight, styles.fontSize18]}
                            buttonStyle={styles.orderCardBtn}
                            title='Track Order'/>}
                        <Button
                            onPress={this._goToOrderSummary}
                            icon={<Icon name = 'package' size = {15}
                                            color = 'white' />}
                            textStyle={[styles.fontWeight, styles.fontSize18]}
                            buttonStyle={styles.orderCardBtn}
                            title='View Order Summary'/>
                    </Card>
                );
            })}
            {/*incompleted delivery*/}            
        </ScrollView>
            </LinearGradient>
        );
    }
}
