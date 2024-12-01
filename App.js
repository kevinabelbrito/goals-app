import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (!enteredGoalText) {
      Alert.alert("Warning!","Your goal is empty");
      return;
    }
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModal();
  }

  function deleteGoalHandler(id) {
    Alert.alert(
      "Warning!", 
      "Would you like to delete this goal?",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, Do it!',
          onPress: () => setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
          }),
          style: 'default',
        },
      ],
    );
  }

  function openModal() {
    setModalIsVisible(true);
  }

  function closeModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#b180f0'
          onPress={openModal}
        />
        <GoalInput 
          onAddGoal={addGoalHandler} 
          isVisible={modalIsVisible}
          onCancel={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem itemData={itemData} onDeleteGoal={deleteGoalHandler} />
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  },
});
