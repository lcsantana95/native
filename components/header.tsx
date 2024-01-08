import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderProps = {
  title: string;
};

const NewHeader = ({title}: HeaderProps) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    padding: 15,
    backgroundColor: '#3192ec',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default NewHeader;
