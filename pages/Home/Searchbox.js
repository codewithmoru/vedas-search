// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image , TextInput, Button} from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const App = () => {
  return (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card  style={styles.card}>
          <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Search Word"
        />
        </Card>
         <View style={styles.button}>
        <Button type="outline" title="Translate" color="orange" />
      </View>
      </View>
    </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'center',
    padding: 20,
  
  },
  card: {
   elevation: 35,
   shadowColor: 'blue',
   borderRadius: 20,
   borderColor:"pink",
   borderBottomRightRadius:50,
   borderTopLeftRadius:50
   
  },

   input: {
    borderColor: "pink",
    width: "100%",
    borderWidth: 5,
    borderRadius: 20,
    padding: 50,
    alignItems:"center",
    borderBottomRightRadius:50,
    borderTopLeftRadius:50

  },
  button: {
    marginTop: 30,
    alignItems: "center",
  }
});