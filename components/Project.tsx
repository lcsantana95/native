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

interface Project {
  name: string;
  tier: number;
}

function ProjectList() {
  const [project, setProject] = useState('');
  const [tier, setTier] = useState(1);
  const [projectList, setProjectList] = useState<Project[]>([]);

  const addProject = () => {
    if (project !== '') {
      setProjectList([...projectList, {name: project, tier: tier}]);
      setProject('');
    }
  };

  const deleteProject = (index: number) => {
    setProjectList(projectList.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.ProjectsContainer}>
      <View style={styles.ProjectsView}>
        <Text style={styles.ProjectText}>Projetos</Text>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {projectList.map((item, index) => (
            <View key={index} style={styles.Newlist}>
              <TouchableOpacity onPress={() => deleteProject(index)}>
                <Text style={styles.deleteButton}>❌</Text>
              </TouchableOpacity>
              <Text>
                {item.name} (Tier {item.tier})
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputProject}>
        <Input
          value={project}
          onChangeText={setProject}
          placeholder="Digite um projeto"
        />
        <View>
          <Text>Selecione o tier do projeto:</Text>
          <View style={styles.tierSelection}>
            <TouchableOpacity onPress={() => setTier(1)}>
              <Text
                style={
                  tier === 1 ? styles.selectedTier : styles.unselectedTier
                }>
                Tier 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTier(2)}>
              <Text
                style={
                  tier === 2 ? styles.selectedTier : styles.unselectedTier
                }>
                Tier 2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTier(3)}>
              <Text
                style={
                  tier === 3 ? styles.selectedTier : styles.unselectedTier
                }>
                Tier 3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Adicionar projeto"
          onPress={addProject}
          color="warning"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Newlist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProjectsView: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    alignItems: 'center',
  },
  ProjectText: {fontSize: 20, fontWeight: '600'},
  ProjectsContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputProject: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  tierSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  selectedTier: {
    fontWeight: 'bold',
  },
  unselectedTier: {
    color: '#888',
  },
  deleteButton: {
    marginRight: 10,
  },
});

export default ProjectList;
