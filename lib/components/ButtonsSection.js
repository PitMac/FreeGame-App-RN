import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ButtonsSection() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonsection}>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <View style={styles.button}>
          <Text style={styles.text}>Search a game</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsection: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 15,
  },
  button: {
    borderColor: '#4156bd',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
  },
});
