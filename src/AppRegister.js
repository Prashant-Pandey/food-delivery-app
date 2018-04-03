import {Navigation} from "react-native-navigation";

import Home from './screens/home/index';
import Login from './screens/login/index';
import mainSideMenu from './mainSideMenu/index';
import {navigationStyle, sideNavigatorButton} from './navbarStyles';
import SignUp from './screens/login/signup/index';
import ResetPassword from './screens/login/resetPasssword/index';


import Orders from './screens/orders/index';
import TrackOrder from './screens/orders/trackOrder/index';

import Deals from "./screens/deals/index";
import Settings from "./screens/settings/index";
import EditProfile from "./screens/settings/editProfile/index";
import ChangePassword from "./screens/settings/changePassword/index";
import DeleteAccount from "./screens/settings/deleteAccount/index";
import AboutFoodie from "./screens/settings/aboutFoodie/index";

import Search from "./screens/search/index";
import Item from "./screens/item/index";
import Explore from "./screens/explore/index";
import Menu from "./screens/menu/index";
import Cart from "./screens/cart/index";
import Checkout from "./screens/checkout/index";
import ThankYou from "./screens/thankyou/index";


export default () => {
    Navigation.registerComponent('Home', () => Home),
        Navigation.registerComponent('Login', () => Login),
        Navigation.registerComponent('Login.SignUp', () => SignUp),
        Navigation.registerComponent('Login.ResetPassword', () => ResetPassword),
        Navigation.registerComponent('mainSideMenu', () => mainSideMenu),
        Navigation.registerComponent('Orders', () => Orders),
        Navigation.registerComponent('Orders.TrackOrder', () => TrackOrder),
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
        

        // Navigation.registerComponent('Home', () => StorybookUI);
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'Home',
                title: 'Welcome to Foodie',
                navigatorButtons: sideNavigatorButton,
                navigatorStyle: navigationStyle,
            },
            drawer: {
                left: {
                    screen: 'mainSideMenu'
                },
                disableOpenGesture: true
            },
            // passProps: object,
            animationType: 'fade'
        })
}
