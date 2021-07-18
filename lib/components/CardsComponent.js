import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

export default function CardsComponent({game}) {
  const openUrl = useCallback(async () => {
    const supported = await Linking.canOpenURL(game.game_url);
    if (supported) {
      await Linking.openURL(game.game_url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${game.game_url}`);
    }
  }, [game.game_url]);
  return (
    <View>
      <View style={styles.datas}>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Genre:</Text>
          <Text style={styles.description}>{game.genre}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Platform:</Text>
          <Text style={styles.description}>{game.platform}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Publisher:</Text>
          <Text style={styles.description}>{game.publisher}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={openUrl} style={styles.button}>
        <Text style={styles.description}>Game Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#4156bd',
    paddingVertical: 15,
  },
  datas: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    textAlign: 'justify',
  },
  button: {
    borderColor: '#4156bd',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
