import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';

export default function CarouselComponentDetail({games}) {
  return (
    <View style={styles.container}>
      <FlatList
        bouncesZoom
        horizontal
        data={games}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={{uri: item.image}} style={styles.images} />
            </View>
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
    width: 150,
    height: 180,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
    borderColor: '#4156bd',
    borderWidth: 1,
  },
});
