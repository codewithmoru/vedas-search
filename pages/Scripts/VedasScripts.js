import React, { useState } from 'react';
import { Text, Card, Button, Icon} from '@rneui/themed';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
const image = { uri: "https://t4.ftcdn.net/jpg/04/28/34/59/240_F_428345997_eNlWHc96y3WP0lXCtpxySZ0WxMwuMTcr.jpg"};

import Rigveda from './Rigveda';

const HomeScreen = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
  };

  if (buttonPressed) {
    return <Rigveda />;
  }

  return (
   <>
   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <ScrollView>
        <Card>
          <Card.Title>Rigveda</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i0.wp.com/culturalsamvaad.com/wp-content/uploads/2019/08/rig-veda-01.jpg?fit=1920%2C1080&ssl=1',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
           style={styles.btn}
            title="VIEW NOW"
            onPress={handleButtonPress}
          />
        </Card>
        <Card>
          <Card.Title>Yajurveda</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i0.wp.com/culturalsamvaad.com/wp-content/uploads/2019/11/yajur-veda-01.jpg?fit=545%2C424&ssl=1',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
           style={styles.btn}
            title="VIEW NOW"
          />
        </Card>
        <Card>
          <Card.Title> Atharvaveda</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://culturalsamvaad.com/wp-content/uploads/2019/11/atarva-veda-01.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
           style={styles.btn}
            title="VIEW NOW"
          />
        </Card>
        <Card>
          <Card.Title>Samaveda</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yg4JxRRPqdVQbw4miGG1jNtifZ3vycGNbg&usqp=CAU',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            style={styles.btn}
            title="VIEW NOW"
          />
        </Card>
     </ScrollView>
   </ImageBackground>
  </>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
 
  image: {
    justifyContent: "center",
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
    alignSelf: "flex-end",
    position: 'absolute',
    bottom:0,
     top: 0
  },
   btn: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      borderRadius:20
  
   }
});
