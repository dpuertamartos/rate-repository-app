import { FlatList, View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  avatar: {
    width: 60,
    height: 60,
  }
});

const round = (n) => {
return (n>1000?Math.round(n*10/1000)/10+'k':n)
}

const RepositoryItem = ({ name, description, language, stars, forks, reviews, rating, imagelink }) => (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: imagelink}}></Image>
      <Text>Full name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text style={{
        backgroundColor: theme.colors.primary, 
        color: "white",
        }}>{language}</Text>
      <Text>Stars: {round(stars)}</Text>
      <Text>Forks: {round(forks)}</Text>
      <Text>Reviews: {round(reviews)}</Text>
      <Text>Rating: {round(rating)}</Text>
    </View>
  );

export default RepositoryItem;