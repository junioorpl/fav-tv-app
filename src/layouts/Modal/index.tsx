import React from 'react';
import Modal from 'react-native-modal';
import {CustomModalProps} from '../types';

const BottomModal: React.FC<CustomModalProps> = ({children, show, onClose}) => {
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}>
      {children}
    </Modal>
  );
};

export default BottomModal;
