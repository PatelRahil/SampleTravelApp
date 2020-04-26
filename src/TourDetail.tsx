import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { styles } from './Styles.js';
import { reviewData } from './Constants.js'
import Review from './Review.tsx'
import DetailButton from './DetailButton.tsx';
import DetailInfoItem from './DetailInfoItem.tsx';
import bookmarkFilled from '../res/bookmark-filled.png'
import bookmarkUnfilled from '../res/bookmark-unfilled.png'
import priceTag from '../res/price-tag.png'
import clock from '../res/clock.png'

export default class TourDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			price: 158,
			duration: 3,
			description: "Antelope Canyon is a popular location for photographers and sightseers, and a source of tourism business for the Navajo Nation. It has been accessible by tour only since 1997, when the Navajo Tribe made it a Navajo Tribal Park. Besides the Upper and Lower areas, there are other slots in the canyon that can be visited, such as the Canyon X which is also part of the same drainage as Antelope Canyon. All visits are through one of several licensed tour operators. It is not possible to visit the Canyon independently. Antelope Canyon is a popular location for photographers and sightseers, and a source of tourism business for the Navajo Nation. It has been accessible by tour only since 1997, when the Navajo Tribe made it a Navajo Tribal Park. Besides the Upper and Lower areas, there are other slots in the canyon that can be visited, such as the Canyon X which is also part of the same drainage as Antelope Canyon. All visits are through one of several licensed tour operators. It is not possible to visit the Canyon independently.",
			selected: 'Overview',
			bookmarked: false
		}
		this.onSelectTab = this.onSelectTab.bind(this)
		this.onSwipeUp = this.onSwipeUp.bind(this)
		this.onSwipeDown = this.onSwipeDown.bind(this)
		this.renderContents = this.renderContents.bind(this)
	}
	render() {
		return (
				<View style={styles.tourDetailContainer}>
					<TouchableOpacity onPress={() => this.setState({ bookmarked: !this.state.bookmarked })} activeOpacity={0.95} style={styles.bookmarkContainer}>
						<Image style={styles.bookmarkImage} source={ this.state.bookmarked ? bookmarkFilled : bookmarkUnfilled } />
					</TouchableOpacity>
					<View  flexDirection='row'>
						<DetailButton text={'Overview'} selected={this.state.selected === 'Overview'} onPress={this.onSelectTab}/>
						<DetailButton text={'Reviews'} selected={this.state.selected === 'Reviews'} onPress={this.onSelectTab}/>
					</View>
					{ this.renderContents() }
				</View>
		)
	}

	renderContents() {
		if (this.state.selected === 'Overview') {
			return (
				<View marginBottom={187}>
					<View flexDirection='row' justifyContent='space-between' marginTop={23} marginBottom={30}>
						<DetailInfoItem name="PRICE" text={'$' + this.state.price} src={priceTag}/>
						<DetailInfoItem name="DURATION" text={this.state.duration + ' hours'} src={clock}/>
					</View>
					<ScrollView>
						<Text style={{fontWeight:'bold', lineHeight: 22}}>
							{this.state.description}
						</Text>
					</ScrollView>
				</View>
			)
		} else {
			return (
				<FlatList marginBottom={50} data={reviewData} renderItem={({item}) => <Review review={item}/>} keyExtractor={item => item.id}/>
			)
		}
	}

	onSelectTab(text) {
		console.log(text, this)
		this.setState({
			selected: text
		})
	}

	onSwipeUp() {
		this.setState({
			expanded: true
		})
	}

	onSwipeDown() {
		this.setState({
			expanded: false
		})
	}
}