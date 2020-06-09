import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions, TouchableHighlight, KeyboardAvoidingView, Keyboard
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import { Text as RNText } from "react-native";
import Input from '../../../Commons/Input';
import Icon from 'react-native-vector-icons/Entypo';
import {navigationStyle} from '../../../Styles/navbarStyles';
import styles from '../../../Styles/StyleConstants';

const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, iconColor = 'rgba(255, 193, 7, 0.7)';

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailErr:false,
            passwordErr: false,
        };
        this._signUp = this._signUp.bind(this);
        this._validateEmail = this._validateEmail.bind(this);
        this._goToLogin = this._goToLogin.bind(this);
        this._facebookLogin = this._facebookLogin.bind(this);
        this._twitterLogin = this._twitterLogin.bind(this);
    }

    componentWillMount(){
       
    }

    
    _facebookLogin(){
        Keyboard.dismiss();
        this.props.navigator.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
    }

    _twitterLogin(){
        Keyboard.dismiss();
        this.props.navigator.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
    }

    _goToLogin() {
        Keyboard.dismiss();
        this.props.navigator.dismissAllModals();
    }

    _validateEmail(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    _signUp(){
        console.log(this.state.email);
        if(this._validateEmail()){
            if(this.state.password.length>=8){
                Keyboard.dismiss();
                this.props.navigator.dismissAllModals();
                this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
                
                navigatorStyle: navigationStyle,
                animated: true, animationType: 'fade'});
            }else{
                this.setState({
                    passwordErr: true,
                });
                this.forceUpdate();
            }
        }else{
            this.setState({
                emailErr: true,
            });
            this.forceUpdate();
        }
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
                    <Text style={[styles.whiteText, styles.signUpScreenTitleTextStyle]}>REGISTER & SIGN IN</Text>
                </View>
                <TouchableHighlight onPress={this._goToLogin}  style={styles.closeBtn}>
                <Icon
                    name='cross'
                    color='#222'
                    size={16}
                />
            </TouchableHighlight>
                <View style={styles.inputContainerStyle}>
                <Input
                width={InputWidth}
                leftIcon={
                    <Icon
                        name='mail-with-circle'
                        color={iconColor}
                        size={20}
                    />
                }
                inputStyle={styles.signupScreenEmailInput}
                keyboardAppearance="light"
                placeholder="Email"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => this.setState({email:text})}
                value={this.state.email}
                displayError={this.state.emailErr}
                keyboardType="email-address"
                returnKeyType="next"
                secureTextEntry={false}
                ref={ input => this.emailInput = input }
                onSubmitEditing={() => {
                    if(this._validateEmail()){
                        this.setState({emailErr:false});
                        this.forceUpdate();
                        this.passwordInput.focus();
                    }else{
                        this.setState({
                            emailErr: true
                        });
                    }
                }}
                blurOnSubmit={false}
                placeholderTextColor="#B2ACAB"
                errorStyle={[styles.textAlignCenter, styles.fontSize12]}
                errorMessage="Please enter a valid email address"
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
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            displayError={this.state.passwordErr}
            errorStyle={[styles.textAlignCenter, styles.fontSize12]}
            errorMessage="Please confirm correct email and password"
            ref={ input => this.passwordInput = input}
            blurOnSubmit={true}
            placeholderTextColor="#B2ACAB"
        />
                </View>
                    <Button
                        buttonStyle={styles.loginScreenLoginBtn}
                        onPress={this._signUp}
                        title='SIGN UP'/>

                        <View style={{flexDirection:'row'}}>
                        <Button
                            buttonStyle={[styles.signupScreenOtherSignUpBtn, styles.signupScreenOtherSignUpBtnFacebook]}

                            onPress={this._facebookLogin}
                            title='FACEBOOK'/>
                        <Button
                            buttonStyle={[styles.signupScreenOtherSignUpBtn, styles.signupScreenOtherSignUpBtnTwitter]}
                            onPress={this._twitterLogin}
                            title='TWITTER'/>
                            </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}
