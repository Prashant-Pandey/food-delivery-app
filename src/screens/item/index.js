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
import {coloredNavigationStyle} from "../../navbarStyles";

import styles from "../../Constants/StyleConstants";

const navBarBackgroundColor = '#FFA000';


const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const navBarThemeColor = 'rgba(255, 193, 7, 1)', fabThemeColor = 'rgba(255, 193, 7, 1)';
const iconColor = 'white';
const dividerColor = '#d8dde1';

// you can use state to store this data
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
        this.props.navigator.handleDeepLink({ 
            link: 'Menu'
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
            <View style={styles.flex1}>
                {/*header*/}
                <Header
                    outerContainerStyles={[styles.borderBottomWidth0, styles.paddingRight0]}
                    innerContainerStyles={styles.marginRight0}
                    backgroundColor={navBarBackgroundColor}
                    leftComponent={
                        <View>
                            {/*put product name as title*/}
                            <Button
                                icon={<Icon name='ios-arrow-back' size={24} color={iconColor}/>}
                                onPress={this._goToBack}
                                buttonStyle={[styles.productPageHeaderBackBtn]}
                                titleStyle={[styles.productPageHeaderBackBtnTitle]}
                                title={'Sushi'.toUpperCase()}/>
                        </View>
                    }
                    rightComponent={
                        <TouchableHighlight onPress={this._goToCart} underlayColor={'transparent'}>
                            <View style={[styles.centerVertically, styles.centerHorizontally, styles.paddingRight20]}>
                                <View style={[ styles.centerVertically, styles.centerHorizontally, styles.itemPageCartNotifierStyle]}>
                                    {/*put no of items in cart*/}
                                    <Text style={[styles.itemPageCartText]}>1</Text>
                                </View>
                                <Icon name='md-cart' size={30} style={{marginTop:10}} color={iconColor}/>
                            </View>
                        </TouchableHighlight>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Swiper style={styles.itemPageSwiperStyle} showsButtons={true}>
                        {/*put all the images of product you want to have in a swiper*/}
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
                        <Text style={{padding: 10}}>
                            {/*put product description*/}
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                    <Divider style={{backgroundColor: dividerColor}}/>
                    <View style={[styles.contentInRow, styles.flex1, styles.justifyContentSpaceAround, styles.paddingVertical10, {
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
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                style={[styles.itemFabBtnStyling, styles.centerVertically, styles.centerHorizontally]}
                 underlayColor={fabThemeColor} onPress={this._doCall}>
                    <View>
                        <FeatherIcon name={'phone-call'} size={24} color={iconColor} />
                    </View>
                </TouchableHighlight>
                    <Divider style={{backgroundColor: dividerColor}}/>
                    <Button
                        icon={<MaterialCommunityIcons name='dots-horizontal-circle' size={34} color='#000'/>}
                        onPress={this._goToMenu}
                        buttonStyle={styles.itemGoToMenuPageBtn}
                        textStyle={styles.itemGoToMenuPageBtnText}
                        title='Our Other Menu'/>
                    <Divider style={{backgroundColor: dividerColor}}/>
                    {/*recomended product list*/}
                    <View style={{minHeight: 220}}>
                        <FlatList
                            horizontal
                            style={{height: 220}}
                            data={this.state.data}
                            renderItem={({item: rowData}) => {
                                return (
                                    /*recomended image uri list*/
                                    <Card
                                        image={{uri: rowData.uri}}
                                        imageStyle={styles.borderRadius10}
                                        containerStyle={styles.itemPageRecommendedListCardContainerStyle}>
                                        <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                            {/*recomended product restaurant name*/}
                                            {rowData.hotelName}
                                        </Text>
                                        <View
                                            style={[styles.paddingBottom10,styles.contentInRow, styles.centerVertically]}>
                                            <Icon name='ios-pin-outline' size={16}
                                                  color='#222222'/>
                                            <Text style={[styles.textAlignCenter, styles.fontSize16,styles.paddingLeft10, styles.condensedFonts]}>
                                            {/*recomended product restaurant location*/}
                                            {rowData.hotelLocation}</Text>
                                        </View>
                                    </Card>
                                );
                            }}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </ScrollView>
                <TouchableHighlight underlayColor={'#F57F17'} onPress={this._goToCart}>
                <View style={[styles.itemOrderNowBtnContainer, styles.centerVertically, styles.contentInRow, styles.centerHorizontally]}>
                    <MaterialIcons name={'add-shopping-cart'} size={24} color={{iconColor}}/>
                    <Text style={[styles.paddingLeft10, styles.itemOrderNowBtnText]}>ORDER NOW</Text>
                </View>
                </TouchableHighlight>
            </View>
        );
    }
}
