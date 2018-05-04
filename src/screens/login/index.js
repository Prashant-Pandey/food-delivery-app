import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions, TouchableHighlight, KeyboardAvoidingView, AsyncStorage, Keyboard,
    ToastAndroid
} from 'react-native';
import {Card, ListItem, Input as input, Button, Text} from 'react-native-elements';
import { Text as RNText } from "react-native";
import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/Entypo';
import {coloredNavigationStyle, navigationStyle, hideNavigationStyle} from '../../navbarStyles';
import styles from '../../Constants/StyleConstants';
const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, iconColor = 'rgba(255, 193, 7, 0.7)';
const inputPlaceholderColor = "#B2ACAB";


export default class Login extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../images/menu.png'), // for icon button, provide the local image asset name
            id: 'sideMenu' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

      
constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        emailErr:false,
        passwordErr: false,
    };
    this._openSignUpPage = this._openSignUpPage.bind(this);
    this._doLogin = this._doLogin.bind(this);
    this._validateEmail = this._validateEmail.bind(this);
    this._goToHome = this._goToHome.bind(this);
    this._goToResetPassword = this._goToResetPassword.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

} 

onNavigatorEvent(event) {
    console.log('event triggered');
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
                screen: 'Orders', title: 'Your Orders',
                
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
    
_validateEmail(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email);
}

_goToHome() {
    Keyboard.dismiss();
    this
        .props
        .navigator
        .resetTo({screen: 'Home', title: 'Welcome to Foodie',
            
            navigatorStyle: navigationStyle,
            animated: true, animationType: 'fade'});
}

_goToResetPassword() {
        Keyboard.dismiss();
        this.props.navigator.showModal({
            screen: 'Login.ResetPassword', // unique ID registered with Navigation.registerScreen
            title: 'RESET PASSWORD', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

_doLogin(){

    Keyboard.dismiss();
    if(Platform.OS !== 'ios'){
        ToastAndroid.showWithGravity(
            'Loginned Successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
    this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
    
    navigatorStyle: navigationStyle,
    animated: true, animationType: 'fade'});
}

_openSignUpPage(){
    Keyboard.dismiss();
    this.props.navigator.showModal({
        screen: 'Login.SignUp', // unique ID registered with Navigation.registerScreen
        title: 'REGISTER & SIGN IN', // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}

render() {
    return (
        <View style={[styles.loginScreenContainer]}>
        <Image
            source={require('../../images/bg.png')}
            style={styles.fullScreenBackgroundImage}
            resizeMethod={'scale'}/>
        <TouchableHighlight onPress={this._goToHome} underlayColor={"#fff"}  style={styles.closeBtn}>
            <Icon
                name='cross'
                color='#222222'
                size={20} />
        </TouchableHighlight>

        <View style={styles.loginScreenEmailInputContainer}>
        <Input
            width={InputWidth}
            leftIcon={
                <Icon
                    name='mail-with-circle'
                    color='rgba(255, 193, 7, 0.7)'
                    size={20}/>
            }
            inputStyle={styles.loginScreenEmailInput}
            onChangeText={text => this.setState({email :text})}
            value={this.state.email}
            secureTextEntry={false}
            displayError={this.state.emailErr}
            returnKeyType="next"
            keyboardAppearance="light"
            placeholder="Email"
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onSubmitEditing={() => {
                if(this._validateEmail()){
                    this.passwordInput.focus();
                }else{
                    this.setState({
                        emailErr: true
                    });
                }
            }}
            blurOnSubmit={false}
            placeholderTextColor={inputPlaceholderColor}
            errorStyle={[styles.textAlignCenter, styles.fontSize12]}
            errorMessage="Please enter a valid email address"/>
        </View>

        <View style={[ styles.loginScreenPasswordInputContainer]}>

            <Input
                width={InputWidth}
                leftIcon={
                    <Icon
                        name='lock'
                        color={iconColor}
                        size={20}
                    />
                }
                showPasswordIcon={
                    <Icon
                        name='eye'
                        size={24}
                        color={iconColor}
                    />
                }
                hidePasswordIcon={
                    <Icon
                        name='eye-with-line'
                        size={24}
                        color={iconColor}
                    />
                }

                inputStyle={styles.loginScreenPassowrdInputStyle}
                secureTextEntry={true}
                keyboardAppearance="light"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
                displayError={this.state.passwordErr}
                errorStyle={[styles.textAlignCenter, styles.fontSize12]}
                errorMessage="Please confirm correct email and password"
                ref={ input => this.passwordInput = input}
                blurOnSubmit={true}
                placeholderTextColor={inputPlaceholderColor}
            />

        </View>
        <Button
            buttonStyle={styles.loginScreenLoginBtn}
            onPress={this._doLogin}
            title='Login'/>
                <TouchableHighlight 
                underlayColor={'transparent'}
                onPress={this._openSignUpPage}>
            <View style={[styles.contentInRow, styles.marginTop50]}>
                <RNText style={[styles.whiteText, styles.registerText]}>
                    Create an Account ? 
                </RNText>
                <RNText style={[styles.paddingHorizontal10,styles.loginScreenRegisterLink, styles.registerText]}>Register</RNText>
            </View> 
        </TouchableHighlight>
        <View style={styles.contentInRow}>
            <TouchableHighlight 
            underlayColor={'transparent'}
            onPress={this._goToResetPassword}>
                <RNText style={[styles.paddingHorizontal10, styles.loginScreenRegisterLink,
                    styles.whiteText,
                    styles.registerText]}>Forgot Password</RNText>
            </TouchableHighlight>
        </View>
    </View>
    );
}
}
