import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../components/Button';

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.emoji}>
          😁
        </Text>
        <Text style={style.title}>Prontinho</Text>
        <Text style={style.text}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <Button 
          title="Comecar"
          onPress={() => navigation.navigate('PlantSelection')}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  emoji: {
    fontSize: 96
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 30,
    color: colors.heading,
    marginTop: 64,
    marginBottom: 16
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.body_dark,
    marginBottom: 40
  }
})

export default Confirmation;