import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import { Audio } from 'expo-av';
import { Card, Icon } from '@rneui/themed';
//import { Card } from 'react-native-paper';

const image = {
  uri: 'https://t4.ftcdn.net/jpg/04/28/34/59/240_F_428345997_eNlWHc96y3WP0lXCtpxySZ0WxMwuMTcr.jpg',
};
export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./GanaptiMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./GanaptiMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound1() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./GayatriMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound1() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./GayatriMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound2() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./OmGanGanpateyeNamoNamah.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound2() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./OmGanGanpateyeNamoNamah.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound3() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./MahamrityunjayMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound3() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./MahamrityunjayMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound4() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./BalajiMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound4() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./BalajiMantra.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound5() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./OmDhvaniDevotional.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound5() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./OmDhvaniDevotional.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  async function playSound6() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./ShriShivayNamastubhiyam.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function pauseSound6() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./ShriShivayNamastubhiyam.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.current.pauseAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <View style={styles.container}>
            <Card>
              <Card.Title style={styles.cardHeader}>VEDAS MANTRA</Card.Title>
              <Card.Divider />

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>
                  Vakratunda Mahakaya
                </Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>
                  Gayatri Mantra
                </Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound1}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound1}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>
                  Om Gan Ganpataye Namah
                </Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound2}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound2}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>
                  Maha Mrityunjaya Mantra
                </Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound3}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound3}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>Balaji Mantra</Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound4}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound4}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>OM MANTRA</Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound5}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound5}
                    />
                  </View>
                </View>
              </Card>

              <Card style={styles.card}>
                <Card.Title style={styles.cardHeader}>
                  Shree Shivay Namastubhyam
                </Card.Title>
                <View style={styles.fixToText}>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Play"
                      color="orange"
                      onPress={playSound6}
                    />
                  </View>
                  <View style={styles.container1}>
                    <Button
                      type="outline"
                      title="Pause"
                      color="orange"
                      onPress={pauseSound6}
                    />
                  </View>
                </View>
              </Card>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginTop: 0,
  },
  card: {
    padding: 10,
    elevation: 25,
    shadowColor: 'green',
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'blue',
    opacity: 0.6,
  },
  cardHeader: {
    backgroundColor: 'pink',
    color: 'dark',
    elevation: 25,
  },
  fixToText: {
    flexDirection: 'row',
    marginHorizontal: 50,
  },

  image: {
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    top: 0,
  },

  container1: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 50,
  },
});
