import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadFile from '../assets/load.json';

export const LoadingPage: React.FC = () => {
  return (
    <View style={style.container}>
      <LottieView
        source={loadFile}
        autoPlay
        loop
        style={style.animation}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
})

export default LoadingPage;