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
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../navbarStyles";
import styles from '../../Constants/StyleConstants';


export default class Settings extends Component {

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
            
                default:
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
                                  style={styles.textAlignCenter}
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
