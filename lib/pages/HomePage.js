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
  const {images, imagesPC, imagesShooter, imagesmmr, imagesPvp} = useData();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Best Free-To-Play</Text>
        <CarouselComponent images={images} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: images,
                title: 'Best Free-To-Play',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all the games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best Browser Games</Text>
        <CarouselComponent images={imagesPC} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: imagesPC,
                title: 'Best Browser Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all Browser games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best Shooters Games</Text>
        <CarouselComponent images={imagesShooter} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: imagesShooter,
                title: 'Best Shooters Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all Shooters games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best MMORPG Games</Text>
        <CarouselComponent images={imagesmmr} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: imagesShooter,
                title: 'Best Shooters Games',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.text}>View all MMORPG games</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Best PvP Games</Text>
        <CarouselComponent images={imagesPvp} />
        <View style={styles.buttonsection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('List', {
                data: imagesPvp,
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
