/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridView from '../../Components/GridView';
import {navigationStyle, sideNavigatorButton, hideNavigationStyle, coloredNavigationStyle} from '../../navbarStyles';



export default class Settings extends Component {

    constructor(){
        super();
        // this._goToDeepSettings = this._goToDeepSettings.bind(this);
    }

    _goToDeepSettings(goToScreen, title){
        this.props.navigator.showModal({
            screen: goToScreen, // unique ID registered with Navigation.registerScreen
            title: title.toUpperCase(), // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: coloredNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }


    render() {
        // Taken from https://flatuicolors.com/
        const items = [
            {name: 'Edit Profile', goToScreen:'Settings.EditProfile', code: '#FFA000', icon: 'approval'}, {name: 'Change Password', goToScreen:'Settings.ChangePassword', code: '#3F51B5', icon: 'textbox-password'},
            {name: 'Delete Account', goToScreen:'Settings.DeleteAccount', code: '#2196F3', icon: 'delete-empty'},
            {name: 'About Foodie', goToScreen:'Settings.AboutFoodie', code: '#8BC34A', icon: 'food-fork-drink'}
        ];
        return (
           <ScrollView>
               <GridView
                   itemDimension={130}
                   items={items}
                   style={styles.gridView}
                   renderItem={item => (
                       <TouchableHighlight style={[styles.itemContainer, {backgroundColor: item.code}]} onPress={this._goToDeepSettings.bind(this,item.goToScreen, item.name)}>
                          <View>
                              <Icon
                                  name={item.icon}
                                  color='#ffffff'
                                  size={50}
                                  style={{textAlign:'center'}}
                              />
                              <Text style={styles.itemName}>{item.name}</Text>
                          </View>
                       </TouchableHighlight>
                   )}
               />
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 25,
        flex: 1,
        minHeight:Dimensions.get('window').height-24,
        alignContent:'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        textAlign:'center'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
