import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import watering from '../assets/watering.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie{'\n'}
          suas plantas de{'\n'} 
          forma fácil</Text>

        <Image 
          source={watering} 
          style={style.image}
          resizeMode="contain" 
          />

        <Text style={style.subTitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={style.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('UserIdentification')}
          >
          <Feather 
            name="chevron-right" 
            style={style.buttonIcon}
            />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 38,
    fontFamily: fonts.heading,
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 38,
    color: colors.heading
  },
  subTitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
})

export default Welcome;