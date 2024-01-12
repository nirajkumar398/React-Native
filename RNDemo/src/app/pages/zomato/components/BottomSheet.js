import React, { useRef, useEffect } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const BottomSheet = ({ modalVisible, setModalVisible, children }) => {
  const translateY = useRef(new Animated.Value(windowHeight)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
      toValue: windowHeight,
      duration: 300,
      useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, translateY]);

  const onOverlayPress = () => {
    setModalVisible(false);
  };

  const onContentPress = (e) => {
    // Prevent the press event from propagating to the parent
    e.stopPropagation();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalBackground}
        onPress={onOverlayPress}
      >
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          {/* Allow closing only when pressing the overlay */}
          <TouchableOpacity activeOpacity={1} onPress={onContentPress}>
            {children}
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomSheet;
