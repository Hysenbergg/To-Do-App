import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ToDoList.style';

const TodoList = ({todos, changeIsDone, deleteTodo}) => {
  return (
    <View>
      <TouchableOpacity
        style={todos.isDone ? styles.doneTodo : styles.todo}
        onPress={() => changeIsDone(todos.id)}
        onLongPress={() => deleteTodo(todos.id)}>

        <Text style={todos.isDone ? styles.doneTodoText : styles.todoText}>
          {todos.job}
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;