import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';


const CounterScreen = () => {
	
	const [counter, setCounter] = useState(0);
	
	return (
	<View>
		<Button
			title="Increase"
			onPress={() => {
				setCounter(counter + 10)
			}}
		/>
		<Button
			title="Decrease"
			onPress={() => {
				setCounter(counter - 2)
			}}
		/>
		<Text style={styles.nameStyle}> Current Count: {counter}</Text>
		
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

export default CounterScreen;
