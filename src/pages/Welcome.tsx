import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import Button from '../components/Button';
import colors from '../../styles/colors';
import watering from '../assets/watering.png';

const pages: React.FC = () => {
  
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'}
        suas plantas {'\n'} 
        de forma fácil</Text>

      <Image source={watering} style={style.image} />

      <Text style={style.subTitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>

      <Button title=">"/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 38,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  }
})

export default pages;