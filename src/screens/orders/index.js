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


export default class Orders extends Component {
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
            
            <Card containerStyle={{backgroundColor:'#fff', borderRadius: 5, borderWidth:0}}>
                <View
                    style={[styles.contentInRow,
                    styles.centerVertically, {
                    justifyContent: 'space-between',
                    borderColor: '#000',
                    borderBottomWidth: 1
                }]}>
                    <View style={[styles.contentInRow, styles.centerVertically,{paddingVertical: 8}]}>
                        <View style={[styles.centerVertically, styles.centerHorizontally,styles.numberingOrders]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                1
                            </Text>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                Chchabra's Pure Veg
                            </Text>
                            <Text style={{fontFamily: 'Roboto', color: '#757575', fontWeight: '100'}}>
                                Malviya Nagar, Jaipur
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 30}}>
                            $15
                        </Text>
                    </View>
                </View>
                <View
                    style={[styles.contentInRow, styles.centerVertically,{
                    justifyContent: 'space-between',
                    minHeight: 100,
                    paddingTop: 10
                }]}>
                   <Image source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}} style={{
                            height: '100%',
                            width: '100%',
                            maxHeight: 120,
                            maxWidth: 100,
                            marginHorizontal: 10,
                            borderRadius: 5
                        }} resizeMethod={'resize'} resizeMode={'cover'}/>
                    <View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.centerVertically, styles.orderInfoTitleStyle,{fontSize: 20, fontFamily: 'sans-serif-condensed'}]}>
                                Status&nbsp;:&nbsp;
                            </Text>
                            <Text style={[{color:'green', fontSize:20, fontFamily: 'sans-serif-condensed'}]}>
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
                    textStyle={{
                        color: '#ffffff',
                        fontSize: 18,
                    }}
                    buttonStyle={{
                        backgroundColor: '#F1C40F',
                        minWidth: 200,
                        height: 50,
                        borderWidth: 0,
                        borderRadius: 25,
                        marginTop: 24,
                        marginBottom: 10,
                    }}
                    text='Track Order'/>
            </Card>
            
 <Card containerStyle={{backgroundColor:'#fff', borderRadius: 5, borderWidth:0}}>
                <View
                    style={[styles.contentInRow,
                    styles.centerVertically, {
                    justifyContent: 'space-between',
                    borderColor: '#000',
                    borderBottomWidth: 1
                }]}>
                    <View style={[styles.contentInRow, styles.centerVertically,{paddingVertical: 8}]}>
                        <View style={[styles.centerVertically, styles.centerHorizontally,styles.numberingOrders]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                1
                            </Text>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                Chchabra's Pure Veg
                            </Text>
                            <Text style={{fontFamily: 'Roboto', color: '#757575', fontWeight: '100'}}>
                                Malviya Nagar, Jaipur
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 30}}>
                            $15
                        </Text>
                    </View>
                </View>
                <View
                    style={[styles.contentInRow, styles.centerVertically,{
                    justifyContent: 'space-between',
                    minHeight: 100,
                    paddingTop: 10
                }]}>
                   <Image source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}} style={{
                            height: '100%',
                            width: '100%',
                            maxHeight: 120,
                            maxWidth: 100,
                            marginHorizontal: 10,
                            borderRadius: 5
                        }} resizeMethod={'resize'} resizeMode={'cover'}/>
                    <View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.centerVertically, styles.orderInfoTitleStyle,{fontSize: 20, fontFamily: 'sans-serif-condensed'}]}>
                                Status&nbsp;:&nbsp;
                            </Text>
                            <Text style={[{color:'green', fontSize:20, fontFamily: 'sans-serif-condensed'}]}>
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
                    textStyle={{
                        color: '#ffffff',
                        fontSize: 18,
                    }}
                    buttonStyle={{
                        backgroundColor: '#F1C40F',
                        minWidth: 200,
                        height: 50,
                        borderWidth: 0,
                        borderRadius: 25,
                        marginTop: 24,
                        marginBottom: 10,
                    }}
                    text='Track Order'/>
            </Card>
             <Card containerStyle={{backgroundColor:'#fff', borderRadius: 5, borderWidth:0}}>
                <View
                    style={[styles.contentInRow,
                    styles.centerVertically, {
                    justifyContent: 'space-between',
                    borderColor: '#000',
                    borderBottomWidth: 1
                }]}>
                    <View style={[styles.contentInRow, styles.centerVertically,{paddingVertical: 8}]}>
                        <View style={[styles.centerVertically, styles.centerHorizontally,styles.numberingOrders]}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                1
                            </Text>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                Chchabra's Pure Veg
                            </Text>
                            <Text style={{fontFamily: 'Roboto', color: '#757575', fontWeight: '100'}}>
                                Malviya Nagar, Jaipur
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 30}}>
                            $15
                        </Text>
                    </View>
                </View>
                <View
                    style={[styles.contentInRow, styles.centerVertically,{
                    justifyContent: 'space-between',
                    minHeight: 100,
                    paddingTop: 10
                }]}>
                   <Image source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}} style={{
                            height: '100%',
                            width: '100%',
                            maxHeight: 120,
                            maxWidth: 100,
                            marginHorizontal: 10,
                            borderRadius: 5
                        }} resizeMethod={'resize'} resizeMode={'cover'}/>
                    <View>
                        <View style={[styles.contentInRow, styles.centerVertically]}>
                            <Text style={[styles.centerVertically, styles.orderInfoTitleStyle,{fontSize: 20, fontFamily: 'sans-serif-condensed'}]}>
                                Status&nbsp;:&nbsp;
                            </Text>
                            <Text style={[{color:'green', fontSize:20, fontFamily: 'sans-serif-condensed'}]}>
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
                    textStyle={{
                        color: '#ffffff',
                        fontSize: 18,
                    }}
                    buttonStyle={{
                        backgroundColor: '#F1C40F',
                        minWidth: 200,
                        height: 50,
                        borderWidth: 0,
                        borderRadius: 25,
                        marginTop: 24,
                        marginBottom: 10,
                    }}
                    text='Track Order'/>
            </Card>
        </ScrollView>
            </LinearGradient>
        );
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
