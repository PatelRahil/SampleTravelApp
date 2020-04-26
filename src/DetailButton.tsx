import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles.js';
import { colors } from './Colors.js'
export default class DetailButton extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<TouchableOpacity onPress={() => this.props.onPress(this.props.text)} style={styles.detailButtonContainer}>
				<Text style={[styles.detailButtonText, {color: this.props.selected ? colors.buttonColor : colors.textColor}]}>{this.props.text}</Text>
				<View style={[styles.indicator, {backgroundColor: this.props.selected ? colors.buttonColor : 'white'}]}  />
			</TouchableOpacity>
		)
	}
}