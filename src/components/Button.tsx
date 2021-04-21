import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps, 
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <>
      <TouchableOpacity style={style.button} {...rest}>
        <Text style={style.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 231,
  },
  buttonText: {
    fontFamily: fonts.complement,
    fontSize: 17,
    lineHeight: 23,
    color: colors.white
  }
})

export default Button;