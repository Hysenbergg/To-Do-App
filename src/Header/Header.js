import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Header.style"

const Header = ({todos}) => {

    const activeTodos = todos.filter(todo => !todo.isDone);

  return (
    <View style={styles.header_container}>
        <Text style={styles.header}>Yapılacaklar</Text>
        <Text style={styles.count_todo}>{activeTodos.length}</Text>
    </View>
  )
}

export default Header