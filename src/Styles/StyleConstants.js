import {
 StyleSheet,
 Dimensions
} from 'react-native';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const vw = viewWidth/100, vh = viewHeight/100;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = 200;
const navBarThemeColor = 'rgba(255, 193, 7, 1)';
// const mainBtnThemeColor = 'rgba(255, 193, 7, 1)';
const paymentSelectedColor = '#A9AAAE';
const InputWidth = viewWidth-200, InputBorderRadius = 5, iconColor = 'rgba(255, 193, 7, 0.7)';
const inputPlaceholderColor = "#B2ACAB";

export default styles = StyleSheet.create({
    // general styling
 flex1:{
  flex: 1
 },
 fullScreen:{
    flex:1
 },
 whiteText:{
    color:'white'
},
backgroundColorWhite:{
    backgroundColor:'#ffffff'
},
borderWidth0:{
    borderWidth:0
},
fontSize12:{fontSize: 12},
 borderRadius10:{borderRadius: 10},
paddingTop16:{paddingTop: 16},
justifyContentFlexStart:{justifyContent:'flex-start'},
dealsCardContainerStyle:{
    backgroundColor:'#fff', padding:0, borderRadius: 10, borderWidth:0, elevation:5, marginVertical:0
},
paddingBottom10:{paddingBottom: 10,},
paddingTop5:{paddingTop: 5},
paddingTop10:{paddingTop: 10},
paddingHorizontal10:{
    paddingHorizontal: 10
},
textAlignJustify:{textAlign:'justify'},
marginLeft10:{marginLeft: 10},
borderBottomWidth0:{
    borderBottomWidth:0,
},
paddingRight20:{paddingRight: 20},
justifyContentSpaceAround:{justifyContent: 'space-around'},
paddingRight0:{
    paddingRight:0
},
marginRight0:{marginRight:0},

 homeHeaderImage: {
  height: viewHeight / 2,
  width: viewWidth
 },
 buttonText: {
  fontSize: 18,
  fontFamily: 'Gill Sans',
  textAlign: 'center',
  margin: 10,
  color: '#ffffff',
  backgroundColor: 'transparent',
 },
 white18pxfont: {
  color: '#ffffff',
  fontSize: 18,
 },
 homeBtnStyle: {
  backgroundColor: mainBtnThemeColor,
  minWidth: btnWidth,
  marginHorizontal: 30,
  height: 50,
  borderWidth: 0,
  borderRadius: 3,
 },
 marginTop24px: {
  marginTop: 20,
 },
 marginBottom24px: {
  marginBottom: 24
 },
 marginBottomhomeLastbtn: {
    marginBottom: 50
   },
 homeCartBtn: {
  height: 50,
  width: 50,
  borderRadius: 25,
  position: 'absolute',
  right: 16,
  top: (viewHeight / 2 - 30),
  backgroundColor: fabThemeColor,
  justifyContent: 'center',
  alignItems: 'center',
 },
 theme24pxfont: {
  color: '#E65100',
  fontSize: 24,
 },
 fontSize16:{
    fontSize: 16,
 },
 condensedFonts: {
//   fontFamily: 'sans-serif-condensed'
  fontFamily: 'Arial Rounded MT Bold'
 },
 textAlignCenter: {
  textAlign: 'center'
 },
 numberingOrders:{
     borderColor: '#c7c8c3',
     borderWidth: 0,
     borderRadius: 0,
     width: 20,
     height: 20,
     shadowColor: '#c7c8c3',
     shadowOffset: {width: 0, height: 1},
     shadowOpacity: 0.8,
     shadowRadius: 30,
     elevation: 1,
 },
 productNameStyle: {
     fontWeight: '500'
 },
 twelvePointBurst: {
     position: 'absolute',
     top: -50,
     right: 20,
 },
 twelvePointBurstMain: {
     width: 80,
     height: 80,
     backgroundColor: '#7CB443'
 },
 twelvePointBurst30: {
     width: 80,
     height: 80,
     position: 'absolute',
     backgroundColor: '#7CB443',
     top: 0,
     right: 0,
     transform: [
         {rotate: '30deg'}
     ]
 },
 twelvePointBurst60: {
     width: 80,
     height: 80,
     position: 'absolute',
     backgroundColor: '#7CB443',
     top: 0,
     right: 0,
     transform: [
         {rotate: '60deg'}
     ]
 },
 discountValuePosition:{position:'absolute', right:35, top:-27},
 container: {
    backgroundColor: '#f0f0f0',
    flex: 1
},
contentInRow: {
    flexDirection: 'row',
},
centerVertically: {
    alignItems: 'center',
},
centerHorizontally: {
    justifyContent: 'center',
},
cartNotificationBtnStyling:{height:10, width:10, borderRadius: 5, borderWidth:0, backgroundColor:'red'},
productDetailsHeading: {fontWeight: '200', fontSize: 12},
productDetailsDetail: {fontWeight: '500', fontSize: 16},

fontFamilyRoboto: {
    fontFamily: 'Arial Rounded MT Bold'
},
orderInfoTitleStyle: {color: '#e67e22', fontWeight: '100'},
wrapper: {
    height: viewHeight / 3,
    margin: 0,
    padding: 0,
    borderWidth: 0,
},
prodImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
},
actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
},

