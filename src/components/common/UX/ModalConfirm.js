import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "../Card/CardSection";
import { Button } from "../UX/Button";

const ModalConfirm = props => {
  return (
    <Modal
      animationType="fade"
      onRequestClose={() => {}}
      transparent
      visible={props.visible}
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{props.children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={props.onAccept}>Yes</Button>
          <Button onPress={props.onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },

  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export { ModalConfirm };
