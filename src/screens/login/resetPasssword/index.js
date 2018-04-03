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
import CodeInput from 'react-native-confirmation-code-input';


const viewWidth = Dimensions.get('window').width;
const InputWidth = viewWidth-200, iconColor = 'rgba(255, 193, 7, 0.7)';

export default class ResetPassword extends Component {

    constructor(){
        super();
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
        this.validateOTP = this.validateOTP.bind(this);
        this._goToLogin = this._goToLogin.bind(this);
    }

    componentWillMount(){
    }

    _goToLogin() {
        Keyboard.dismiss();
        Navigation.dismissAllModals();
    }

    validateOTP(){
        var re = /^[a-zA-Z0-9]{4}$/;
        this.setState({OTPDone:true});
        this.forceUpdate();
        return re.test(this.state.OTP);
    }

    _goToHome(){
        Keyboard.dismiss();
        Navigation.dismissAllModals();
        this.props.navigator.resetTo({screen: 'Home', title: 'Welcome to Foodie',
        navigatorButtons: sideNavigatorButton,
        navigatorStyle: navigationStyle,
        animated: true, animationType: 'fade'});
     }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={[styles.container]}>
                <View style={{position:'absolute', top:20}}>
                    <Text style={{fontSize: 23, fontWeight:'400', fontFamily:'Academy Engraved LET'}}>{'Reset Password'.toUpperCase()}</Text>
                </View>
                <TouchableHighlight onPress={this._goToLogin}  style={styles.closeBtn}>
                <Icon
                    name='cross'
                    color='#ffffff'
                    size={20}
                />
            </TouchableHighlight>

            <View style={[styles.inputContainerStyle, styles.otpInputBG]}>
            <CodeInput
            ref="OTP"
            secureTextEntry
            codeLength={4}
            compareWithCode='AsD2'
            activeColor='rgba(49, 180, 4, 1)'
            inactiveColor='rgba(49, 180, 4, 1.3)'
            autoFocus={false}
            ignoreCase={true}
            inputPosition='center'
            size={50}
            onFulfill={(isValid) => this.validateOTP(isValid)}
            containerStyle={{ marginTop: 30 }}
            codeInputStyle={{ borderWidth: 1.5 }}
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
            inputStyle={{marginLeft: 20, color: '#ffffff'}}
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
                buttonStyle={{
                backgroundColor: "rgba(255, 179, 0, 1)",
                minWidth: 150,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 24
                }}
                onPress={this._goToHome}
                title='Reset Password'/>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: Dimensions.get('window').height-24,
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignItems: 'center'
    },
    registerText: {
        fontFamily:'AcademyEngravedLetPlain', fontSize: 18, fontWeight:'bold'
    },
    inputContainerStyle: {backgroundColor: 'grey', marginVertical:5, borderRadius:3, flexDirection: 'row', alignItems: 'center'},
    otpInputBG:{backgroundColor:'transparent'},
    closeBtn: {position:'absolute', top: 16, right: 0, backgroundColor:'#222222', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 5, paddingLeft: 10, paddingRight:20}
});
