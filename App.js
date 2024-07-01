import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Tasks.js';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {

    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {

    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }


  return (
    <View style={styles.container}>
      <View style={styles.Today_Task}>
        <Text style={styles.task} >Abdullah's Todo </Text>

        <View>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask(index) }>
                   <Task  text={item} />
                </TouchableOpacity>
              )
            })
           
          }

        </View>


      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>



      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8a8a7',
  },

  task: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },

  Today_Task: {
    paddingHorizontal: 10,
    padding: 60,

  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,

  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },






});
