import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors } from './Colors.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

   centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  bookNowTitle: {
  	textAlign: 'center',
  	fontWeight: 'bold',
  	fontSize: 24
  },
  bookingSuccessText: {
  	fontWeight: 'bold',
  	fontSize: 18,
  	color: colors.buttonColor
  },
  bookingInput: {
  	paddingStart: 5,
  	paddingEnd: 5,
  	borderColor: colors.textColor,
  	borderWidth: 1,
  	borderRadius: 3,
  	height: 30
  },
  bookButton: {
  	height: 40,
  	width: 300,
  	backgroundColor: colors.buttonColor,
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderRadius: 15,
  	marginBottom: 5
  },
  cancelButton: {
  	height: 40,
  	width: 300,
  	backgroundColor: colors.textColor,
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderRadius: 15,
  	marginBottom: 5
  },

  tourPageContainer: {
  	flexDirection: 'column-reverse',
  	width:'100%',
  	height: '100%'
  },

  tourPageHeader: {
  	paddingStart: 30,
  	paddingEnd: 30,
  	marginBottom: 30,
  	flexDirection: 'row',
  	alignItems: 'flex-start',
  	justifyContent: 'space-between',
  },

  tourPageHeaderTitle: {
  	color: 'white',
  	fontWeight: 'bold',
  	fontSize: 30,
  	width: '60%',
  	fontFamily: 'Avenir'
  },

  backImage: {
  	height: 20,
  	width: 20,
  	position:'absolute',
  	left: 30,
  	top: 50
  },

  editImage: {
  	position:'absolute',
  	right: 30,
  	top: 50
  },

  tourDetailContainer: {
  	paddingTop: 30,
  	paddingStart: 30,
  	paddingEnd: 30,
  	paddingBottom: 30,
  	borderRadius: 25,
  	backgroundColor:'white',
  	height: 350,
  	shadowRadius: 4,
  	shadowOpacity: 0.15
  },

  bookmarkContainer: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginEnd: 30,
  	marginTop: -45,
  	position: 'absolute',
  	right: 0,
  	height: 90,
  	width: 90,
  	borderRadius: 45,
  	backgroundColor: 'white',
  	shadowOpacity: 0.3,
  	shadowRadius: 16
  },

  starImage: {
  	height: 35,
  	width: 35
  },

  bookmarkImage: {
  	height: 35,
  	width: 35
  },

  detailButtonContainer: {
  	paddingEnd: 40,
  	flexDirection: 'column',
  	alignItems: 'center'
  },

  detailButtonText: {
  	fontSize: 15,
  	fontWeight: 'bold'
  },

  indicator: {
  	marginTop: 5,
  	width: 6,
  	height: 6,
  	borderRadius: 3,
  	justifyContent: 'center'
  },

  detailInfoItemImageContainer: {
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'#eff0f2',
  	width: 55,
  	height: 55,
  	borderRadius: 8
  },

  detailInfoItemImage: {
  	width: 30,
  	height: 30
  },

  detailInfoItemName: {
  	color: colors.textColor,
  	fontWeight: 'bold',
  	fontSize: 12
  },

  detailInfoItemText: {
  	fontWeight: 'bold',
  	fontSize: 20
  },

  bookNowButton: {
  	position: 'absolute',
  	zIndex: 1,
  	width: '100%',
  	height: 80,
  	backgroundColor: colors.buttonColor,
  	borderRadius: 25, justifyContent:
  	'center',
  	alignItems: 'center'
  },

  reviewTitle: {
  	fontWeight: 'bold',
  	fontSize: 20
  },

  reviewContent: {

  },

  reviewHeader: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'flex-end'
  },

  reviewRating: {
  	flexDirection: 'row'
  },

  separator: {
  	marginTop: 5,
  	marginBottom: 10,
  	width: '100%',
  	height: 1,
  	backgroundColor: colors.textColor
  }
});
