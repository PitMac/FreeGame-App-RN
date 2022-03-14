import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListComponent from '../components/ListComponent';

export default function ListPage({route}) {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ListComponent games={data} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#1e1e1e',
  },
});
