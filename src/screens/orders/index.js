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
import GridView from '../../Components/GridView';
import {gradientColors} from '../../Constants/GradientColors';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../../navbarStyles';
import styles from '../../Constants/StyleConstants';


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
                img: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
                desc: 'The Restaurant Menu After Effects template is a fun way to bring a boring menu to life. This easy to use project is perfect for animating any restaurant',
                cost: 232
            }, {
                img: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
                desc: 'The Restaurant Menu After Effects template is a fun way to bring a boring menu to life. This easy to use project is perfect for animating any restaurant',
                cost: 232
            }, {
                img: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
                desc: 'The Restaurant Menu After Effects template is a fun way to bring a boring menu to life. This easy to use project is perfect for animating any restaurant',
                cost: 232
            }],
        };
        this._goToTrackOrder = this._goToTrackOrder.bind(this);
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


    componentWillMount() {
        // adding data to our list
    }

    render() {
        const items = [
            {name: 'TURQUOISE', code: '#1abc9c'}, {name: 'EMERALD', code: '#2ecc71'},
            {name: 'PETER RIVER', code: '#3498db'}, {name: 'AMETHYST', code: '#9b59b6'},
            {name: 'WET ASPHALT', code: '#34495e'}, {name: 'GREEN SEA', code: '#16a085'},
            {name: 'NEPHRITIS', code: '#27ae60'}, {name: 'BELIZE HOLE', code: '#2980b9'},
            {name: 'WISTERIA', code: '#8e44ad'}, {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
            {name: 'SUN FLOWER', code: '#f1c40f'}, {name: 'CARROT', code: '#e67e22'},
            {name: 'ALIZARIN', code: '#e74c3c'}, {name: 'CLOUDS', code: '#ecf0f1'},
            {name: 'CONCRETE', code: '#95a5a6'}, {name: 'ORANGE', code: '#f39c12'},
            {name: 'PUMPKIN', code: '#d35400'}, {name: 'POMEGRANATE', code: '#c0392b'},
            {name: 'SILVER', code: '#bdc3c7'}, {name: 'ASBESTOS', code: '#7f8c8d'},
        ];
        return (
            <LinearGradient colors={gradientColors} style={styles.fullScreen}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            
            <Card containerStyle={styles.orderScreenCardStyle}>
                <View
                    style={[styles.contentInRow,
                    styles.centerVertically, styles.justifyContentSpaceBetween, styles.blackBorderWidth1]}>
                    <View style={[styles.contentInRow, styles.centerVertically,{paddingVertical: 8}]}>
                        <View style={[styles.centerVertically, styles.centerHorizontally,styles.numberingOrders]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                            {/* put serial no of product here */}
                                1
                            </Text>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                            {/* put name of restaurant here */}
                                Chchabra's Pure Veg
                            </Text>
                            <Text style={styles.dealsCardLocation}>
                            {/* put location of restaurant here */}
                                Malviya Nagar, Jaipur
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.orderCardCostStyle}>
                        {/* put cost of product here */}
                            $15
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
                                ONGOING
                            </Text>
                        </View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                Order ID&nbsp;:&nbsp;
                            </Text>
                            <Text style={[styles.fontFamilyRoboto]}>
                                1213233
                            </Text>
                        </View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                Ordered at&nbsp;:&nbsp;
                            </Text>
                            <Text style={[styles.fontFamilyRoboto]}>
                                2 Feb 2018
                            </Text>
                        </View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.fontFamilyRoboto, styles.orderInfoTitleStyle]}>
                                Time&nbsp;:&nbsp;
                            </Text>
                            <Text style={[styles.fontFamilyRoboto]}>
                                2:35 AM
                            </Text>
                        </View>
                    </View>
                </View>
                <Button
                    onPress={this._goToTrackOrder}
                    icon={<Icon name = 'map-pin' size = {15}
                                       color = 'white' />}
                    textStyle={[styles.fontWeight, styles.fontSize18]}
                    buttonStyle={styles.orderCardBtn}
                    title='Track Order'/>
            </Card>
            
        </ScrollView>
            </LinearGradient>
        );
    }
}
