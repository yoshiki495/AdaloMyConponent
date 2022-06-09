import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MyComponent = (props) => {
	const { color, text } = props

	return(
		<View style={styles.wrapper}>
			<Text style={{ color }}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default MyComponent
