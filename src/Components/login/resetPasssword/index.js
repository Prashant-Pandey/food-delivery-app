import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions, TouchableHighlight, KeyboardAvoidingView, Keyboard
} from 'react-native';
import {Card, ListItem, Button, Text} from 'react-native-elements';
import { Text as RNText } from "react-native";
import Input from '../../../Commons/Input';
import Icon from 'react-native-vector-icons/Entypo';
import {hideNavigationStyle, sideNavigatorButton, navigationStyle} from '../../../Styles/navbarStyles';
import CodeInput from 'react-native-confirmation-code-input';
import styles from '../../../Styles/StyleConstants';



const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, iconColor = 'rgba(255, 193, 7, 0.7)', inActiveOTPFieldColor = 'rgba(255, 193, 7, 0.6)', activeOTPFieldColor = 'rgba(255, 193, 7, 1)';

export default class ResetPassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            OTP: '',
            OTPErr:false,
            password: '',
            passwordErr: false,
            confPassword: '',
            confPasswordErr: false,
            
            OTPDone: false
        };
        this._goToHome = this._goToHome.bind(this);
        this._validateOTP = this._validateOTP.bind(this);
        this._goToLogin = this._goToLogin.bind(this);
    }

    componentWillMount(){
    }

    _goToLogin() {
        Keyboard.dismiss();
        this.props.navigator.dismissAllModals();
    }

    _validateOTP(){
        var re = /^[a-zA-Z0-9]{4}$/;
        this.setState({OTPDone:true});
        this.forceUpdate();
        return re.test(this.state.OTP);
    }

    _goToHome(){
        Keyboard.dismiss();
        this.props.navigator.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
     }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={[styles.signupScreenContainer]}>
                <Image
                    source={require('../../../images/bg.png')}
                    style={styles.fullScreenBackgroundImage}
                    resizeMethod={'scale'}/>
                <View style={styles.signUpScreenTitlePositioning}>
                    <Text style={[styles.whiteText, styles.signUpScreenTitleTextStyle]}>{'Reset Password'.toUpperCase()}</Text>
                </View>
                <TouchableHighlight onPress={this._goToLogin}  style={styles.closeBtn}>
                <Icon
                    name='cross'
                    color='#222'
                    size={16}
                />
            </TouchableHighlight>

            <View style={[styles.inputContainerStyle, styles.otpInputBG]}>
            <CodeInput
            ref="OTP"
            secureTextEntry
            codeLength={4}
            compareWithCode='AsD2'
            activeColor={activeOTPFieldColor}
            inactiveColor={inActiveOTPFieldColor}
            autoFocus={true}
            ignoreCase={true}
            inputPosition='center'
            size={45}
            onFulfill={(isValid) => this._validateOTP(isValid)}
            containerStyle={{ marginTop: 30 }}
            codeInputStyle={{ borderWidth: 1.5, fontSize: 24 }}
            />
            </View>

                <View style={styles.inputContainerStyle}>
                <Input
            width={InputWidth}
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
            leftIcon={
                <Icon
                    name='lock'
                    color={iconColor}
                    size={20}
                />
            }
            inputStyle={styles.signupScreenPassowrdInputStyle}
            secureTextEntry={true}
            keyboardAppearance="light"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            editable={this.state.OTPDone}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            displayError={this.state.passwordErr}
            errorStyle={{textAlign: 'center', fontSize: 12}}
            errorMessage="Must Input Valid OTP"
            blurOnSubmit={true}
            placeholderTextColor="#B2ACAB"
            secureTextEntry={false}
        />
                </View>

                <View style={styles.inputContainerStyle}>
                <Input
            width={InputWidth}
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
            leftIcon={
                <Icon
                    name='lock'
                    color={iconColor}
                    size={20}
                />
            }
            inputStyle={styles.signupScreenPassowrdInputStyle}
            secureTextEntry={true}
            keyboardAppearance="light"
            placeholder="Repeat Password"
            autoCapitalize="none"
            autoCorrect={false}
            editable={this.state.OTPDone}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => this.setState({confPassword: text})}
            value={this.state.confPassword}
            displayError={this.state.confPasswordErr}
            errorStyle={{textAlign: 'center', fontSize: 12}}
            errorMessage="Password must be 8 or more characters long"
            ref={ input => this.confPasswordInput = input}
            blurOnSubmit={true}
            placeholderTextColor="#B2ACAB"
        />
                </View>

                <Button
                buttonStyle={styles.loginScreenLoginBtn}
                onPress={this._goToHome}
                title='Reset Password'/>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}
