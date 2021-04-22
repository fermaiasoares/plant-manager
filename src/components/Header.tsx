import React from 'react';
import {
  Image, 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import avatar from '../assets/fernando.jpeg';

export const Header: React.FC = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.greeting}>Olá,</Text>
        <Text style={style.userName}>Fernando Maia</Text>
      </View>
      <Image 
        source={avatar}
        style={style.avatar} 
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 32,
    marginTop: getStatusBarHeight()
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 36,
    color: colors.heading
  },
  greeting: {
    fontFamily: fonts.light,
    fontSize: 32,
    lineHeight: 36,
    color: colors.heading
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  }
})