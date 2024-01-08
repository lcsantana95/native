import {Input} from '@rneui/themed';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from '@rneui/themed';

interface Task {
  name: string;
  completed: boolean;
}

function TaskList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = () => {
    if (task !== '') {
      setTaskList([...taskList, {name: task, completed: false}]);
      setTask('');
    }
  };

  const toggleCompletion = (index: number) => {
    setTaskList(
      taskList
        .map((item, i) =>
          i === index ? {...item, completed: !item.completed} : item,
        )
        .filter(item => !item.completed),
    );
  };

  return (
    <View style={styles.TasksContainer}>
      <View style={styles.TasksView}>
        <Text style={styles.TaskText}>Tarefas</Text>
        <ScrollView>
          {taskList.map((item, index) => (
            <View key={index} style={styles.Newlist}>
              <TouchableOpacity onPress={() => toggleCompletion(index)}>
                <Text>{item.completed ? ' ' : '✅'}</Text>
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputTask}>
        <Input
          value={task}
          onChangeText={setTask}
          placeholder="Digite uma tarefa"
        />
        <Button title="Adicionar tarefa" onPress={addTask} color="warning" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Newlist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TasksView: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    alignItems: 'center',
  },
  TaskText: {fontSize: 20, fontWeight: '600'},
  TasksContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputTask: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  containerStyle: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    marginRight: 10,
  },
});

export default TaskList;
