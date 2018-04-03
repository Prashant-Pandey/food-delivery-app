import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions, TouchableHighlight, KeyboardAvoidingView, Keyboard
} from 'react-native';
import {Navigation} from "react-native-navigation";
import {Card, ListItem, Button, Text} from 'react-native-elements';
import { Text as RNText } from "react-native";
import Input from '../../../Components/Input';
import Icon from 'react-native-vector-icons/Entypo';
import {hideNavigationStyle, sideNavigatorButton, navigationStyle} from '../../../navbarStyles';

const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, iconColor = 'rgba(255, 193, 7, 0.7)';

export default class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            emailErr:false,
            passwordErr: false,
        };
        this.signUp = this.signUp.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this._goToLogin = this._goToLogin.bind(this);
        this._facebookLogin = this._facebookLogin.bind(this);
        this._twitterLogin = this._twitterLogin.bind(this);
    }

    componentWillMount(){
       
    }

    _facebookLogin(){
        Keyboard.dismiss();
        Navigation.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        navigatorButtons: sideNavigatorButton,
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
    }

    _twitterLogin(){
        Keyboard.dismiss();
        Navigation.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        navigatorButtons: sideNavigatorButton,
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
    }

    _goToLogin() {
        Keyboard.dismiss();
        Navigation.dismissAllModals();
    }

    validateEmail(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    signUp(){
        console.log(this.state.email);
        if(this.validateEmail()){
            if(this.state.password.length>=8){
                Keyboard.dismiss();
                Navigation.dismissAllModals();
                this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
                navigatorButtons: sideNavigatorButton,
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
                <KeyboardAvoidingView style={[styles.container]}>
                <View style={{position:'absolute', top:20}}>
                    <Text style={{fontSize: 23, fontWeight:'400', fontFamily:'sans-serif-condensed'}}>REGISTER & SIGN IN</Text>
                </View>
                <TouchableHighlight onPress={this._goToLogin}  style={styles.closeBtn}>
                <Icon
                    name='cross'
                    color='#ffffff'
                    size={20}
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
                inputStyle={{marginLeft: 20, color: 'white', borderBottomColor: '#000'}}
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
                    if(this.validateEmail()){
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
                errorStyle={{textAlign: 'center', fontSize: 12}}
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
            inputStyle={{marginLeft: 20, color: '#ffffff'}}
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
                        backgroundColor: "rgba(255, 179, 0, 0.9)",
                        minWidth: 150,
                        height: 50,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 25,
                        marginVertical: 30
                        }}
                        onPress={this.signUp}
                        text='SIGN UP'/>

                        <View style={{flexDirection:'row'}}>
                        <Button
                            buttonStyle={{
                            backgroundColor: "#4867AA",
                            width: (Dimensions.get('window').width/2-20),
                            marginRight:5,
                            height: 50,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 8,
                            marginTop: 24
                            }}

                            onPress={this._facebookLogin}
                            text='FACEBOOK'/>
                        <Button
                            buttonStyle={{
                            backgroundColor: "#3B94D9",
                            width: (Dimensions.get('window').width/2-20),
                            height: 50,
                            marginLeft:5,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 8,
                            marginTop: 24
                            }}
                            onPress={this._twitterLogin}
                            text='TWITTER'/>
                            </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignItems: 'center'
    },
    registerText: {
        fontFamily:'Roboto', fontSize: 18, fontWeight:'bold'
    },
    inputContainerStyle: {backgroundColor: 'grey', marginVertical:5, borderRadius:3, flexDirection: 'row', alignItems: 'center'},
    closeBtn: {position:'absolute', top: 16, right: 0, backgroundColor:'#222222', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 5, paddingLeft: 10, paddingRight:20}
});
