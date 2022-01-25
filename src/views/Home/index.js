/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  // StyleSheet,
  // ScrollView,
  // Text,
  // TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Skeleton from '../Skeleton';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Skeleton />
    </View>
  );
};

// <View style={styles.container}>
//   <ScrollView
//     style={styles.containerScroll}
//     contentContainerStyle={{padding: 20}}>
//     <Text style={styles.textHeader}>Para onde você deseja navegar?</Text>
//     <TouchableOpacity style={styles.btnNavigation} activeOpacity={0.7}>
//       <Icon name="home" size={29} color={'#fafafa'} />
//       <Text style={styles.textButton}>Home</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.btnNavigation} activeOpacity={0.7}>
//       <Icon name="information-circle-sharp" size={29} color={'#fafafa'} />
//       <Text style={styles.textButton}>Sobre</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.btnNavigation} activeOpacity={0.7}>
//       <Icon name="briefcase-sharp" size={29} color={'#fafafa'} />
//       <Text style={styles.textButton}>Home</Text>
//     </TouchableOpacity>
//   </ScrollView>
// </View>
// <View>
//   <Text>Home</Text>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#dedede',
//   },
//   containerScroll: {
//     backgroundColor: '#fafafa',
//   },
//   textHeader: {
//     fontSize: 24,
//     color: '#5f5380',
//   },
//   btnNavigation: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     marginTop: 20,
//     backgroundColor: '#5f5380',
//   },
//   textButton: {
//     color: '#fff',
//     marginLeft: 8,
//     marginRight: 8,
//   },
// });

export default Home;
