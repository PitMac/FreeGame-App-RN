import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  getGameMMORPG,
  getGamePC,
  getGamePvP,
  getGameShooter,
  getGameTotal,
} from '../api/api';
import CarouselComponent from '../components/CarouselComponent';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [imagesPC, setImagesPC] = useState([]);
  const [imagesShooter, setImagesShooter] = useState([]);
  const [imagesmmr, setImagesmmr] = useState([]);
  const [imagesPvp, setImagesPvp] = useState([]);

  const getData = async () => {
    const data = await getGameTotal();
    setImages(data);
  };
  const getDataPC = async () => {
    const data = await getGamePC();
    setImagesPC(data);
  };
  const getDataShooter = async () => {
    const data = await getGameShooter();
    setImagesShooter(data);
  };
  const getDataMmorpg = async () => {
    const data = await getGameMMORPG();
    setImagesmmr(data);
  };
  const getDataPvp = async () => {
    const data = await getGamePvP();
    setImagesPvp(data);
  };

  useEffect(() => {
    getData();
    getDataPC();
    getDataShooter();
    getDataPvp();
    getDataMmorpg();
  }, []);

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
