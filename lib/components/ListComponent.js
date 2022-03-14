import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UsersItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        borderRadius={10}
        blurRadius={2}
        source={{uri: item.thumbnail}}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default function ListComponent({games}) {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {game: item, title: item.title})
        }>
        <UsersItem item={item} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <TextInput
          placeholder="Search a game"
          placeholderTextColor="grey"
          onChangeText={text => setSearch(text)}
          style={styles.input}
        />
      </View>
      <FlatList
        scroll
        initialNumToRender={15}
        showsVerticalScrollIndicator={false}
        data={games.filter(game =>
          game.title.toLowerCase().includes(search.toLowerCase()),
        )}
        keyExtractor={item => item.id + ''}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#424242',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    borderRadius: 10,
    borderColor: '#4156bd',
    borderWidth: 2,
    color: 'white',
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 10,
  },
});