justifyContentSpaceBetween:{
    justifyContent:'space-between'
},
paddingBottom16:{
    paddingBottom: 16
},
paddingVertical10:{
    paddingVertical: 10,
},
goToCheckoutBtnTitleStyle:{color: '#fff', fontSize: 20, fontFamily: 'AvenirNext-Bold', paddingLeft:10},
goToCheckoutBtnStyle:{elevation: 0, backgroundColor: '#F57F17',
width: viewWidth-40, alignContent:'center',
height: 50, borderRadius: 25},
cartProductCostColor:{color: '#0fb14a'},
fontSize24:{fontSize:24},
paddingWithLightBorder:{paddingTop:16, paddingBottom:8, borderTopWidth:1, borderTopColor:'#d8dde1'},
cartAddSubBtnContainerStyle:{height:30, width:30, borderRadius: 15, borderWidth:1, backgroundColor: 'transparent'},
cartAddSubBtnStyling:{
    elevation: 0, paddingTop: 1, backgroundColor:'transparent'
},
paddingRight3:{
    paddingRight:2
},
marginLeftNeg3:{
    marginLeft:-3
},
silverColorBackground: {
    backgroundColor: "#F5F5F5",
  },

// payment page
checkoutFullContainer: {
    minHeight: 100
},
paymentLabel: {
    color: "black",
    fontSize: 12,
  },
paymentInput: {
    fontSize: 16,
    color: "black",
  },
checkoutPlaceOrderBtn:{
    backgroundColor: mainBtnThemeColor,
    minWidth: 150,
    marginBottom:16,
    marginHorizontal: 100,
    height: 50,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
},
checkoutPlaceOrderTitle:{
    color: '#ffffff',
    fontSize: 18
},
paymentMethodChooseBtnTitle:{color: '#fff', fontSize: 20, fontFamily: 'AvenirNext-Bold', paddingLeft:10, paddingTop: 16,},
paymentMethodChooseBtnContainer:{height: 16, width: 16, borderRadius: 8, borderWidth: 0, borderColor:'#222', marginRight: 16, paddingTop: 16,},
paymentMethodChooseBtnTextTitle:{fontSize:16, paddingLeft: 8, color:paymentSelectedColor},
checkoutPaymentModeChooseCard:{borderWidth:0, width: viewWidth-30, borderRadius:5},

// deals page style
dealsCardImage:{borderTopLeftRadius: 10, borderTopRightRadius: 10, top:0.5, width:'99%', left:'0.5%', height:175},
// dealsCardLocation also used in other screen
dealsCardLocation:{fontFamily: 'AppleSDGothicNeo-Medium', color: '#757575', fontWeight: '100'},
dealsCardDiscount:{fontFamily: 'Arial Rounded MT Bold', fontWeight: '500', fontSize: 26, color:'#ffffff'},
dealsCardLocationStyle:{textAlign:'center', fontSize: 16, paddingLeft:10},

