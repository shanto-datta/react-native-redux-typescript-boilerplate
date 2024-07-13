import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {State} from '../../redux/types';

const TodoList: React.FC = () => {
  const userTodo = useSelector((state: State) => state.todo.userTodo);

  return (
    <FlatList
      data={userTodo}
      renderItem={({item}) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default TodoList;
