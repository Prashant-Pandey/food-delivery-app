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
import Input from '../../../Components/Input';
import Icon from 'react-native-vector-icons/Entypo';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const IconColor = '#ff00ff', profileEditBottomColor = '#ff0';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username
            username: 'Prashant Pandey',
            isUsernameEditable:false,
            usernameErr: false,
            // contact
            contact: 'Prashant Pandey',
            isContactEditable:false,
            contactErr: false,
            // email
            email: 'Prashant Pandey',
            isEmailEditable:false,
            emailErr: false,
            // primary address
            primaryAddress: 'Prashant Pandey',
            isPrimaryAddressEditable:false,
            // delivery address
            deliveryAddress: 'Prashant Pandey',
            isDeliveryAddressEditable: false,


            avatarSource: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }

    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* Profile Image */}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100
                            }}
                            source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <TouchableOpacity
                            onPress={() => {}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name="edit" size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>

                    {/* Name */}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={{paddingLeft:10}}>Name </Text>
                                <Text style={{color:'red'}}>*</Text>
                            </View>
                            <Input
                                inputStyle={{marginLeft: 20, color: 'black', borderBottomWidth:(this.state.isUsernameEditable?1:0), borderBottomColor:profileEditBottomColor}}
                                onChangeText={text => this.setState({username :text})}
                                placeholderTextColor={'#808080'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.username}
                                onFocus={() => {}}
                                displayError={this.state.usernameErr}
                                keyboardAppearance="light"
                                editable={this.state.isUsernameEditable}
                                autoCapitalize={'words'}
                                placeholder={'Name'}/>
                        </View>
                        <TouchableOpacity
                            onPress={() => {this.setState({isUsernameEditable:!this.state.isUsernameEditable}); this.forceUpdate();}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name={this.state.isUsernameEditable?"save":"edit"} size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>

                    {/*Contact*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View style={{width: viewWidth-100}}>
                            <View style={[styles.contentInRow]}>
                                <Text style={{paddingLeft:10}}>Contact </Text>
                                <Text style={{color:'red'}}>*</Text>
                            </View>
                            <View style={[styles.contentInRow, styles.centerVertically]}>
                                <Picker
                                    style={{minWidth:90}}
                                    selectedValue={this.state.language}
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="+91" value="India" />
                                    <Picker.Item label="+16" value="US" />
                                </Picker>
                                <Input
                                    inputStyle={{marginLeft: 20, width:viewWidth-200,
                                        color: 'black', borderBottomWidth:(this.state.isContactEditable?1:0), borderBottomColor:profileEditBottomColor}}
                                    onChangeText={text => this.setState({contact :text})}
                                    placeholderTextColor={'#808080'}
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
                        <TouchableOpacity
                            onPress={() => {this.setState({isContactEditable:!this.state.isContactEditable}); this.forceUpdate();}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name={this.state.isContactEditable?"save":"edit"} size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>

                    {/*Email*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={{paddingLeft:10}}>Email </Text>
                                <Text style={{color:'red'}}>*</Text>
                            </View>
                            <Input
                                inputStyle={{marginLeft: 20, color: 'black', borderBottomWidth:(this.state.isEmailEditable?1:0), borderBottomColor:profileEditBottomColor}}
                                onChangeText={text => this.setState({email :text})}
                                placeholderTextColor={'#808080'}
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
                        <TouchableOpacity
                            onPress={() => {this.setState({isEmailEditable:!this.state.isEmailEditable}); this.forceUpdate();}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name={this.state.isEmailEditable?"save":"edit"} size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>

                    {/*Primary Address*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={{paddingLeft:10}}>Primary Address </Text>
                                <Text style={{color:'red'}}>*</Text>
                            </View>
                            <TextInput
                                style={{marginLeft: 20, color: 'black',borderBottomWidth:(this.state.isPrimaryAddressEditable?1:0), borderBottomColor:profileEditBottomColor, width: viewWidth-100}}
                                onChangeText={text => this.setState({primaryAddress :text})}
                                editable = {this.state.isPrimaryAddressEditable}
                                multiline = {true}
                                numberOfLines = {4}
                                placeholderTextColor={'#808080'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.primaryAddress}
                                keyboardType={'email-address'}
                                keyboardAppearance="light"
                                autoCapitalize={'words'}
                                placeholder={'Primary Address'}/>
                        </View>
                        <TouchableOpacity
                            onPress={() => {this.setState({isPrimaryAddressEditable:!this.state.isPrimaryAddressEditable}); this.forceUpdate();}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name={this.state.isPrimaryAddressEditable?"save":"edit"} size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>

                    {/*Delivery Address*/}
                    <View style={[styles.profilePageRow, styles.contentInRow, styles.centerVertically]}>
                        <View>
                            <View style={[styles.contentInRow]}>
                                <Text style={{paddingLeft:10}}>Delivery Address </Text>
                                <Text style={{color:'red'}}>*</Text>
                            </View>
                            <TextInput
                                style={{marginLeft: 20, color: 'black',borderBottomWidth:(this.state.isDeliveryAddressEditable?1:0), borderBottomColor:profileEditBottomColor, width: viewWidth-100}}
                                onChangeText={text => this.setState({deliveryAddress :text})}
                                editable = {this.state.isDeliveryAddressEditable}
                                multiline = {true}
                                numberOfLines = {4}
                                placeholderTextColor={'#808080'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.deliveryAddress}
                                keyboardType={'email-address'}
                                keyboardAppearance="light"
                                autoCapitalize={'words'}
                                placeholder={'Primary Address'}/>
                        </View>
                        <TouchableOpacity
                            onPress={() => {this.setState({isDeliveryAddressEditable:!this.state.isDeliveryAddressEditable}); this.forceUpdate();}}
                            style={{
                                padding: 8,
                                borderRadius: 2
                            }}>
                            <Icon name={this.state.isDeliveryAddressEditable?"save":"edit"} size={30} color={IconColor}/>
                        </TouchableOpacity>
                    </View>


                </View>
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
    profilePageRow:{marginBottom: 16, justifyContent:'space-between'},
    editProfileRow:{display:'flex', width: Dimensions.get('window').width, flexDirection:'row'},
    Button: {
        marginBottom: 16,
        alignSelf: 'center',
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#007EA7'
    },
    autocompleteContainer: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    listrow: {
        borderWidth: 0.5,
        borderColor: '#000',
        marginVertical: 1,
        paddingLeft: 16,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    listText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007EA7'
    },
    container: {
        margin: 16
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        alignSelf: 'center'
    },
    error: {
        fontSize: 12,
        color: 'red',
        marginBottom: 2
    },
    input: {
        borderWidth: 1,
        marginBottom: 4,
        borderColor: '#000',
        height: 45
    },
    picker: {
        width: '50%',
        height: 45
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000'
    },
    label: {
        fontSize: 14,
        margin: 4,
        fontWeight: '100',
        color: '#808080'
    },
    spinner: {
        position: 'absolute',
        top: '40%',
        alignSelf: 'center',
        height: 50,
        width: 50
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 4
    }
});