// item page or product page
itemPageCartNotifierStyle:{position:'absolute', top:0, right:5, zIndex:10, height: 20, width:25, borderRadius: 10, backgroundColor: 'red'},
itemFabBtnStyling:{
    height:50, width:50, borderRadius: 25, position:'absolute', right: 16,top: (viewHeight/3-40), backgroundColor:fabThemeColor,
},
itemPageCartText:{fontSize: 10, color: '#fff', fontWeight: '700'},
itemPageSwiperStyle:{                          
    height: viewHeight / 3,                          
    margin: 0,                          
    padding: 0,                          
    borderWidth: 0,                     
},
itemGoToMenuPageBtn:{
    backgroundColor:'#ddd',
    elevation: 0,
    width: viewWidth,
    paddingVertical: 10,
},
itemGoToMenuPageBtnText:{
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
},
itemOrderNowBtnContainer:{
    backgroundColor: '#F57F17',
    width: viewWidth,
    height: 45
},
itemOrderNowBtnText:{color: '#fff', fontSize: 20, fontFamily: 'AvenirNext-Bold',},

itemPageRecommendedListCardContainerStyle:{
    height: 210,
    width: 200,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth:0
},
productPageHeaderBackBtn:{
    backgroundColor: "transparent",
    elevation: 0,
    zIndex: 0
},
productPageHeaderBackBtnTitle:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 30,
},

// settings styling
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

// edit profile styles
profilePageRow:{marginBottom: 16, justifyContent:'space-between'},
editProfileRow:{display:'flex', width: Dimensions.get('window').width, flexDirection:'row'},
paddingLeft10:{paddingLeft:10},
colorRed:{color:'red'},
editProfileSettingInputStyle:{marginLeft: 20, color: 'black'},

//  login screen styles
loginScreenContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
},
loginScreenEmailInput:{marginLeft: 20, color: 'black', borderBottomColor: '#000'},
loginScreenEmailInputContainer:{
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.5,
    borderBottomColor:'rgba(199,200,195,1)',
    borderTopLeftRadius: InputBorderRadius,
    borderTopRightRadius: InputBorderRadius,
},
loginScreenPasswordInputContainer: {
    marginBottom: 28,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
    borderBottomLeftRadius: InputBorderRadius,
    borderBottomRightRadius: InputBorderRadius,
},
loginScreenLoginBtn:{
    backgroundColor: "rgba(255, 179, 0, 1)",
    minWidth: 150,
    height: 50,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 24
    },
marginTop50:{marginTop:50},
loginScreenPassowrdInputStyle:{marginLeft: 20, color: '#000000'},
loginScreenRegisterLink:{
    color:'#FF6F00', paddingBottom: 5
},
fullScreenBackgroundImage:{
    height: viewHeight+100,
    width: viewWidth,
    position: 'absolute',
    top:-10
},
registerText: {
    fontFamily:'Arial-BoldMT', fontSize: 18, fontWeight:'bold', backgroundColor:"transparent"
},
closeBtn: {position:'absolute', top: 16, right: 0, backgroundColor:'#ffffff', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 5, paddingLeft: 10, paddingRight:20},

