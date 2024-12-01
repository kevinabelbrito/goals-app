import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ itemData, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
        <Pressable 
            android_ripple={{color: '#210644'}}
            onPress={onDeleteGoal.bind(this, itemData.item.id)}
            // style={({pressed}) => pressed && styles.pressItem}
        >
            <Text style={styles.goalText}>
                {itemData.item.text}
            </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressItem: {
        opacity: 0.5,
    },
});

export default GoalItem