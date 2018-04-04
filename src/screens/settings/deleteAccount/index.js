
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
                <Text style={{paddingLeft:10}}>Keeping Your Account Secure · Notifications · Ad Preferences · Accessing Your Info · Deactivating or Deleting Your Account. Deactivating or Deleting Your Account. What's the difference between deactivating and deleting my account? If you deactivate your account: You can reactivate whenever you want. </Text>
                <Button
                icon={<Icon name={'warning'} size={24} color={'#fff'}/>}
                textStyle={{
                    color: '#ffffff',
                    fontSize: 18
                }}
                buttonStyle={{
                    backgroundColor: "red",
                    minWidth: viewWidth-30,
                    height: 50,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    marginTop: 24
                }}
                title='Delete Account'/>
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
