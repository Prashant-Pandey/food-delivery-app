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
    Image,
    Dimensions, Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SearchBar, Card, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import GridView from '../../Components/GridView';
import {hideNavigationStyle, productModalNaviagtionStyle} from "../../navbarStyles";
import {Navigation} from "react-native-navigation";

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const imageWidth = (viewWidth-10)/2;
const contentWidth = ((viewWidth-10)/2)-40;

export default class Search extends Component {

    constructor(props) {
        super(props);

        this._search = this
            ._search
            .bind(this);

        this._goToRestaurant = this
            ._goToRestaurant
            .bind(this);

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
            <LinearGradient colors={['#FFA000', '#FFE082', '#FFC107', '#FFF8E1']} style={{flex:1}}>
            <View style={{flex:1}}>
                <SearchBar
                    lightTheme
                    containerStyle={{backgroundColor:'#ffffff', borderWidth:0}}
                    inputStyle={{backgroundColor:'#fff'}}
                    onChangeText={this._search}
                    onClearText={()=>{}}
                    placeholder='Search for Restaurant, cuisine or dish...' />
                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View>
                        <Card
                            flexDirection={'row'}
                            containerStyle={{padding:0, borderWidth: 0, flexWrap:'wrap', borderRadius:5, marginHorizontal:5}}>
                            <Image source={{uri:'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}} style={{
                                height: 130,
                                width: (viewWidth-10)/2,
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5
                            }} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View style={[{paddingLeft: 10, paddingTop:10, flexWrap:'wrap', justifyContent:'space-around'}]}>
                                <View>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle,{flexWrap: 'wrap', width:contentWidth}]}>
                                        Chhabra's Pure Vegsadihash
                                    </Text>
                                    <Text style={{fontFamily: 'AcademyEngravedLetPlain', color: '#757575', fontWeight: '100', marginTop:8}}>
                                        <Icon name = 'map-pin' size = {15}
                                              color = '#757575'/>&nbsp;Malviya Nagar, Jaipur
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically, {paddingTop: 3}, styles.centerHorizontally]}>
                                    <Text style={{textDecorationLine:'line-through', fontSize: 16, marginRight:5, color:'#F5511E'}}>
                                        $50.00
                                    </Text>
                                    <Text style={[{fontSize: 24, color:'#7CB443'}]}>
                                        &nbsp;$37.00
                                    </Text>
                                </View>
                            </View>
                            <View style={{position:'absolute', top:0, right:0}}>
                                <View style={styles.twelvePointBurst}>
                                    <View style={styles.twelvePointBurstMain} />
                                    <View style={styles.twelvePointBurst30} />
                                    <View style={styles.twelvePointBurst60} />
                                </View>
                                <View style={[styles.discountValuePosition]}>
                                    <Text style={styles.discountValueText}>
                                        40%
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View>
                        <Card
                            flexDirection={'row'}
                            containerStyle={{padding:0, borderWidth: 0, flexWrap:'wrap', borderRadius:5, marginHorizontal:5}}>
                            <Image source={{uri:'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}} style={{
                                height: 130,
                                width: (viewWidth-10)/2,
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5
                            }} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View style={[{paddingLeft: 10, paddingTop:10, flexWrap:'wrap', justifyContent:'space-around'}]}>
                                <View>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle,{flexWrap: 'wrap', width:contentWidth}]}>
                                        Chhabra's Pure Vegsadihash
                                    </Text>
                                    <Text style={{fontFamily: 'AcademyEngravedLetPlain', color: '#757575', fontWeight: '100', marginTop:8}}>
                                        <Icon name = 'map-pin' size = {15}
                                              color = '#757575'/>&nbsp;Malviya Nagar, Jaipur
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically, {paddingTop: 3}, styles.centerHorizontally]}>
                                    <Text style={{textDecorationLine:'line-through', fontSize: 16, marginRight:5, color:'#F5511E'}}>
                                        $50.00
                                    </Text>
                                    <Text style={[{fontSize: 24, color:'#7CB443'}]}>
                                        &nbsp;$37.00
                                    </Text>
                                </View>
                            </View>
                            <View style={{position:'absolute', top:0, right:0}}>
                                <View style={styles.twelvePointBurst}>
                                    <View style={styles.twelvePointBurstMain} />
                                    <View style={styles.twelvePointBurst30} />
                                    <View style={styles.twelvePointBurst60} />
                                </View>
                                <View style={[styles.discountValuePosition]}>
                                    <Text style={styles.discountValueText}>
                                        40%
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View>
                        <Card
                            flexDirection={'row'}
                            containerStyle={{padding:0, borderWidth: 0, flexWrap:'wrap', borderRadius:5, marginHorizontal:5}}>
                            <Image source={{uri:'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}} style={{
                                height: 130,
                                width: (viewWidth-10)/2,
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5
                            }} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View style={[{paddingLeft: 10, paddingTop:10, flexWrap:'wrap', justifyContent:'space-around'}]}>
                                <View>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle,{flexWrap: 'wrap', width:contentWidth}]}>
                                        Chhabra's Pure Vegsadihash
                                    </Text>
                                    <Text style={{fontFamily: 'AcademyEngravedLetPlain', color: '#757575', fontWeight: '100', marginTop:8}}>
                                        <Icon name = 'map-pin' size = {15}
                                              color = '#757575'/>&nbsp;Malviya Nagar, Jaipur
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically, {paddingTop: 3}, styles.centerHorizontally]}>
                                    <Text style={{textDecorationLine:'line-through', fontSize: 16, marginRight:5, color:'#F5511E'}}>
                                        $50.00
                                    </Text>
                                    <Text style={[{fontSize: 24, color:'#7CB443'}]}>
                                        &nbsp;$37.00
                                    </Text>
                                </View>
                            </View>
                            <View style={{position:'absolute', top:0, right:0}}>
                                <View style={styles.twelvePointBurst}>
                                    <View style={styles.twelvePointBurstMain} />
                                    <View style={styles.twelvePointBurst30} />
                                    <View style={styles.twelvePointBurst60} />
                                </View>
                                <View style={[styles.discountValuePosition]}>
                                    <Text style={styles.discountValueText}>
                                        40%
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._goToRestaurant} underlayColor={'transparent'}>
                    <View>
                        <Card
                            flexDirection={'row'}
                            containerStyle={{padding:0, borderWidth: 0, flexWrap:'wrap', borderRadius:5, marginHorizontal:5}}>
                            <Image source={{uri:'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}} style={{
                                height: 130,
                                width: (viewWidth-10)/2,
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5
                            }} resizeMethod={'resize'} resizeMode={'cover'}/>
                            <View style={[{paddingLeft: 10, paddingTop:10, flexWrap:'wrap', justifyContent:'space-around'}]}>
                                <View>
                                    <Text style={[styles.fontFamilyRoboto, styles.productNameStyle,{flexWrap: 'wrap', width:contentWidth}]}>
                                        Chhabra's Pure Vegsadihash
                                    </Text>
                                    <Text style={{fontFamily: 'AcademyEngravedLetPlain', color: '#757575', fontWeight: '100', marginTop:8}}>
                                        <Icon name = 'map-pin' size = {15}
                                              color = '#757575'/>&nbsp;Malviya Nagar, Jaipur
                                    </Text>
                                </View>
                                <View style={[styles.contentInRow, styles.centerVertically, {paddingTop: 3}, styles.centerHorizontally]}>
                                    <Text style={{textDecorationLine:'line-through', fontSize: 16, marginRight:5, color:'#F5511E'}}>
                                        $50.00
                                    </Text>
                                    <Text style={[{fontSize: 24, color:'#7CB443'}]}>
                                        &nbsp;$37.00
                                    </Text>
                                </View>
                            </View>
                            <View style={{position:'absolute', top:0, right:0}}>
                                <View style={styles.twelvePointBurst}>
                                    <View style={styles.twelvePointBurstMain} />
                                    <View style={styles.twelvePointBurst30} />
                                    <View style={styles.twelvePointBurst60} />
                                </View>
                                <View style={[styles.discountValuePosition]}>
                                    <Text style={styles.discountValueText}>
                                        40%
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableHighlight>
            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    contentInRow:{
        flexDirection: 'row',
    },
    centerVertically:{
        alignItems: 'center',
    },
    centerHorizontally:{
        justifyContent: 'center',
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
        minHeight:Dimensions.get('window').height,
        alignContent:'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    productNameStyle: {
        fontWeight: '500',
        fontSize: 16,
    },
    fontFamilyRoboto: {
        fontFamily: 'AcademyEngravedLetPlain'
    },
    twelvePointBurst: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    twelvePointBurstMain: {
        width: 40,
        height: 40,
        backgroundColor: '#7CB443'
    },
    twelvePointBurst30: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '30deg'}
        ]
    },
    twelvePointBurst60: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '60deg'}
        ]
    },
    discountValuePosition:{position:'absolute', right:3, top:8},
    discountValueText:{fontFamily: 'AcademyEngravedLetPlain', fontWeight: '500', fontSize: 16, color:'#ffffff'}
});
