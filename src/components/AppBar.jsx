import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
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
  },
  column: {
    marginLeft: 15,
    marginRight: 15
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
    <TouchableWithoutFeedback>
    <Link to="/" style={styles.column}>
        <Text style={styles.text}>Repositories</Text>
    </Link> 
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback >
    <Link to="/signin" style={styles.column}>
    <Text style={styles.text}>Sign in</Text>
    </Link>
    </TouchableWithoutFeedback>
    </ScrollView>
    </View>
    ;
};

export default AppBar;