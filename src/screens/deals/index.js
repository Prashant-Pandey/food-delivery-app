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
            <LinearGradient colors={['#FFA000', '#FFE082', '#FFC107', '#FFB74D']} style={{flex:1}}>
            <ScrollView style={styles.container}>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View style={{paddingVertical:5}}>
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
    orderInfoTitleStyle:{color: '#e67e22', fontWeight: '100'},
    twelvePointBurst: {
        position: 'absolute',
        top: -50,
        right: 20,
    },
    twelvePointBurstMain: {
        width: 80,
        height: 80,
        backgroundColor: '#7CB443'
    },
    twelvePointBurst30: {
        width: 80,
        height: 80,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '30deg'}
        ]
    },
    twelvePointBurst60: {
        width: 80,
        height: 80,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '60deg'}
        ]
    },
    discountValuePosition:{position:'absolute', right:35, top:-27}
});



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
