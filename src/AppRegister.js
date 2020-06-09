import {Navigation,ScreenVisibilityListener} from "react-native-navigation";

import Home from './Components/home/index';
import Login from './Components/login/index';
import mainSideMenu from './mainSideMenu/index';
import {navigationStyle, sideNavigatorButton} from './Styles/navbarStyles';
import SignUp from './Components/login/signup/index';
import ResetPassword from './Components/login/resetPasssword/index';


import Orders from './Components/orders/index';
import TrackOrder from './Components/orders/trackOrder/index';
import OrderSummary from './Components/orders/orderSummary/index';

import Deals from "./Components/deals/index";
import Settings from "./Components/settings/index";
import EditProfile from "./Components/settings/editProfile/index";
import ChangePassword from "./Components/settings/changePassword/index";
import DeleteAccount from "./Components/settings/deleteAccount/index";
import AboutFoodie from "./Components/settings/aboutFoodie/index";

import Search from "./Components/search/index";
import Item from "./Components/item/index";
import Explore from "./Components/explore/index";
import Menu from "./Components/menu/index";
import Cart from "./Components/cart/index";
import Checkout from "./Components/checkout/index";
import ThankYou from "./Components/thankyou/index";


export default () => {
    Navigation.registerComponent('Home', () => Home),
        Navigation.registerComponent('Login', () => Login),
        Navigation.registerComponent('Login.SignUp', () => SignUp),
        Navigation.registerComponent('Login.ResetPassword', () => ResetPassword),

        Navigation.registerComponent('mainSideMenu', () => mainSideMenu),

        Navigation.registerComponent('Orders', () => Orders),
        Navigation.registerComponent('Orders.TrackOrder', () => TrackOrder),
        Navigation.registerComponent('Orders.OrderSummary', () => OrderSummary),

        Navigation.registerComponent('Deals', () => Deals),
        
        Navigation.registerComponent('Settings', () => Settings),
        Navigation.registerComponent('Settings.EditProfile', () => EditProfile),
        Navigation.registerComponent('Settings.ChangePassword', () => ChangePassword),
        Navigation.registerComponent('Settings.DeleteAccount', () => DeleteAccount),
        Navigation.registerComponent('Settings.AboutFoodie', () => AboutFoodie),

        Navigation.registerComponent('Search', () => Search),
        Navigation.registerComponent('Item', () => Item),
        Navigation.registerComponent('Explore', () => Explore),
        Navigation.registerComponent('Menu', () => Menu),
        Navigation.registerComponent('Cart', () => Cart),
        Navigation.registerComponent('Checkout', () => Checkout),
        Navigation.registerComponent('ThankYou', () => ThankYou),
        

        new ScreenVisibilityListener({
            willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
            didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
            willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
            didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
          }).register();
          
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'Home',
                title: 'Welcome to Foodie',
                navigatorStyle: navigationStyle,
            },
            drawer: {
                left: {
                    screen: 'mainSideMenu'
                },
                // disableOpenGesture: false
            },
            // passProps: object,
            animationType: 'fade'
        })
}
