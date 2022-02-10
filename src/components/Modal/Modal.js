import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
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
    backgroundColor: '#ccc',
    marginTop: scale(36),
  },
});

export default ModalContact;
