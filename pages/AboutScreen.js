
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground, ScrollView } from 'react-native';

const image = { uri: "https://t4.ftcdn.net/jpg/04/28/34/59/240_F_428345997_eNlWHc96y3WP0lXCtpxySZ0WxMwuMTcr.jpg"};

import { Card } from 'react-native-elements';


const users = [

{
  name: 'Moreshwar A. Mahale',
  avatar:
    'https://i.ibb.co/L04sdDK/moru.jpg',
},
{
  name: 'Sushant A. Zope',
  avatar:
    'https://i.ibb.co/pyxqz23/sushant.jpg',
},
{
  name: 'Ashish P. Gupta',
  avatar:
    'https://i.ibb.co/CMJ2Yyc/ashish.jpg',
},
{
  name: 'Soham P. Chaudhari',
  avatar:
    'https://i.ibb.co/zs9kr6b/soham.jpg',
},

];

const App = () => {
  return (
    <>
     <ImageBackground source={image} resizeMode="cover" style={styles.backimage}>
  <ScrollView>
    <SafeAreaView style={styles.container}>
    
      <View style={styles.container}>
        <Card>
         <Card.Title style={{ backgroundColor: "orange"}}>About Application</Card.Title>
          <Text style={styles.paragraph}>
          
          Sanskrit is one of the oldest languages of the Asian Subcontinent that fell out of common usage around 600 B.C. Trying to attempt the translation of Sanskrit to English using Neural Machine Translation approaches based on Reinforcement Learning and Transfer learning that were never tried and tested on Sanskrit. Along with this also release monolingual Sanskrit and parallel aligned Sanskrit English corpora for the community. Our methodologies outperform the previous approaches applied to Sanskrit by various researchers and will further help the linguistic community to accelerate the costly and time consuming manual translation process.
          </Text>
        </Card>

        <Card>
         <Card.Title style={{ backgroundColor: "orange"}}>Need Of The Application</Card.Title>
          <Text style={styles.paragraph}>
          
          Before the developing the application the people had to be read so many traditional books to know about vedas, some people did not understand of some sankrit words , but after developing the application ,now it became easier to understand or reading the sanskrit so it is very helpful application .
          </Text>
        </Card>

        <Card>
         <Card.Title style={{ backgroundColor: "orange"}}>Aim & Objective Of Application</Card.Title>
          <Text style={styles.paragraph}>
          
          There are the aim of the system is to provide digital knowledge , and easy understanding of sanskrit into english and hindi.
          </Text>
        </Card>

        <Card>
         <Card.Title style={{ backgroundColor: "orange"}}>Conclusion Of Application</Card.Title>
          <Text style={styles.paragraph}>
          
        We explored approaches that have never before been used for the translation of the
Sanskrit language to English. Firstly we established a baseline with the Transformer
architecture. explicit comment that Transformers architecture is the first time explored
in our research, a few unofficial repositories have worked and published the results.
In the future, we would try to add more parallel data to improve the trained models
quality. We believe that our research would open the doors for many researchers, linguists,
and students to work and explore Sanskrit.
          </Text>
        </Card>

        <Card >
         <Card.Title style={{ backgroundColor: "orange"}}>Devloper Info</Card.Title>
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>


      </View>
       </SafeAreaView>
      </ScrollView>
    </ImageBackground>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,

  },
  paragraph: {
    margin: 20,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'justify'
  },
  user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 70,
  height: 70,
  marginRight: 10,
},
name: {
  fontSize: 24,
  marginTop: 5,
},

backimage: {
  justifyContent: "center",
  resizeMode: 'cover',
  width: "100%",
  height: "100%",
  alignSelf: "flex-end",
  position: 'absolute',
  bottom:0,
  top: 0
  },
});
