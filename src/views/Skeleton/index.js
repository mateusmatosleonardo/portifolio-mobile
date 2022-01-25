import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
// ScrollView
// import {scale} from 'react-native-size-matters';
// import Icon from 'react-native-vector-icons/Ionicons';

const Skeleton = () => {
  const AnimatedValue = new Animated.Value(0);

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100],
  });

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.containerPhoto}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '30%',
              height: '100%',
              opacity: 0.5,
              backgroundColor: '#fff',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styles.textProfile} />
        <View style={styles.containerAbout} />
        <View style={styles.containerAboutTwo} />
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
    width: 150,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#ECEFF1',
    marginTop: 10,
  },

  containerPhoto: {
    width: 100,
    height: 100,
    backgroundColor: '#ECEFF1',
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
    color: '#ECEFF1',
    padding: 10,
    backgroundColor: '#ECEFF1',
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
  containerAbout: {
    width: '100%',
    height: 10,
    backgroundColor: '#ECEFF1',
    marginTop: 20,
  },
  containerAboutTwo: {
    width: '50%',
    height: 10,
    backgroundColor: '#ECEFF1',
    marginTop: 10,
  },
});

export default Skeleton;
