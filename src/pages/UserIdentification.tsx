import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
  Keyboard,
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView, 
  StyleSheet,
  Text, 
  TextInput, 
  TouchableWithoutFeedback, 
  View 
} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import Button from '../components/Button';

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  },[isFocused])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused])

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView 
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={style.content}>
            <View style={style.form}>
              <View style={style.header}>
                <Text style={style.emoji}>
                  { isFilled ? '😄' : '😀'}
                </Text>
                <Text style={style.title}>
                  Como podemos {'\n'} chamar você?
                </Text>
              </View>
              <TextInput 
                style={[
                  style.input,
                  (isFilled || isFocused) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                />
              <View style={style.footer}>
                <Button 
                  title="Confirmar"
                  onPress={() => navigation.navigate('Confirmation')}
                  />
              </View>
            </View>
          </View> 
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 36
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 24
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    minWidth: 260,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 40,
  }

})

export default UserIdentification;
