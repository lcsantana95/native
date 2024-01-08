import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Project from './src/pages/Project/Project';
import Home from './src/pages/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskList from './src/pages/Task/TaskList';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Bem vindo!',
            headerStyle: {backgroundColor: '#FFF'},
            headerTintColor: '#535050',
          }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{title: 'Voltar'}}
        />
        <Stack.Screen
          name="Project"
          component={Project}
          options={{title: 'Voltar'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
