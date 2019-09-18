import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
	const myname = "snehal"
	
	return (
	<View>
		<Text style={styles.textStyle}>ImageScreen texty </Text>
		<ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
		<ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
		<ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
		<ImageDetail title="Cabin" imageSource={require('../../assets/forest.jpg')}/>
		
	</View>
	);
} ;

const styles = StyleSheet.create( {
	textStyle: {
		fontSize: 30
	},
	nameStyle: {
		fontSize: 20
	}
});

export default ImageScreen;
