// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
         <Card  style={styles.card}>
         <Card.Title title="English Meaning" style={styles.cardHeader}/>
          <Text style={styles.paragraph}>
            "Your English Meaning"
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    marginTop :0,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    
    
  },
  card: {
   elevation: 25,
   shadowColor: 'green',
   height: 150,
   
    
  },
  cardHeader: {
    backgroundColor: 'pink',
    color: 'black',
    elevation: 25,
  }
});