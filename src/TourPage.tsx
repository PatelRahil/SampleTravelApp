import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { styles } from './Styles.js'
import TourDetail from './TourDetail.tsx'
import BookNow from './BookNow.tsx'
import star from '../res/star.png'
import canyonBg from '../res/canyon-background.jpg'
import back from '../res/back.png'
import edit from '../res/upload.png'

export default class TourPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Breathtaking Antelope Canyon Tour',
			rating: '5.0',
			numReviews: 472,
			background: canyonBg,
			modalVisible: false,
			successModalVisible: false
		}
		this.handleUpload = this.handleUpload.bind(this)
		this.handleBookNowTap = this.handleBookNowTap.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handleBook = this.handleBook.bind(this)
	}

	render() {
		return (
			<View>
				<Modal animationType='slide' transparent={true} visible={this.state.modalVisible}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<BookNow title={this.state.title} price={158} onCancel={this.handleCancel} onBook={this.handleBook}/>
						</View>
					</View>
				</Modal>
				<Modal animationType='slide' transparent={true} visible={this.state.successModalVisible}>
					<View style={styles.centeredView}>
						<View style={[styles.modalView, {width: 300, padding: 5}]}>
							<Text style={styles.bookingSuccessText}>Success!</Text>
						</View>
					</View>
				</Modal>
				{this.renderGrayLayer()}
				<ImageBackground style={styles.tourPageContainer} source={this.state.background}>
					<TouchableOpacity activeOpacity={0.95} style={styles.bookNowButton} onPress={this.handleBookNowTap}>
						<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Book Now</Text>
					</TouchableOpacity>
					<TourDetail/>
					<View style={styles.tourPageHeader}>
						<Text style={styles.tourPageHeaderTitle}>{this.state.title}</Text>
						<View>
							<View flexDirection='row' justifyContent='space-between' alignItems='center' marginBottom={5}>
								<View style={styles.starImage}>
									<Image style={styles.starImage} source={star}/>
								</View>
								<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: 'Avenir'}}>{this.state.rating}</Text>
							</View>
							<Text style={{color: 'white', fontFamily: 'Avenir'}}>{this.state.numReviews + ' reviews'}</Text>
						</View>
					</View>
					<Image source={back} style={styles.backImage} />
					<TouchableOpacity style={styles.editImage} onPress={this.handleUpload}>
						<Image source={edit} style={{height: 25, width: 25}} />
					</TouchableOpacity>
				</ImageBackground>
			</View>
		);
	}

	renderGrayLayer() {
		if (this.state.modalVisible) {
			return(
				<View style={{position: 'absolute', zIndex: 2, width: '100%', height: '100%', backgroundColor: '#000000A0'}} />
			)
		}
	}

	handleCancel() {
		this.setState({
			modalVisible: false
		})
	}

	handleBook() {
		this.setState({
			modalVisible: false,
			successModalVisible: true
		})
		setTimeout(()=> {
			this.setState({
				successModalVisible: false
			})
		}, 3000)
	}

	handleBookNowTap() {
		this.setState({
			modalVisible: true
		})
	}

	handleUpload() {
		const options = {
      		noData: true
    	}
		ImagePicker.launchImageLibrary(options, response => {
	      if (response.uri) {
	        this.setState({ background: response })
	      }
	    })
	}
}