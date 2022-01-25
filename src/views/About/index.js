import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// ScrollView
// import {scale} from 'react-native-size-matters';
// import Icon from 'react-native-vector-icons/Ionicons';

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
        {/* <ScrollView>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Education</Text>
          </View>
          <View style={styles.viewEdu}>
            <Icon name="book" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Computer Science - <Text style={styles.textEmp}>Estácio</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewEdu}>
            <Icon name="book" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Informática - <Text style={styles.textEmp}>IBEP</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewEdu}>
            <Icon name="book" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Inglês - <Text style={styles.textEmp}>IBEP</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Experience</Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="briefcase-sharp" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Software enginner - <Text style={styles.textEmp}>Arkos</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.expText}>Courses</Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="ios-pencil" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Front-End - <Text style={styles.textEmp}>Danki Code</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="ios-pencil" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              JavaScript - <Text style={styles.textEmp}>Danki Code</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="ios-pencil" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              JS Funcional e Reativo - <Text style={styles.textEmp}>Udemy</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="ios-pencil" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              TypeScript - <Text style={styles.textEmp}>Udemy</Text>{' '}
            </Text>
          </View>
          <View style={styles.viewExp}>
            <Icon name="ios-pencil" size={22} color={'#222'} />
            <Text style={styles.titleExp}>
              Intro à computação quântica -{' '}
              <Text style={styles.textEmp}>Udemy</Text>{' '}
            </Text>
          </View>
        </ScrollView> */}
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
  viewExp: {
    flexDirection: 'row',
    // backgroundColor: 'salmon',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  viewEdu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  titleExp: {
    fontSize: 16,
    color: '#414040',
    marginLeft: 10,
    marginRight: 10,
  },
  textExp: {
    fontSize: 14,
    color: '#414040',
  },
  textEmp: {
    fontWeight: 'bold',
  },
});

export default About;
