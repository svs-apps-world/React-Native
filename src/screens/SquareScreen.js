import React, { useReducer } from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREAMENT = 25;

const reducer = (state, action) => {
	// state === { red: number, green: number, blue: number}
	// mnm action === colorToChange: 'red' || 'green' || 'blue'

	switch(action.colorToChange) {
		case 'red':
			if(state.red + action.amount < 0 || state.red + action.amount > 255)
				return state
			return { ...state, red: state.red + action.amount}
			break
		case 'green':
			if(state.green + action.amount < 0 || state.green + action.amount > 255)
				return state
			return { ...state, green: state.green + action.amount}
			break
		case 'blue':
			if(state.blue + action.amount < 0 || state.blue + action.amount > 255)
				return state
			return { ...state, blue: state.blue + action.amount}
			break
		default:
			return state
			break
	}

}

const SquareScreen = () => {
const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
console.log(state)

	return (
		<View>
			<ColorCounter 
				onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREAMENT})}
				onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREAMENT})}
				color = "Red"
				
			/>
			<ColorCounter color = "Blue"
				onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREAMENT})}
				onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREAMENT})}
				/>

			<ColorCounter color = "Green"
				onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREAMENT})}
				onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREAMENT})}/>

				<View 
					style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}
				/>
		</View>
		);
};



const styles = StyleSheet.create({});

export default SquareScreen;
