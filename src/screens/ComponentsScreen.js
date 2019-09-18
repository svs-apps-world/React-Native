import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const myname = "snehal"
	
	return (
	<View>
		<Text style={styles.textStyle}>Getting started with react-native </Text>
		<Text style={styles.nameStyle}> My name is {myname} </Text>
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

export default ComponentsScreen;
