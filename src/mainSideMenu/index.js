import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../navbarStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from "react-native-navigation";

const height = Dimensions.get('window').height, width = Dimensions.get('window').width;

const navPaddingVerticle = 12, iconColor = 'rgba(255, 193, 7, 1)', textColor = 'rgba(255, 193, 7, 1)',
    sideMenuWidth = 280, upperImageHeight = (height / 3)+ 30;

class mainSideMenu extends React.Component {
    constructor(props) {
        super(props);

        this._toggleDrawer = this
            ._toggleDrawer
            .bind(this);

    }

    _goTo(goTo){
        this._toggleDrawer();
        this.props.navigator.handleDeepLink({ 
            link: goTo
        }); 
    }

    _toggleDrawer() {
        this
            .props
            .navigator
            .toggleDrawer({side: 'left'});
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={{
                            width: sideMenuWidth,
                            height: upperImageHeight
                        }}
                        source={{
                            uri: 'https://bloximages.newyork1.vip.townnews.com/thesuburban.com/content/tncms/custom/image/219ef0b6-2cd9-11e6-a227-ffb01f5339f8.jpg?_dc=1465322176'
                        }}/>
                    <View style={[styles.navContactUsContainer, styles.silverColor]}></View>
                    <TouchableHighlight style={[styles.navContactUsContainer]} underlayColor={'transparent'}>
                        <Text style={styles.navContactUsText}>Contact Us</Text>
                    </TouchableHighlight>
                </View>
                <Image
                        resizeMode={'contain'}
                        style={{
                            position: 'absolute',
                            top: (upperImageHeight-35),
                            width: sideMenuWidth
                        }}
                        blurRadius={10}
                        source={require('../images/navBarDesign.jpg')}/>
                <ScrollView>
                    <View style={styles.navTextContainer}>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-home-outline'} color={iconColor} size={30} style={styles.transparentBG}/>
                            <TouchableHighlight onPress={()=>{this._goTo('Home')}} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Home</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-beer-outline'} color={iconColor} size={30} style={styles.transparentBG}/>
                            <TouchableHighlight onPress={()=>{this._goTo('Orders')}} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Orders</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-barcode-outline'} color={iconColor} size={30} style={styles.transparentBG}/>
                            <TouchableHighlight onPress={()=>{this._goTo('Deals')}} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Deals</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-settings-outline'} color={iconColor} size={30} style={styles.transparentBG}/>
                            <TouchableHighlight onPress={()=>{this._goTo('Settings')}} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Settings</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.lastNavBtn}>
                            <Icon name={'ios-log-in-outline'} color={iconColor} size={30} style={styles.transparentBG}/>
                            <TouchableHighlight onPress={()=>{this._goTo('Login')}} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Login</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 0,
        paddingRight: 0,
        width: sideMenuWidth,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#B9F6CA'
    },
    navTextContainer: {
        width: sideMenuWidth,
        // height: (upperImageHeight-24)
        height: (height - upperImageHeight - 24)
    },
    navContactUsContainer: {
        position: 'absolute',
        width: sideMenuWidth,
        bottom: 0,
        paddingVertical: 10
    },
    silverColor: {
        backgroundColor: '#000000',
        opacity: 0.5,
        paddingVertical: 20
    },
    navContactUsText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        opacity: 1
    },
    navText: {
        color: textColor,
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 18,
        fontWeight: '500',
        width: sideMenuWidth,
    },
    navButtons: {
        paddingVertical: navPaddingVerticle,
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(199,200,195,1)',
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
    },
    lastNavBtn: {
        paddingTop: navPaddingVerticle,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
    },
    transparentBG:{
        backgroundColor:'transparent'
    }

});

export default mainSideMenu;
