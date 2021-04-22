import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export interface CardItems {
  key: string;
  title: string;
}

interface CarouselButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export const CarouselButton = ({ title, active = false, ...rest }: CarouselButtonProps) => {
  return (
    <RectButton
      style={[
        style.button, 
        active && style.buttonActive
      ]}
      {...rest}
    >
      <Text
        style={[
          style.text,
          active && style.textActive
        ]}
      >
        {title}
      </Text>
    </RectButton>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 32,
    marginBottom: 40,
    height: 40,
    width: '100%'
  },
  button: {
    width: 76,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
    marginRight: 4
  },
  buttonActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontSize: 13,
    lineHeight: 23,
    fontFamily: fonts.text,
    color: colors.heading
  },
  textActive: {
    fontFamily: fonts.complement,
    color: colors.green_dark
  }
})