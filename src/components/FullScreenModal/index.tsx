import React, {ReactNode} from 'react';

import {
  Modal,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

type FullScreenModalProps = {
  children: ReactNode;
  visible?: boolean;
  closeFn: () => void;
  title?: string;
  stickyFooterComponent?: JSX.Element | null;
  showCloseButton?: boolean;
};

const FullScreenModal = ({
  children,
  visible,
  closeFn,
  title,
  stickyFooterComponent = null,
  showCloseButton = true,
}: FullScreenModalProps) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              {title && <Text style={{fontSize: 30}}>{title}</Text>}
            </View>
            {showCloseButton && <Button title={'X'} onPress={closeFn} />}
          </View>
          {visible ? children : null}
        </ScrollView>
        {stickyFooterComponent}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8 * 2.5,
    marginHorizontal: 8 * 2,
  },
  titleContainer: {
    marginBottom: 19,
    flex: 1,
  },
  submitButton: {
    marginRight: 8 * 2,
    marginLeft: 8 * 2,
  },
});

export {FullScreenModal};
