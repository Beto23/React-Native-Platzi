import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export const Comment = (props) => {
    return (
        <View style={styles.comment}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    comment: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        margin: 5,
        borderRadius: 5
    }
})