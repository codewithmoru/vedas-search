import * as React from 'react';

import { Appbar} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = () => (
  <Appbar style={styles.appbar}>
    <Appbar.Content title="Vedas"/>
   
  </Appbar>
);

export default Header;

const styles = StyleSheet.create({
   appbar: {
    // position: 'sticky',
    top: 0,
    marginTop:-100
  },


});
