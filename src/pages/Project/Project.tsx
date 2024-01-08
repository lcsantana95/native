import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NewHeader from '../../../components/header';
import ProjectManager from '../../../components/Project';

function Project(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NewHeader title="Gerenciador de Projetos 💻" />
        <View>
          <ProjectManager />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Project;
