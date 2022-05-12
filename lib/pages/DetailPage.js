import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {getDataGame} from '../api/api';
import CardsComponent from '../components/CardsComponent';
import CarouselComponentDetail from '../components/CarouselComponentDetail';

export default function DetailPage({route}) {
  const {game} = route.params;
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    const datas = await getDataGame(game.id);
    setGames(datas);
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{backgroundColor: '#1e1e1e', flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#4156bd" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View>
          <View style={styles.imageB}>
            <Image style={styles.image} source={{uri: games.thumbnail}} />
          </View>
          <CardsComponent game={games} />
          <Text style={styles.subtitle}>Description:</Text>
          <Text style={styles.description}>{games.description}</Text>
          <Text style={styles.subtitle}>Screenshots:</Text>
          <CarouselComponentDetail games={games.screenshots} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#1e1e1e',
  },
  container: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  imageB: {
    height: 200,
  },
  image: {
    borderWidth: 2,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    borderColor: '#4156bd',
  },
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
