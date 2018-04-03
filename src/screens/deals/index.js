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
    TouchableHighlight,
    ScrollView,
    Dimensions, Keyboard,
} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {hideNavigationStyle} from "../../navbarStyles";


import styles from '../../Constants/StyleConstants';
import { gradientColors } from "../../Constants/GradientColors";
const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = viewWidth-50;

export default class Deals extends Component {

    constructor(props) {
        super(props);

        this._goToRestaurant = this
            ._goToRestaurant
            .bind(this);

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
            <LinearGradient colors={gradientColors} style={styles.fullScreen}>

            <ScrollView style={styles.container}>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View style={styles.marginTop24px}>
                    <Card
                  containerStyle={{backgroundColor:'#fff', padding:0, borderRadius: 10, borderWidth:0, elevation:5, marginVertical:0}}>
                <Image  source={{uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'}}
                    style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, top:0.5, width:'99%', left:'0.5%', height:175}} />
                    <View
                        style={[styles.contentInRow,
                            styles.centerVertically, {
                                justifyContent: 'space-between',
                                paddingTop: 5
                            }]}>
                        <View style={[styles.contentInRow, styles.centerVertically, {paddingHorizontal: 10,}]}>
                            <View style={{marginLeft: 10}}>
                                <Text style={[styles.fontFamilyRoboto, styles.productNameStyle]}>
                                    Chchabra's Pure Veg
                                </Text>
                                <Text style={{fontFamily: 'Roboto', color: '#757575', fontWeight: '100'}}>
                                    Malviya Nagar, Jaipur
                                </Text>
                            </View>
                        </View>

                        <View style={styles.twelvePointBurst}>
                            <View style={styles.twelvePointBurstMain} />
                            <View style={styles.twelvePointBurst30} />
                            <View style={styles.twelvePointBurst60} />
                        </View>
                        <View style={[styles.discountValuePosition]}>
                            <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 30, color:'#ffffff'}}>
                                40%
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[styles.contentInRow, styles.centerVertically,{
                            paddingTop: 10, paddingHorizontal: 10
                        }]}>
                        <Text style={[styles.fontFamilyRoboto,{textAlign:'justify'}]}>
                            a contagious disease that affects the skin, mucous membranes, and nerves, causing discoloration and lumps on the skin and, in severe cases, disfigurement and deformities. Leprosy is now mainly confined to tropical Africa and Asia.
                        </Text>
                    </View>
                    <View style={[{paddingTop: 10, paddingBottom:5, paddingHorizontal: 10}, styles.contentInRow, styles.centerVertically]}>
                        <Icon name = 'map-pin' size = {16}
                              color = '#222222' />
                        <Text style={{textAlign:'center', fontSize: 16, fontFamily:'sans-serif-condensed', paddingLeft:10}}>LOS ANGELES, CA</Text>
                    </View>
    </Card>
                    </View>
                </TouchableHighlight>

            </ScrollView>
            </LinearGradient>
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
*/}
