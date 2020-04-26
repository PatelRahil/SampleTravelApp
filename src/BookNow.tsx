import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './Styles.js';

export default class BookNow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			numPeople: 0
		}
	}
	render() {
		return(
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Text style={styles.bookNowTitle}>{this.props.title}</Text>
					<View style={[styles.separator, {width: 300}]}/>
					<View marginBottom={10}>
						<Text>Number of People</Text>
						<TextInput style={styles.bookingInput} keyboardType='number-pad' onChangeText={text => this.onChangeNumPeople(text)}/>
					</View>
					<View marginBottom={10}>
						<Text>Credit Card Number</Text>
						<TextInput style={styles.bookingInput} keyboardType='number-pad' onChangeText={text => this.setState({ numPeople: parseInt(text) })}/>
					</View>
					<View flexDirection='row' justifyContent='space-between' marginBottom={10}>
						<View>
							<Text>Expiration (mm/yy)</Text>
							<TextInput style={[styles.bookingInput, {width: 130}]} keyboardType='default' onChangeText={text => this.setState({ numPeople: parseInt(text) })}/>
						</View>
						<View>
							<Text>CVC</Text>
							<TextInput style={[styles.bookingInput, {width: 50}]} keyboardType='number-pad' onChangeText={text => this.setState({ numPeople: parseInt(text) })}/>
						</View>
					</View>
					<View marginBottom={10}>
						<Text>Shipping Address</Text>
						<TextInput style={styles.bookingInput} keyboardType='default' onChangeText={text => this.setState({ numPeople: parseInt(text) })}/>
					</View>
					<View style={[styles.separator, {width: 300}]}/>
					<View flexDirection='row'>
						<Text style={{fontWeight: 'bold', fontSize: 18, marginEnd: 5}}>Total:</Text>
						<Text style={{fontSize: 18}}>{'$' + (this.state.numPeople ? this.state.numPeople * this.props.price : 0)}</Text>
					</View>
					<View style={[styles.separator, {width: 300}]}/>
					<View style={{height: 100}}/>
					<TouchableOpacity style={styles.bookButton} onPress={this.props.onBook}>
							<Text style={{fontWeight: 'bold', color: 'white'}}>Book</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cancelButton} onPress={this.props.onCancel}>
							<Text style={{fontWeight: 'bold', color: 'black'}}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		)
	}

	onChangeNumPeople(text) {
		console.log(text)
		console.log(parseInt(text))
		this.setState({
			numPeople: parseInt(text)
		})
	}
}