import {
 StyleSheet,
 Dimensions
} from 'react-native';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;
const mainBtnThemeColor = '#FF6F00', fabThemeColor = '#FF6F00', btnWidth = viewWidth-50;


export default styles = StyleSheet.create({
 flex1:{
  flex: 1
 },
 fullScreen:{
  minHeight: viewHeight-24
 },
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
  height: 50,
  borderWidth: 0,
  borderRadius: 5,
 },
 marginTop24px: {
  marginTop: 24,
 },
 marginBottom24px: {
  marginBottom: 24
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
 condensedFonts: {
  fontFamily: 'sans-serif-condensed'
 },
 textAlignCenter: {
  textAlign: 'center'
 },

 container: {
 },
 contentInRow:{
     flexDirection: 'row',
 },
 centerVertically:{
     alignItems: 'center',
 },
 centerHorizontally:{
     justifyContent: 'center',
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
 fontFamilyRoboto: {
     fontFamily: 'Roboto'
 },
 orderInfoTitleStyle:{color: '#e67e22', fontWeight: '100'},
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
 discountValuePosition:{position:'absolute', right:35, top:-27}

});