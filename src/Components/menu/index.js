/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import {Tile} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import Accordion from 'react-native-collapsible/Accordion';
import {coloredNavigationStyle, hideNavigationStyle, navigationStyle, sideNavigatorButton} from "../../Styles/navbarStyles"


const menu_titles = [
    {
        title: 'hot menu',
        menu: [{
            title: 'Fresh Pasta Linguine',
            image: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://miami.eat24hours.com/files/cuisines/v4/thai.jpg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCiZyRnjokHqhcE8BoZ2e0dL7BymUOBEFHqnVHiYPeHfYtUM',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/07/15/chinese.jpg',
            cost: '50.00'
        }]
    }, {
        title: 'slow menu',
        menu: [{
            title: 'Fresh Pasta Linguine',
            image: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://miami.eat24hours.com/files/cuisines/v4/thai.jpg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCiZyRnjokHqhcE8BoZ2e0dL7BymUOBEFHqnVHiYPeHfYtUM',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/07/15/chinese.jpg',
            cost: '50.00'
        }]
    }, {
        title: 'cold bevreges',
        menu: [{
            title: 'Fresh Pasta Linguine',
            image: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://miami.eat24hours.com/files/cuisines/v4/thai.jpg',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCiZyRnjokHqhcE8BoZ2e0dL7BymUOBEFHqnVHiYPeHfYtUM',
            cost: '50.00'
        }, {
            title: 'Fresh Pasta Linguine',
            image: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/07/15/chinese.jpg',
            cost: '50.00'
        }]
    }
];



const viewWidth = Dimensions.get('window').width;

export default class Menu extends Component {

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../images/menu.png'), // for icon button, provide the local image asset name
            id: 'sideMenu' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };


    constructor(props) {
        super(props);
        this.state = {};
        this._renderHeader = this._renderHeader.bind(this);
        this._renderContent = this._renderContent.bind(this);
        this._goToRestaurant = this
            ._goToRestaurant
            .bind(this);
            this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        } 
       
        onNavigatorEvent(event) {
            console.log('event triggered', event);
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
                    case 'Menu':
                    this.props.navigator.resetTo({screen: 'Menu', title: 'Restraunt Name',
                        
                        navigatorStyle: coloredNavigationStyle,
                        animated: true, animationType: 'fade'});
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
    _goToRestaurant() {
        this.props.navigator.showModal({
            screen: 'Item', // unique ID registered with Navigation.registerScreen
            title: 'Sushi Title', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: hideNavigationStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    componentWillMount() {
        // adding data to our list
    }

    _renderHeader(section, index, isActive, sections) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={[styles.contentInRow, styles.centerVertically, styles.menuHeading]}>

                <Icon name={isActive?'ios-arrow-dropup':'ios-arrow-dropdown'} size={30} color={'#fff'}/>
                <Text style={styles.menuHeadingText}>{section.title.toUpperCase()}</Text>

            </Animatable.View>
        );
    }

    _renderContent(section, index, isActive, sections) {
        return section.menu.map((menu) => {
            return (
                <Tile
                    imageSrc={{uri:menu.image}}
                    title={menu.title.toUpperCase()}
                    onPress={this._goToRestaurant}
                    titleStyle={{fontSize:18, fontWeight:'700', fontFamily:'AvenirNext-Bold'}}
                    width={viewWidth-10}
                    featured
                    caption={'$ '+menu.cost}
                    captionStyle={{fontSize:24, fontWeight:'500'}}
                    key={menu.title}
                    imageContainerStyle={{height:100}}
                    containerStyle={{marginHorizontal:5, marginVertical:3, height:100}}
                />
            )
        })
    }


    render() {
        // BackHandler.addEventListener('hardwareBackPress', function() {
        //     this
        //         .props
        //         .navigator
        //         .resetTo({screen: 'Home', title: 'Welcome to Foodie',
        //             
        //             navigatorStyle: navigationStyle,
        //             animated: true, animationType: 'fade'});
        // });
        return (
            <ScrollView style={styles.container}>

                <Accordion
                    sections={menu_titles}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    initiallyActiveSection={0}
                />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    contentInRow: {
        flexDirection: 'row',
    },
    centerVertically: {
        alignItems: 'center',
    },
    centerHorizontally: {
        justifyContent: 'center',
    },
    menuHeading: {height: 50, backgroundColor: '#FFA000', paddingLeft: 8},

    menuHeadingText: {fontSize: 18, marginLeft: 16, fontWeight: '500', color: '#fff'},


    productNameStyle: {
        fontWeight: '500'
    },
    fontFamilyRoboto: {
        fontFamily: 'AcademyEngravedLetPlain'
    },
    orderInfoTitleStyle: {color: '#e67e22', fontWeight: '100'}
});
