import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function Home({navigation}) {
  const [input, setInput] = useState('');
  const inputRef = useRef();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="input here"
        placeholderTextColor="white"
        onChangeText={text => setInput(text)}
      />
      <Text>{input}</Text>
      <TextInput
        style={styles.input}
        placeholder="input here"
        placeholderTextColor="white"
        // onChangeText={text => setInput(text)}
        ref={inputRef}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const userData = {
            username: input,
            email: 'arka@demy.com',
          };
          navigation.navigate('Profile', userData);
        }}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: 30,
  },
  container: {
    backgroundColor: '#98A7C3',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    padding: 5,
  },
  buttonText: {
    color: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    margin: 5,
    width: Dimensions.get('window').width - 10,
  },
  title: {
    fontSize: 32,
  },
});
