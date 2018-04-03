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

const height = Dimensions.get('window').height, width = Dimensions.get('window').width;

const navPaddingVerticle = 8, iconColor = 'rgba(255, 193, 7, 1)', textColor = 'rgba(255, 193, 7, 1)',
    sideMenuWidth = 250, upperImageHeight = height / 3;

class mainSideMenu extends React.Component {
    constructor(props) {
        super(props);

        this._toggleDrawer = this
            ._toggleDrawer
            .bind(this);

        this._goToHome = this
            ._goToHome
            .bind(this);

        this._gotoOrders = this
            ._gotoOrders
            .bind(this);

        this._gotoDeals = this
            ._gotoDeals
            .bind(this);

        this._goToSettings = this
            ._goToSettings
            .bind(this);

        this._goToLogin = this
            ._goToLogin
            .bind(this);

    }

    _goToHome() {
        this._toggleDrawer();
        this
            .props
            .navigator
            .resetTo({
                screen: 'Home', title: 'Welcome to Foodie',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: navigationStyle,
                animated: true, animationType: 'fade'
            });
    }

    _gotoOrders() {
        this._toggleDrawer();
        // this
        // .props
        // .navigator
        // .resetTo({
        //     screen: 'Orders', title: 'Orders Summary',
        //     navigatorButtons: sideNavigatorButton,
        //     navigatorStyle: coloredNavigationStyle,
        //     animated: true, animationType: 'fade'
        // });

        // const navigatorID = this.props.navigator.navigatorID.split('_')[0] + '_nav';
        
        // this
        // .props
        // .navigator
        // .resetTo({
        //     screen: 'Orders', title: 'Orders Summary',
        //     navigatorButtons: sideNavigatorButton,
        //     navigatorStyle: coloredNavigationStyle,
        //     animated: true, animationType: 'fade'
        // });

        this.props.navigator.handleDeepLink({
            link: 'Orders'
          });
        // this.props.navigator.handleDeepLink({ link: "Orders" });

    }

    _gotoDeals() {
        this._toggleDrawer();
        this
            .props
            .navigator
            .resetTo({
                screen: 'Deals', title: 'Deals for You',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: coloredNavigationStyle,
                animated: true, animationType: 'fade'
            });
    }

    _goToSettings() {
        this._toggleDrawer();
        this
            .props
            .navigator
            .resetTo({
                screen: 'Settings', title: 'Settings',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: coloredNavigationStyle,
                animated: true, animationType: 'fade'
            });
    }




    _goToLogin() {
        this._toggleDrawer();
        this
            .props
            .navigator
            .resetTo({
                screen: 'Login', title: '',
                navigatorStyle: hideNavigationStyle, animated: true, animationType: 'fade'
            });

    }

    _toggleDrawer() {
        this
            .props
            .navigator
            .toggleDrawer({to: 'closed', side: 'left', animated: true});
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
                            top: (upperImageHeight-85),
                            width: sideMenuWidth
                        }}
                        blurRadius={10}
                        source={require('../images/navBarDesign.jpg')}/>
                <ScrollView>
                    <View style={styles.navTextContainer}>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-home-outline'} color={iconColor} size={24}/>
                            <TouchableHighlight onPress={this._goToHome} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Home</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-beer-outline'} color={iconColor} size={24}/>
                            <TouchableHighlight onPress={this._gotoOrders} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Order</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-barcode-outline'} color={iconColor} size={24}/>
                            <TouchableHighlight onPress={this._gotoDeals} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Deals</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.navButtons}>
                            <Icon name={'ios-settings-outline'} color={iconColor} size={24}/>
                            <TouchableHighlight onPress={this._goToSettings} underlayColor={'transparent'}>
                                <Text style={styles.navText}>Settings</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.lastNavBtn}>
                            <Icon name={'ios-log-in-outline'} color={iconColor} size={24}/>
                            <TouchableHighlight onPress={this._goToLogin} underlayColor={'transparent'}>
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
        flex: 1,
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
        borderBottomWidth: 0.5,
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
    }

});

export default mainSideMenu;
