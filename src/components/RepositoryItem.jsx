import { FlatList, View, Text, StyleSheet } from 'react-native';

const RepositoryItem = ({ name, description, language, stars, forks, reviews, rating }) => (
    <View>
      <Text>Full name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stars}</Text>
      <Text>Forks: {forks}</Text>
      <Text>Reviews: {reviews}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  );

export default RepositoryItem;