import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './Styles.js';
import star from '../res/star.png'
import likeFilled from '../res/like-filled.png'
import likeUnfilled from '../res/like-unfilled.png'

export default class Review extends Component {
	constructor(props) {
		super(props)
		this.state = {
			votes: props.review.votes,
			voted: props.review.voted
		}
		this.handleLike = this.handleLike.bind(this)
	}
	render() {
		return (
			<View>
				<View style={styles.reviewHeader}>
					<Text style={styles.reviewTitle}>{this.props.review.title}</Text>
					<View flexDirection='row'>
							<Text>{this.state.votes}</Text>
						<TouchableOpacity onPress={this.handleLike}>
							<Image style={{width: 15, height: 15, marginStart: 5}} source={this.state.voted ? likeFilled : likeUnfilled}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.reviewRating}>
					<Image style={{width: 15, height: 15, marginEnd: 5}} source={star}/>
					<Text>{(this.props.review.rating * 5) + '/5'}</Text>
				</View>
				<Text style={styles.reviewContent}>{this.props.review.content}</Text>
				<View style={styles.separator} />
			</View>
		)
	}

	handleLike() {
		this.setState({
			votes: this.state.voted ? this.state.votes -1 :  this.state.votes + 1,
			voted: !this.state.voted
		})
	}
}