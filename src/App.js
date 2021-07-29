import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'


const App = () => {

	return (
		<View style={styles.container}>
			<Ionicons
				name="home"
				size={34} />
			<Text
				maxFontSizeMultiplier={1}
				style={styles.headingText}>
				Home
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headingText: {
		fontSize: 16,
		fontFamily: 'Raleway-Bold'
	}
})

export default App;
