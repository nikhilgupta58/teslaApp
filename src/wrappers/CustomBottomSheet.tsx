import React, {useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import Flex from './Flex';

export default function CustomBottomSheet({
  children,
  isOpen,
  setOpen,
  sheetStyle = {},
  ...props
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  sheetStyle?: {};
}) {
  const refRBSheet = useRef();
  React.useEffect(() => {
    if (isOpen) {
      //@ts-ignore
      refRBSheet?.current?.open();
    }
  }, [isOpen]);
  return (
    //@ts-ignore
    <RBSheet
      //@ts-ignore
      ref={refRBSheet}
      onClose={() => {
        setOpen(false);
      }}
      // keyboardAvoidingViewEnabled={true}
      openDuration={250}
      animationType={'fade'}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden',
          height: 'auto',
          ...props,
          ...sheetStyle,
        },
      }}>
      <ScrollView
        style={{
          backgroundColor: 'transparent',
          width: '100%',
        }}>
        <Flex
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            flex: 1,
          }}>
          {children}
        </Flex>
      </ScrollView>
    </RBSheet>
  );
}
