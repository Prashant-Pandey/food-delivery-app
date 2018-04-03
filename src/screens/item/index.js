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
    TouchableHighlight,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import {Text, Button, Card, Header, Badge, Rating, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from "react-native-navigation";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Swiper from 'react-native-swiper';
import {coloredNavigationStyle, sideNavigatorButton} from "../../navbarStyles";

import { styles } from "../../Constants/StyleConstants";

const navBarBackgroundColor = '#FFA000';


const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const navBarThemeColor = 'rgba(255, 193, 7, 1)', fabThemeColor = 'rgba(255, 193, 7, 1)';

const data = [{
    uri:"https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    hotelName:'Chhabras pure veg',
    hotelLocation:'Malviya Nagar, Jaipur'
},{
    uri:"https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    hotelName:'Chhabras pure veg',
    hotelLocation:'Malviya Nagar, Jaipur'
},{
    uri:"https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    hotelName:'Chhabras pure veg',
    hotelLocation:'Malviya Nagar, Jaipur'
},{
    uri:"https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    hotelName:'Chhabras pure veg',
    hotelLocation:'Malviya Nagar, Jaipur'
},{
    uri:"https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    hotelName:'Chhabras pure veg',
    hotelLocation:'Malviya Nagar, Jaipur'
}]

export default class Item extends Component {

    constructor() {
        super();
        this.state = {
            data: data
        };
        this._goToBack = this._goToBack.bind(this);
        this._goToMenu = this._goToMenu.bind(this);
        this._goToCart = this._goToCart.bind(this);
        this._doCall = this._doCall.bind(this);
    }

    _goToBack() {
        this.props.navigator.dismissAllModals({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
    }

    _goToMenu() {
        this.props.navigator.dismissAllModals();
        this
            .props
            .navigator
            .resetTo({
                screen: 'Menu', title: 'Restraunt Name',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: coloredNavigationStyle,
                animated: true, animationType: 'fade'
            });
    }

    _goToCart() {
        this.props.navigator.showModal({
            screen: 'Cart', // unique ID registered with Navigation.registerScreen
            title: 'ORDER CART', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    _doCall(){

    }

    render() {
        return (
            <View style={{flex:1}}>
                {/*header*/}
                <Header
                    outerContainerStyles={{borderBottomWidth:0, paddingRight:0}}
                    innerContainerStyles={{marginRight:0}}
                    backgroundColor={navBarBackgroundColor}
                    leftComponent={
                        <View>
                            <Button
                                icon={<Icon name='ios-arrow-back' size={34} color='white'/>}
                                onPress={this._goToBack}
                                buttonStyle={{
                                    backgroundColor: "transparent",
                                    elevation: 0,
                                    zIndex: 0
                                }}
                                textStyle={{
                                    color: '#ffffff',
                                    fontSize: 24,
                                    fontWeight: '500',
                                    paddingLeft: 30,
                                }}
                                title='Sushi'/>
                        </View>
                    }
                    rightComponent={
                        <TouchableHighlight onPress={this._goToCart} underlayColor={navBarThemeColor}>
                            <View style={[{paddingRight: 20, alignItems: 'center', justifyContent: 'center'}]}>
                                <View style={[{position:'absolute', top:0, right:5, zIndex:10, height: 20, width:25, borderRadius: 10, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}]}>
                                    <Text style={{fontSize: 10, color: '#fff', fontWeight: '700'}}>1</Text>
                                </View>
                                <Icon name='md-cart' size={42} color='white'/>
                            </View>
                        </TouchableHighlight>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Swiper style={[{
                         height: viewHeight / 3,
                         margin: 0,
                         padding: 0,
                         borderWidth: 0,
                    }]} showsButtons={true}>
                        <Image
                            source={{uri: 'http://i.dailymail.co.uk/i/pix/2017/11/08/16/4623608900000578-0-image-a-9_1510156892900.jpg'}}
                            style={styles.prodImage}/>
                        <Image
                            source={{uri: 'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-MCBITTYBEANBURGERS2/18COOKING-MCBITTYBEANBURGERS2-articleLarge.jpg'}}
                            style={styles.prodImage}/>
                        <Image
                            source={{uri: 'https://www.redrobin.com/content/dam/web/landing-pages/tavern-menu/taco-tavern-double-640.jpg'}}
                            style={styles.prodImage}/>
                    </Swiper>
                    <View>
                        <Text style={{padding: 10}}>A leper colony, leprosarium, or lazar house is a place to quarantine
                            people with leprosy. The term lazaretto can refer to quarantine sites, which were at some
                            time also leper colonies.</Text>
                    </View>
                    <Divider style={{backgroundColor: '#d8dde1'}}/>
                    <View style={[styles.contentInRow, {
                        flex: 1,
                        justifyContent: 'space-around',
                        paddingVertical: 10,
                        backgroundColor: '#fff'
                    }]}>
                        <View style={[styles.centerVertically, styles.centerHorizontally]}>
                            <Text style={styles.productDetailsHeading}>Price</Text>
                            <Text style={styles.productDetailsDetail}>$32</Text>
                        </View>
                        <View style={[styles.centerVertically, styles.centerHorizontally]}>
                            <Text style={styles.productDetailsHeading}>Outlet</Text>
                            <Text style={styles.productDetailsDetail}>Jagga Mall</Text>
                        </View>
                        <View style={[styles.centerVertically, styles.centerHorizontally]}>
                            <Text style={styles.productDetailsHeading}>Estimated Time</Text>
                            <Text style={styles.productDetailsDetail}>20-30 min</Text>
                        </View>
                        <View style={[styles.centerVertically, styles.centerHorizontally]}>
                            <Text style={styles.productDetailsHeading}>Rating</Text>
                            <Rating
                                imageSize={16}
                                readonly
                                startingValue={5}
                                // style={styles.rating}
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                style={[{height:50, width:50, borderRadius: 25, position:'absolute', right: 16,top: (viewHeight/3-40), backgroundColor:fabThemeColor, justifyContent: 'center',alignItems: 'center',}]}
                 underlayColor={fabThemeColor} onPress={this._doCall}>
                    <View>
                        <FeatherIcon name={'phone-call'} size={24} color={'white'} />
                    </View>
                </TouchableHighlight>
                    <Divider style={{backgroundColor: '#d8dde1'}}/>
                    <Button
                        icon={<MaterialCommunityIcons name='dots-horizontal-circle' size={34} color='#000'/>}
                        onPress={this._goToMenu}
                        buttonStyle={{
                            backgroundColor: "transparent",
                            elevation: 0,
                            width: viewWidth,
                            paddingVertical: 10,
                        }}
                        textStyle={{
                            color: '#000',
                            fontSize: 24,
                            fontWeight: '500',
                        }}
                        title='Our Other Menu'/>
                    <Divider style={{backgroundColor: '#d8dde1'}}/>
                    <View style={{minHeight: 220}}>
                        <FlatList
                            horizontal
                            style={{height: 220}}
                            data={this.state.data}
                            renderItem={({item: rowData}) => {
                                return (
                                    <Card
                                        image={{uri: rowData.uri}}
                                        imageStyle={{borderRadius: 10}}
                                        containerStyle={{
                                            height: 210,
                                            width: 200,
                                            marginHorizontal: 5,
                                            marginVertical: 5,
                                            borderWidth:0
                                        }}>
                                        <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                            {rowData.hotelName}
                                        </Text>
                                        <View
                                            style={[{paddingBottom: 5}, styles.contentInRow, styles.centerVertically]}>
                                            <Icon name='ios-pin-outline' size={16}
                                                  color='#222222'/>
                                            <Text style={[{
                                                textAlign: 'center',
                                                fontSize: 16,
                                                paddingLeft: 10
                                            }, styles.condensedFonts]}>{rowData.hotelLocation}</Text>
                                        </View>
                                    </Card>
                                );
                            }}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </ScrollView>
                <TouchableHighlight underlayColor={'#F57F17'} onPress={this._goToCart}>
                <View style={[{
                    backgroundColor: '#F57F17',
                    width: viewWidth,
                    height: 45
                }, styles.centerVertically, styles.contentInRow, styles.centerHorizontally]}>
                    <MaterialIcons name={'add-shopping-cart'} size={24} color={'white'}/>
                    <Text style={{color: '#fff', fontSize: 20, fontFamily: 'AvenirNext-Bold', paddingLeft:10}}>ORDER NOW</Text>
                </View>
                </TouchableHighlight>
            </View>
        );
    }
}

{/*
 <Card
    image={{
    uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'
  }}>
    <Text style={{
      marginBottom: 10
    }}>
      The idea with React Native Elements is more about component structure than
      actual design.
    </Text>
</Card>
*/
}
{/*
<Card
    title={'title'}
    image={{ url: rowData.imageUrl }}
    key={rowData.title}
    containerStyle={[{ width: 160 }, styles.centerVertically, styles.centerHorizontally]}>
    <Text>
        {rowData.title}
    </Text>
</Card>*/
}
