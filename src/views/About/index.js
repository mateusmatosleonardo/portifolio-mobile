import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <ScrollView>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View>
            <Icon name="briefcase-sharp" size={20} color={'#222'} />
          </View>
        </ScrollView>
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
    marginTop: 20,
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
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
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
  expText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#414040',
    textAlign: 'center',
  },
  viewTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default About;
