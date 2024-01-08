import React from 'react';
import {ScrollView} from 'react-native';
import NewHeader from '../../../components/header';
import TaskList from '../../../components/TaskList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NewHeader title="Lista de Tarefas 📲" />
        <TaskList />
      </ScrollView>
    </SafeAreaView>
  );
}
