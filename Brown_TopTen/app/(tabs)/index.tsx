import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import MovieCard from './components/MovieCard';


const movies = [
  { id: '1', title: 'The Shawshank Redemption', poster: 'https://via.placeholder.com/150', rating: '9.3' },
  { id: '2', title: 'The Godfather', poster: 'https://via.placeholder.com/150', rating: '9.2' },
  { id: '3', title: 'The Dark Knight', poster: 'https://via.placeholder.com/150', rating: '9.0' },
  { id: '4', title: 'Pulp Fiction', poster: 'https://via.placeholder.com/150', rating: '8.9' },
  { id: '5', title: 'Forrest Gump', poster: 'https://via.placeholder.com/150', rating: '8.8' },
  { id: '6', title: 'Inception', poster: 'https://via.placeholder.com/150', rating: '8.7' },
  { id: '7', title: 'Fight Club', poster: 'https://via.placeholder.com/150', rating: '8.8' },
  { id: '8', title: 'The Matrix', poster: 'https://via.placeholder.com/150', rating: '8.7' },
  { id: '9', title: 'The Lord of the Rings: The Return of the King', poster: 'https://via.placeholder.com/150', rating: '8.9' },
  { id: '10', title: 'Interstellar', poster: 'https://via.placeholder.com/150', rating: '8.6' }
];

const App = () => {

  const renderMovie = ({ item }: { item: { id: string; title: string; poster: string; rating: string } }) => (
    <MovieCard title={item.title} poster={item.poster} rating={item.rating} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top 10 Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovie}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default App;
