/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Picker
} from 'react-native';
import {Button} from 'react-native-elements';
import Input from '../../../Components/Input';
import Icon from 'react-native-vector-icons/Entypo';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const IconColor = '#f1c40f', changePasswordBottomColor = 'transparent', InputWidth=viewWidth-140;

export default class ChangePassword extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../../images/back.png'), // for icon button, provide the local image asset name
            id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            // username
            currentPassword: '',
            currentPasswordErr: false,
            newPassword:'',
            newPasswordErr: false,
            repeatNewPassword: '',
            repeatNewPasswordErr: false,
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
          if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.dismissAllModals();
          }
        }
      }

      
    render() {
        return (
            <ScrollView style={{alignContent:'stretch'}}>
                {/* Current Password */}
                <View style={{borderBottomWidth:1,borderBottomColor:changePasswordBottomColor}}>
                    <View style={[styles.contentInRow, styles.paddingTop10]}>
                        <Text style={{paddingLeft:10}}>Current Password </Text>
                        <Text style={{color:'red'}}>*</Text>
                    </View>
                    <View style={[styles.centerVertically]}>
                        <Input
                            width={InputWidth}
                            showPasswordIcon={
                                <Icon
                                    name='eye'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            hidePasswordIcon={
                                <Icon
                                    name='eye-with-line'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            inputStyle={{color: '#ffffff'}}
                            secureTextEntry={true}
                            keyboardAppearance="light"
                            placeholder="Enter Your Current Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            returnKeyType="done"
                            onChangeText={text => this.setState({currentPassword: text})}
                            value={this.state.currentPassword}
                            displayError={this.state.currentPasswordErr}
                            errorStyle={{textAlign: 'center', fontSize: 12}}
                            errorMessage="check your current password"
                            blurOnSubmit={true}
                            placeholderTextColor="#B2ACAB"
                        />
                    </View>
                </View>
                {/* New Password */}
                <View style={{borderBottomWidth:1,borderBottomColor:changePasswordBottomColor}}>
                    <View style={[styles.contentInRow, styles.paddingTop10]}>
                        <Text style={{paddingLeft:10}}>New Password </Text>
                        <Text style={{color:'red'}}>*</Text>
                    </View>
                    <View style={[styles.centerVertically]}>
                        <Input
                            width={InputWidth}
                            showPasswordIcon={
                                <Icon
                                    name='eye'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            hidePasswordIcon={
                                <Icon
                                    name='eye-with-line'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            inputStyle={{color: '#ffffff'}}
                            secureTextEntry={true}
                            keyboardAppearance="light"
                            placeholder="Enter Your New Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            returnKeyType="done"
                            onChangeText={text => this.setState({newPassword: text})}
                            value={this.state.newPassword}
                            displayError={this.state.newPasswordErr}
                            errorStyle={{textAlign: 'center', fontSize: 12}}
                            errorMessage="check your new password"
                            ref={ input => this.newPasswordInput = input}
                            blurOnSubmit={true}
                            placeholderTextColor="#B2ACAB"
                        />
                    </View>
                </View>
                {/* Repeat New Password */}
                <View style={{borderBottomWidth:1,borderBottomColor:changePasswordBottomColor}}>
                    <View style={[styles.contentInRow, styles.paddingTop10]}>
                        <Text style={{paddingLeft:10}}>Repeat New Password </Text>
                        <Text style={{color:'red'}}>*</Text>
                    </View>
                    <View style={[styles.centerVertically]}>
                        <Input
                            width={InputWidth}
                            showPasswordIcon={
                                <Icon
                                    name='eye'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            hidePasswordIcon={
                                <Icon
                                    name='eye-with-line'
                                    size={24}
                                    color={IconColor}
                                />
                            }
                            inputStyle={{color: '#ffffff'}}
                            secureTextEntry={true}
                            keyboardAppearance="light"
                            placeholder="Repeat Your New Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            returnKeyType="done"
                            onChangeText={text => this.setState({repeatNewPassword: text})}
                            value={this.state.repeatNewPassword}
                            displayError={this.state.repeatNewPasswordErr}
                            errorStyle={{textAlign: 'center', fontSize: 12}}
                            errorMessage="Please confirm correct email and password"
                            ref={ input => this.repeatNewPasswordInput = input}
                            blurOnSubmit={true}
                            placeholderTextColor="#B2ACAB"
                        />
                    </View>
                </View>
                <Button
                    onPress={this._goToExplore}
                    textStyle={{
                        color: '#ffffff',
                        fontSize: 18
                    }}
                    buttonStyle={{
                        backgroundColor: "#0FB14A",
                        minWidth: viewWidth-30,
                        height: 50,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 0,
                        marginTop: 24,
                    }}
                    title='Change Password'/>
            </ScrollView>
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
    profilePageRow:{
        flex:1
    },
    paddingTop10:{
        paddingTop: 15,
    }
});
