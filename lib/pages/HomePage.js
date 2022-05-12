import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import {useNavigation} from '@react-navigation/native';
import useData from '../hooks/useData';

export default function HomePage() {
  const navigation = useNavigation();
  const {games, gamesPC, gamesShooter, gamesmmr, gamesPvp} = useData();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Best Free-To-Play</Text>
        <CarouselComponent games={games} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: games,
                title: 'Best Free-To-Play',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all the games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best Browser Games</Text>
        <CarouselComponent games={gamesPC} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: gamesPC,
                title: 'Best Browser Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all Browser games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best Shooters Games</Text>
        <CarouselComponent games={gamesShooter} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: gamesShooter,
                title: 'Best Shooters Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all Shooters games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best MMORPG Games</Text>
        <CarouselComponent games={gamesmmr} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: gamesShooter,
                title: 'Best Shooters Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all MMORPG games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best PvP Games</Text>
        <CarouselComponent games={gamesPvp} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: gamesPvp,
                title: 'Best PvP Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all PvP games</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 0,
    backgroundColor: '#1e1e1e',
  },
  container: {
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonsection: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginRight: 15,
  },
  button: {
    borderColor: '#4156bd',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
  },
});
