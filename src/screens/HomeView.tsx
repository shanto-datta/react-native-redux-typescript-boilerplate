import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {HomeScreenProps} from './screen.types';


import { useDispatch} from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import { fetchTodos } from '../api';
import todoAction from '../redux/actions';

const HomeView = ({navigation}: HomeScreenProps) => {
  const dispatch = useDispatch();

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      dispatch(todoAction.setUserTodo(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{padding: 10}}
          onPress={() => {
            navigation.navigate('SettingsView', {
              name: 'Settings',
              email: 'shanto.datta.cs@gmail.com',
            });
          }}>
          Settings
        </Text>
        <TodoList />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
