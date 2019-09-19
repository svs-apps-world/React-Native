import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return <View>
  		<Text style={styles.text}> Hi!! Snehal is cool.. wow..</Text>
  		<Button 
	  		title = "Go to Components Demo"
	  		onPress={() => props.navigation.navigate('Components')}
  		/>
  		<Button 
	  		title = "Go to List Demo"
	  		onPress={() => props.navigation.navigate('Lists')}
  		/>
  		<Button 
	  		title = "Go to Image Demo"
	  		onPress={() => props.navigation.navigate('Img')}
  		/>

      <Button 
        title = "Go to CounterScreen Demo"
        onPress={() => props.navigation.navigate('Counter')}
      />

       <Button 
        title = "Go to ColorScreen Demo"
        onPress={() => props.navigation.navigate('Color')}
      />

       <Button 
        title = "Go to Square Screen Demo"
        onPress={() => props.navigation.navigate('Square')}
      />
  		
  	</View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

