import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';

const ModalContact = () => {
  return (
    <View style={styles.screenModal}>
      <Modal animationType="fade" transparent={false}>
        <View style={styles.modal}>
          <Text style={{color: '#222'}}>ModalContact</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screenModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  modal: {
    width: 265,
    height: 329,
    borderRadius: 10,
    backgroundColor: '#dedede',
  },
});

export default ModalContact;
