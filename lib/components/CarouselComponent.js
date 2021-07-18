import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CarouselComponent({images}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        initialNumToRender={10}
        horizontal
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {game: item, title: item.title})
              }>
              <View>
                <Image source={{uri: item.thumbnail}} style={styles.images} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  images: {
    width: 120,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
    borderColor: '#4156bd',
    borderWidth: 1.5,
  },
});
