import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { TouchableWithoutFeedback } from 'react-native-web';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#24292e",
    paddingBottom: 20,
    paddingLeft: 10,
  },
  text: {
    color:"#FFFFFF",
    fontWeight: "bold",
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <TouchableWithoutFeedback>
    <Link to="/">
        <Text style={styles.text}>Repositories</Text>
    </Link> 
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback>
    <Link to="/signin">
    <Text style={styles.text}>Sign in</Text>
    </Link>
    </TouchableWithoutFeedback>
    </View>;
};

export default AppBar;