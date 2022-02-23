import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  bigFont: {
    fontSize: 96,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.title}, {item.releaseYear}</Text>
        )}
        />
      )}
        </View>
  );
};
