import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import close from '../../assets/icons/close.png';

const ModalContact = ({isVisible, setIsVisible}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.touchBtnClose}>
            <Image source={close} style={styles.btnClose} />
          </TouchableOpacity>
          <Text style={styles.textInput}>Qual seu nome?</Text>
          <TextInput style={styles.input} />
          <Text style={styles.textInputTwo}>Qual sua mensagem?</Text>
          {/* ajeitar o input area para começar a digitação de cima */}
          <TextInput style={styles.inputArea} numberOfLines={4} />
          <TouchableOpacity style={styles.touchSend} activeOpacity={0.7}>
            <Text style={styles.textSend}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 345,
    height: 439,
    marginLeft: scale(29),
    marginTop: scale(130),
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fafafa',
    elevation: 10,
  },
  touchBtnClose: {
    width: 16,
    height: 16,
    right: scale(20),
    position: 'absolute',
  },
  btnClose: {
    width: 16,
    height: 16,
    marginVertical: 14,
    marginHorizontal: 8,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#313030',
    marginTop: scale(46),
  },
  textInputTwo: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#313030',
    marginTop: scale(16),
  },
  input: {
    width: '100%',
    marginTop: 10,
    height: scale(42),
    borderWidth: 1,
    borderRadius: 10,
    color: '#313030',
    borderColor: '#056',
  },
  inputArea: {
    width: '100%',
    marginTop: 10,
    height: scale(85),
    borderWidth: 1,
    borderRadius: 10,
    color: '#313030',
    borderColor: '#056',
  },
  textSend: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#fafafa',
    textAlign: 'center',
    paddingVertical: scale(8),
  },
  touchSend: {
    width: '100%',
    backgroundColor: '#056',
    marginTop: scale(26),
    borderRadius: 10,
  },
});

export default ModalContact;
