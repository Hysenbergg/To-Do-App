import {View,StyleSheet,FlatList,Alert} from 'react-native';
import React, {useState} from 'react';
import TodoList from './ToDoList/ToDoList';
import Header from './Header/Header';
import Input from './Input/Input';
import todoData from "./ToDoData.json"

const App = () => {
  const [todos, setTodos] = useState(todoData);
  const [text, setText] = useState('');

  const renderTodos = ({item}) => (
    <TodoList
      todos={item}
      changeIsDone={changeIsDone}
      deleteTodo={deleteTodo}
    />
  );

  const handleAddTodo = () => {
    if(text === "") return Alert.alert("Boş bir ekleme yapamazsınız...")
    setTodos([...todos,{job: text, isDone: false, id: Date.now() + Math.random()}]);
    setText('');
  };

  const changeIsDone = (id) => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Header todos={todos} />
        <FlatList 
          data={todos} 
          renderItem={renderTodos}
        />
      </View>
      <Input 
        setText={setText} 
        text={text} 
        handleAddTodo={handleAddTodo} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#102027',
  },
  inner_container:{
    flex:1,
  }
});

export default App;