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
    Picker,
    TextInput
} from 'react-native';
import Input from '../../../Commons/Input';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../../../Styles/StyleConstants';

const viewWidth = Dimensions.get('window').width;

const profileEditBottomColor = 'transparent', inputPlaceholderColor = '#808080';

export default class EditProfile extends Component {

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
            username: '',
            isUsernameEditable:true,
            usernameErr: false,
            // contact
            contact: '',
            isContactEditable:true,
            contactErr: false,
            // email
            email: '',
            isEmailEditable:true,
            emailErr: false,
            // primary address
            primaryAddress: '',
            isPrimaryAddressEditable:true,
            // delivery address
            deliveryAddress: '',
            isDeliveryAddressEditable: true,


            avatarSource: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
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
            <ScrollView>
                <View style={styles.container}>
                    {/* Profile Image */}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically, styles.centerHorizontally]}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50
                            }}
                            source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>

                    {/* Name */}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={styles.paddingLeft10}>Name </Text>
                                <Text style={styles.colorRed}>*</Text>
                            </View>
                            <Input
                                inputStyle={[styles.editProfileSettingInputStyle,{borderBottomWidth:(this.state.isUsernameEditable?1:0), borderBottomColor:profileEditBottomColor}]}
                                onChangeText={text => this.setState({username :text})}
                                placeholderTextColor={inputPlaceholderColor}
                                underlineColorAndroid={'transparent'}
                                value={this.state.username}
                                onFocus={() => {}}
                                displayError={this.state.usernameErr}
                                keyboardAppearance="light"
                                editable={this.state.isUsernameEditable}
                                autoCapitalize={'words'}
                                placeholder={'Name'}/>
                        </View>
                    </View>

                    {/*Contact*/}
                    <View style={[styles.profilePageRow, styles.contentInRow]}>
                        <View style={{width: viewWidth-100}}>
                            <View style={[styles.contentInRow]}>
                                <Text style={styles.paddingLeft10}>Contact </Text>
                                <Text style={styles.colorRed}>*</Text>
                            </View>
                            <View style={[styles.contentInRow]}>
                                <Input
                                    inputStyle={{marginLeft: 20, width:viewWidth-100,
                                        color: 'black', borderBottomWidth:(this.state.isContactEditable?1:0), borderBottomColor:profileEditBottomColor}}
                                    onChangeText={text => this.setState({contact :text})}
                                    placeholderTextColor={inputPlaceholderColor}
                                    underlineColorAndroid={'transparent'}
                                    value={this.state.contact}
                                    onFocus={() => {}}
                                    displayError={this.state.contactErr}
                                    keyboardAppearance="light"
                                    keyboardType={'phone-pad'}
                                    editable={this.state.isContactEditable}
                                    onEndEditing={() => this.setState({nameFocus: false})}
                                    autoCapitalize={'words'}
                                    placeholder={'Contact Number'}/>
                            </View>
                        </View>
                    </View>

                    {/*Email*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={styles.paddingLeft10}>Email </Text>
                                <Text style={styles.colorRed}>*</Text>
                            </View>
                            <Input
                                inputStyle={[styles.editProfileSettingInputStyle,{borderBottomWidth:(this.state.isEmailEditable?1:0), borderBottomColor:profileEditBottomColor}]}
                                onChangeText={text => this.setState({email :text})}
                                placeholderTextColor={inputPlaceholderColor}
                                underlineColorAndroid={'transparent'}
                                value={this.state.email}
                                keyboardType={'email-address'}
                                onFocus={() => {}}
                                displayError={this.state.emailErr}
                                keyboardAppearance="light"
                                editable={this.state.isEmailEditable}
                                autoCapitalize={'words'}
                                placeholder={'Email Address'}/>
                        </View>
                    </View>

                    {/*Primary Address*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={styles.paddingLeft10}>Primary Address </Text>
                                <Text style={styles.colorRed}>*</Text>
                            </View>
                            <TextInput
                                style={[styles.editProfileSettingInputStyle,{paddingBottom: 10,borderBottomWidth:(this.state.isPrimaryAddressEditable?1:0), borderBottomColor:profileEditBottomColor, width: viewWidth-100}]}
                                onChangeText={text => this.setState({primaryAddress :text})}
                                editable = {this.state.isPrimaryAddressEditable}
                                multiline = {true}
                                numberOfLines = {4}
                                placeholderTextColor={inputPlaceholderColor}
                                underlineColorAndroid={'transparent'}
                                value={this.state.primaryAddress}
                                keyboardType={'email-address'}
                                keyboardAppearance="light"
                                autoCapitalize={'words'}
                                placeholder={'Primary Address'}/>
                        </View>
                    </View>

                    {/*Delivery Address*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={styles.paddingLeft10}>Delivery Address </Text>
                                <Text style={styles.colorRed}>*</Text>
                            </View>
                            <TextInput
                                style={[styles.editProfileSettingInputStyle,{paddingBottom: 10,borderBottomWidth:(this.state.isDeliveryAddressEditable?1:0), borderBottomColor:profileEditBottomColor, width: viewWidth-100}]}
                                onChangeText={text => this.setState({deliveryAddress :text})}
                                editable = {this.state.isDeliveryAddressEditable}
                                multiline = {true}
                                numberOfLines = {4}
                                placeholderTextColor={inputPlaceholderColor}
                                underlineColorAndroid={'transparent'}
                                value={this.state.deliveryAddress}
                                keyboardType={'email-address'}
                                keyboardAppearance="light"
                                autoCapitalize={'words'}
                                placeholder={'Primary Address'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
