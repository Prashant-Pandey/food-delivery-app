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
import {Navigation} from "react-native-navigation";
import {Card, ListItem, Input as input, Button, Text} from 'react-native-elements';
import { Text as RNText } from "react-native";
import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/Entypo';
import {modalNaviagtionStyle, coloredNavigationStyle, rightCrossButton, sideNavigatorButton, navigationStyle, hideNavigationStyle} from '../../navbarStyles';
const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, InputBorderRadius = 5, iconColor = 'rgba(255, 193, 7, 0.7)';


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
    this.openSignUpPage = this.openSignUpPage.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
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
                screen: 'Orders', title: 'Orders Summary',
                
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
validateEmail(){
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
        Navigation.showModal({
            screen: 'Login.ResetPassword', // unique ID registered with Navigation.registerScreen
            title: 'RESET PASSWORD', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

doLogin(){

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

openSignUpPage(){
    Keyboard.dismiss();
    Navigation.showModal({
        screen: 'Login.SignUp', // unique ID registered with Navigation.registerScreen
        title: 'REGISTER & SIGN IN', // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}

render() {
    return (
        <View style={[styles.container]}>
        <Image
            source={require('../../images/bg.png')}
            style={{
            height: viewHeight+100,
            width: viewWidth,
            position: 'absolute',
            top:-10
        }}
        resizeMethod={'scale'}/>
        <TouchableHighlight onPress={this._goToHome}  style={styles.closeBtn}>
            <Icon
                name='cross'
                color='#222222'
                size={20}
            />
        </TouchableHighlight>

        <View style={{
            backgroundColor: '#ffffff',
            borderBottomWidth: 0.5,
            borderBottomColor:'rgba(199,200,195,1)',
            borderTopLeftRadius: InputBorderRadius,
            borderTopRightRadius: InputBorderRadius,
        }}>
        <Input
            width={InputWidth}
            leftIcon={
                <Icon
                    name='mail-with-circle'
                    color='rgba(255, 193, 7, 0.7)'
                    size={20}
                />
            }
            inputStyle={{marginLeft: 20, color: 'black', borderBottomColor: '#000'}}
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
                if(this.validateEmail()){
                    this.passwordInput.focus();
                }else{
                    this.setState({
                        emailErr: true
                    });
                }
            }}
            blurOnSubmit={false}
            placeholderTextColor="#B2ACAB"
            errorStyle={{textAlign: 'center', fontSize: 12}}
            errorMessage="Please enter a valid email address"/>
        </View>

        <View style={{
            marginBottom: 28,
            backgroundColor: '#ffffff',
            borderBottomLeftRadius: InputBorderRadius,
            borderBottomRightRadius: InputBorderRadius,
        }}>

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

                inputStyle={{marginLeft: 20, color: '#000000'}}
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
                errorStyle={{textAlign: 'center', fontSize: 12}}
                errorMessage="Please confirm correct email and password"
                ref={ input => this.passwordInput = input}
                blurOnSubmit={true}
                placeholderTextColor="#B2ACAB"
            />

        </View>
        <Button
            buttonStyle={{
            backgroundColor: "rgba(255, 179, 0, 1)",
            minWidth: 150,
            height: 50,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginTop: 24
            }}
            onPress={this.doLogin}
            title='Login'/>
                <TouchableHighlight onPress={this.openSignUpPage}>
            <View style={{flexDirection:'row', marginTop:50}}>
                <RNText style={[{color:'#fff'}, styles.registerText]}>
                    Create an Account ? 
                </RNText>
                <RNText style={[{color:'#FF6F00', paddingHorizontal: 10, paddingBottom: 5}, styles.registerText]}>Register</RNText>
            </View> 
        </TouchableHighlight>
        <View style={{flexDirection:'row'}}>
            <TouchableHighlight onPress={this._goToResetPassword}>
                <RNText style={[{color:'white', paddingHorizontal: 10, paddingBottom: 5}, styles.registerText]}>Forgot Password</RNText>
            </TouchableHighlight>
        </View>
    </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    registerText: {
        fontFamily:'Arial-BoldMT', fontSize: 18, fontWeight:'bold', backgroundColor:"transparent"
    },
    closeBtn: {position:'absolute', top: 16, right: 0, backgroundColor:'#ffffff', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 5, paddingLeft: 10, paddingRight:20}
});
