import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './Styles.js';
import { colors } from './Colors.js';

export default class DetailInfoItem extends Component {
	constructor(props) {
		super(props)
		console.log(props.src)
	}

	render() {
		return (
			<View flexDirection='row' alignItems='center'>
				<View style={styles.detailInfoItemImageContainer}>
					<Image style={styles.detailInfoItemImage} source={this.props.src} />
				</View>
				<View marginStart={15}>
					<Text style={styles.detailInfoItemName}>{this.props.name}</Text>
					<Text style={styles.detailInfoItemText}>{this.props.text}</Text>
				</View>
			</View>
		)
	}
}