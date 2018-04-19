/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    View,
    Image,ScrollView,
    Dimensions, Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SearchBar, Card, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import GridView from '../../Components/GridView';
import {hideNavigationStyle} from "../../navbarStyles";
import {Navigation} from "react-native-navigation";
import styles from '../../Constants/StyleConstants';

import { gradientColors } from "../../Constants/GradientColors";

const viewWidth = Dimensions.get('window').width;
const imageWidth = (viewWidth-10)/2;
const contentWidth = ((viewWidth-10)/2)-40;

export default class Search extends Component {

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

        this._search = this
            ._search
            .bind(this);

        this._goToRestaurant = this
            ._goToRestaurant
            .bind(this);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.dismissAllModals();
            }
        }
    }

    _search() {

    }

    _goToRestaurant(){
        console.log('_goToRestaurant');
        Keyboard.dismiss();
        this.props.navigator.showModal({
            screen: 'Item', // unique ID registered with Navigation.registerScreen
            title: 'Sushi Title', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    render() {
        return (
            <LinearGradient colors={gradientColors} style={styles.flex1}>
            <View style={styles.flex1}>
                <SearchBar
                    lightTheme
                    containerStyle={[styles.backgroundColorWhite, styles.borderWidth0]}
                    inputStyle={styles.backgroundColorWhite}
                    onChangeText={this._search}
                    onClearText={()=>{}}
                    placeholder='Search for Restaurant, cuisine or dish...' />
                <ScrollView>
                    <View>
                    <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View>
                        <Card
                            flexDirection={'row'}
                            containerStyle={[styles.borderWidth0, styles.flexWrapWrap, styles.searchScreenCardContainerStyle]}>
                            <Image source={{uri:'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}} style={styles.searchScreenCardImageStyle} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View style={[ styles.flexWrapWrap, styles.paddingLeft10, styles.paddingTop10,  styles.justifyContentSpaceAround]}>
                                <View>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle, styles.flexWrapWrap, {width:contentWidth}]}>
                                        Chhabra's Pure Vegsadihash
                                    </Text>
                                    <Text style={styles.searchScreenLocationTextStyle}>
                                        <Icon name = 'map-pin' size = {15}
                                              color = '#757575'/>&nbsp;Malviya Nagar, Jaipur
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically, {paddingTop: 3}, styles.centerHorizontally]}>
                                    <Text style={styles.searchScreenSparePrice}>
                                        $50.00
                                    </Text>
                                    <Text style={[styles.searchScreenOriginalPrice]}>
                                        &nbsp;$37.00
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.searchScreenOfferStar}>
                                <View style={styles.searchScreenTwelvePointBurst}>
                                    <View style={styles.searchScreenTwelvePointBurstMain} />
                                    <View style={styles.searchScreenTwelvePointBurst30} />
                                    <View style={styles.searchScreenTwelvePointBurst60} />
                                </View>
                                <View style={[styles.searchScreenDiscountValuePosition]}>
                                    <Text style={styles.discountValueText}>
                                        40%
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
            </LinearGradient>
        );
    }
}