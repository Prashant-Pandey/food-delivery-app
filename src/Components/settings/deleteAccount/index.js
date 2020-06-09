
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
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

const IconColor = '#ff00ff', profileEditBottomColor = '#ff0';

export default class DeleteAccount extends Component {

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
                    <Text style={styles.paddingLeft10}>
                    Keeping Your Account Secure · Notifications · Ad Preferences · Accessing Your Info · Deactivating or Deleting Your Account. Deactivating or Deleting Your Account. What's the difference between deactivating and deleting my account? If you deactivate your account: You can reactivate whenever you want. 
                    </Text>
                    <Button
                        icon={<Icon name={'warning'} size={24} color={'#fff'}/>}
                        textStyle={styles.deleteAccountSettingBtnTextStyle}
                        buttonStyle={styles.deleteAccountSettingBtnStyle}
                        title='Delete Account'/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    paddingLeft10:{paddingLeft:10},
    deleteAccountSettingBtnTextStyle:{
        color: '#ffffff',
        fontSize: 18
    },
    deleteAccountSettingBtnStyle:{
        backgroundColor: "red",
        minWidth: viewWidth-30,
        height: 50,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 24
    },
    container: {
        margin: 16
    }
});
