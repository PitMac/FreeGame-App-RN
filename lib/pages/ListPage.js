import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {getGamePC, getGamePvP, getGameShooter, getGameTotal} from '../api/api';
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
    paddingTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#1e1e1e',
  },
});
