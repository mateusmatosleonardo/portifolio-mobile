import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.containerPhoto}>
          <Image
            source={require('../../assets/images/me.jpg')}
            style={styles.photo}
          />
        </View>
        <Text style={styles.textProfile}>Mateus Leonardo</Text>
        <Text style={styles.textAbout}>
          I have been a computer science student and front-end developer for
          over 2 years.
        </Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.btnMoreInfo}>More information</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  profile: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#056',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textProfile: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  textAbout: {
    textAlign: 'center',
    marginTop: 10,
  },
  containerPhoto: {
    width: 100,
    height: 100,
    // backgroundColor: '#fff',
    // borderRadius: 50,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  about: {
    flex: 6,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  btnMoreInfo: {
    width: 150,
    fontSize: 14,
    padding: 10,
    color: '#fafafa',
    backgroundColor: '#056',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 20,
  },
});

export default About;
