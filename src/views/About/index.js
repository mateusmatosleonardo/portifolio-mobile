import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Skeleton from '../Skeleton';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContact from '../../components/Modal/Modal';
// ScrollView
// import {scale} from 'react-native-size-matters';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 3000);
  });

  const [isVisible, setIsVisible] = useState(false);

  return (
    <Skeleton visible={loading}>
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
            Estudante de ciência da computação e desenvolvedor front-end há mais
            de 2 anos
          </Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.btnMoreInfo}>Mais informações</Text>
          <ScrollView
            overScrollMode="never"
            showsVerticalScrollIndicator={false}>
            <Text style={styles.textLorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              venenatis dui, nec fermentum erat. Etiam vel metus purus. Aliquam
              nisl metus, tincidunt venenatis lectus vel, mattis sodales ligula.
              Sed at ornare libero. Proin varius purus vel sapien interdum
              tristique. Maecenas finibus ligula vel nisi finibus pretium.
              Aliquam quam mi, viverra et purus et, gravida elementum felis. Ut
              maximus orci quis tortor imperdiet euismod. Pellentesque tristique
              volutpat elit non rutrum. Integer luctus erat quis vulputate
              pulvinar. Sed orci risus, dapibus fermentum iaculis eu, lacinia
              eget nunc. Fusce sem nunc, pretium id risus quis, eleifend
              porttitor augue. Aenean sollicitudin pulvinar ante et iaculis.
              Quisque placerat interdum odio sit amet semper. Praesent ornare
              aliquet elit, id sagittis lorem semper in. Cras urna nibh, cursus
              at consectetur ut, malesuada eget tellus. Nam rhoncus, odio nec
              mollis vehicula, arcu eros consectetur ex, eget sollicitudin enim
              dui ut magna. Quisque ac mauris congue, hendrerit velit non,
              mattis odio. Curabitur tempor magna vitae quam fermentum lacinia.
              Vestibulum ut magna at tellus ultrices imperdiet ut et arcu. Donec
              feugiat tincidunt porta. Ut ac risus sit amet nibh sagittis tempor
              consequat ut mauris.
            </Text>
          </ScrollView>

          {/* <ScrollView overScrollMode="never" persistentScrollbar={true}>
            <Text style={styles.titleInformation}>Contato</Text>
            <View style={styles.centerInformation}>
              <Icon name="location-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Itapipoca - CE</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="mail-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>m4teusmatos@gmail.com</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="ios-call-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>+55 (88)981890344</Text>
            </View>

            <TouchableOpacity
              style={styles.touch}
              onPress={() => setIsVisible(true)}>
              <Text style={styles.btnContact}>Entre em contato</Text>
            </TouchableOpacity>

            <Text style={styles.titleInformation}>Interesses</Text>
            <View style={styles.centerInformation}>
              <Icon name="headset-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Músicas</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="book-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Ler e estudar</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="terminal-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Programar</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="game-controller-outline" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Jogar</Text>
            </View>
            <Text style={styles.titleInformation}>Social</Text>
            <View style={styles.centerInformation}>
              <Icon name="logo-linkedin" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Mateus Matos</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="logo-facebook" size={25} color={'#056'} />
              <Text style={styles.textInformation}>Mateus Matos</Text>
            </View>
            <View style={styles.centerInformation}>
              <Icon name="logo-github" size={25} color={'#056'} />
              <Text style={styles.textInformation}>@mateusmatosleonardo</Text>
            </View>
          </ScrollView> */}
        </View>
        <ModalContact isVisible={isVisible} setIsVisible={setIsVisible} />
      </View>
    </Skeleton>
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
    fontFamily: 'Montserrat-Bold',
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
  centerInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titleInformation: {
    fontSize: 20,
    paddingVertical: 6,
    fontFamily: 'Poppins-Medium',
    color: '#056',
  },
  textInformation: {
    color: '#313030',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginLeft: 6,
  },
  btnContact: {
    width: 120,
    maxWidth: 120,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#056',
  },
  touch: {
    maxWidth: 120,
    width: 120,
  },
  textLorem: {
    color: '#313030',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    marginTop: 10,
  },
});

export default About;
