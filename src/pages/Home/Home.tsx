import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NewHeader from '../../../components/header';
import {Button} from '@rneui/themed';
import {NavigationProp} from '@react-navigation/native';

type HomeProps = {
  title: string;
};

type StackParamList = {
  Project: undefined;
  TaskList: undefined;
};

type ScreenProps = {
  navigation: NavigationProp<StackParamList>;
};

function HomeTitle({title}: HomeProps): React.JSX.Element {
  return (
    <View style={styles.HomeContainer}>
      <Text style={[styles.HomeTitle]}>{title}</Text>
    </View>
  );
}

const HomeScreen: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NewHeader title="Aplicações Mobile 📲" />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
            <HomeTitle title="Lista de Tarefas ✅" />
            <Button onPress={() => navigation.navigate('TaskList')}>
              Criar
            </Button>
          </View>
          <View style={styles.Button}>
            <HomeTitle title="Gerenciador de Projetos 💻" />
            <Button onPress={() => navigation.navigate('Project')}>
              Criar
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    alignItems: 'center',
  },
  HomeTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  ButtonContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Button: {
    gap: 5,
    borderRadius: 5,
    backgroundColor: '#e9e9e9',
    padding: 10,
  },
});

export default HomeScreen;
