import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Routes from './lib/pages/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