// signup page styles
signupScreenContainer: {
    flex: 1,
    minHeight: viewHeight-24,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    alignItems: 'center'
},
signUpScreenTitlePositioning:{position:'absolute', top:20},
signUpScreenTitleTextStyle:{fontSize: 24, fontWeight:'300', fontFamily:'Academy Engraved LET'},
inputContainerStyle: {backgroundColor: 'grey', marginVertical:5, borderRadius:3, flexDirection: 'row', alignItems: 'center'},
signupScreenEmailInput:{marginLeft: 20, color: 'black', borderBottomColor: '#fff'},
signupScreenPassowrdInputStyle:{marginLeft: 20, color: '#fff'},
signupScreenOtherSignUpBtn:{
    backgroundColor: "#4867AA",
    width: (viewWidth/2-40),
    marginRight:5,
    marginLeft: 5,
    height: 50,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 4,
    marginTop: 24
    },
    signupScreenOtherSignUpBtnFacebook:{
        backgroundColor: "#4867AA",
    },
    signupScreenOtherSignUpBtnTwitter:{
        backgroundColor: "#3B94D9",
    },

    // reset password
    otpInputBG:{backgroundColor:'transparent'},

    // order screen
    blackBorderWidth1:{
        borderColor: '#000',
        borderBottomWidth: 1
    },
    // also used in track order
    orderScreenCardStyle:{backgroundColor:'#fff', borderRadius: 5, borderWidth:0, marginBottom: 5, marginTop: 5, elevation: 0},
    orderCardCostStyle:{fontFamily: 'AcademyEngravedLetPlain', fontWeight: '500', fontSize: 30},
    orderScreenCardImage:{
        height: '100%',
        width: '100%',
        maxHeight: 150,
        maxWidth: 120,
        marginHorizontal: 10,
        borderRadius: 5
    },
    fontArielMT:{
        fontFamily: 'ArialMT'
    },
    fontSize15:{fontSize: 15,},
    fontSize18:{fontSize: 18,},
    orderCardBtn:{
        backgroundColor: '#F1C40F',
        minWidth: 200,
        height: 50,
        borderWidth: 0,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
    },
    orderCardDescriptionContainer:{
        minHeight: 100,
        paddingTop: 10
    },

    // track order
    mapBottomOverlay:{height: 150, position:'absolute', bottom:0, width: viewWidth},
    trackOrderSmallText:{
        fontFamily:'ArialMT',
        fontSize: 12,
        paddingBottom: -10,
        flexWrap:'wrap',
        width: 100,
        textAlign:'center',
        padding:0,
        margin: 0,
    },
    trackOrderLargeText:{
        fontFamily:'ArialMT',
        fontSize: 42,
        paddingVertical: 0,
        marginVertical: 0,
        lineHeight: 45,
        color:'#9EC86E'
    },
    trackOrderSmallTextDiffFont:{
        fontSize: 16
    },
    trackOrderHeaderColor:{
        backgroundColor: navBarThemeColor
    },
    whiteFont:{
        color:'#fff'
    },
    flexWrapWrap:{
        flexWrap: 'wrap'
    },
    fontWeight100:{
        fontWeight: '100'
    },
    phoneCallFabStyle:{height:30, width:30, borderRadius: 15, backgroundColor:fabThemeColor,},
    trackOrderScreenDeliveryAddressTitle:{paddingVertical: 8, width: 130},
    trackOrderScreenDeliveryAddress:{fontFamily: 'ArialMT', color: '#757575'},

    // search screen
    searchScreenTwelvePointBurst: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    searchScreenTwelvePointBurstMain: {
        width: 40,
        height: 40,
        backgroundColor: '#7CB443'
    },
    searchScreenTwelvePointBurst30: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '30deg'}
        ]
    },
    searchScreenTwelvePointBurst60: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#7CB443',
        top: 0,
        right: 0,
        transform: [
            {rotate: '60deg'}
        ]
    },
    searchScreenDiscountValuePosition:{position:'absolute', right:3, top:8},
    discountValueText:{fontFamily: 'AcademyEngravedLetPlain', fontWeight: '500', fontSize: 16, color:'#ffffff'},
    searchScreenCardContainerStyle:{padding:0, borderWidth: 0, borderRadius:5, marginHorizontal:5},
    searchScreenCardImageStyle:{
        height: 130,
        width: (viewWidth-10)/2,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    searchScreenLocationTextStyle:{fontFamily: 'AcademyEngravedLetPlain', color: '#757575', fontWeight: '100', marginTop:8},
    searchScreenSparePrice:{textDecorationLine:'line-through', fontSize: 16, marginRight:5, color:'#F5511E'},
    searchScreenOriginalPrice:{fontSize: 24, color:'#7CB443'},
    searchScreenOfferStar:{position:'absolute', top:0, right:0},

    ////// order summary page ////////
    orderContainer:{
        minHeight: 87*vh,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    billRow: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    billContentRow:{
        paddingVertical: 10,
    },
    billPaddingTopRow:{
        paddingVertical: 20,
        
    },
    serialCol:{
        width: 7*vw,
        backgroundColor: "#fff",
    },
    nameCol:{
        width: 50*vw,
        backgroundColor: "#fff",
    },
    noOfItemsCol:{
        width: 20*vw,
        backgroundColor: "#fff",
        // backgroundColor:"#f0f",
    },
    priceCol:{
        width: 23*vw,
        backgroundColor: "#fff",
    },
    subTotalTxt:{
        width: 70*vw,
        alignContent: 'center',
        paddingHorizontal: 20*vw,
    },
    subTotalAmt:{
        width: 30*vw,
    }
});