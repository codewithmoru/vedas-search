import React, { useState } from 'react';
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Icon} from '@rneui/themed';
import VedasScripts from './VedasScripts'

const HomeScreen = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
  };

  if (buttonPressed) {
    return <VedasScripts />;
  }


    
    return Platform.OS === "web" ? (
     <>
     
      <iframe src="https://drive.google.com/file/d/1Q23eP6rR4eSkhdmlQcb1u_ZTs2YvupfC/view?usp=share_link"  height={'100%'} width={'100%'} />
       
      </>
    ) : (
    
      <View style={{ flex: 1 }}>        
        <WebView  
          source={{ uri: "https://drive.google.com/file/d/1Q23eP6rR4eSkhdmlQcb1u_ZTs2YvupfC/view?usp=share_link" }}
          style={{marginTop: 0, flex: 1}}     />
<View style={{flex: 1, margin: 150, position: "absolute", bottom: 0, left: 150, width: 25, height: 25,}}>
    <Icon raised reverse name='chevron-left' type='font-awesome' color='#f50' size={20} onPress={handleButtonPress} />
         </View>
      </View>
      
     
    )
  
};

export default HomeScreen;


