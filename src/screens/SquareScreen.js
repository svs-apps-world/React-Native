import React, { useState } from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

const [red, setRed] = useState(0);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);
const COLOR_INCREAMENT = 30

console.log(red);

	return (
		<View>
			<ColorCounter 
				onIncrease={() => setRed(red + COLOR_INCREAMENT)}
				onDecrease={() => setRed(red - COLOR_INCREAMENT)}
				color = "Red"
				
			/>
			<ColorCounter color = "Blue"
				onIncrease={() => setBlue(blue + COLOR_INCREAMENT)}
				onDecrease={() => setBlue(blue - COLOR_INCREAMENT)}
				/>

			<ColorCounter color = "Green"
				onIncrease={() => setGreen(green + COLOR_INCREAMENT)}
				onDecrease={() => setGreen(green - COLOR_INCREAMENT)}/>

				<View 
					style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
				/>
		</View>
		);
};



const styles = StyleSheet.create({});

export default SquareScreen;
