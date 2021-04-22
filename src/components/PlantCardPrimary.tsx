import React from 'react';
import { FlatListProps, StyleSheet, Text, View } from 'react-native';
import { FlatList, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { SvgFromUri as Image} from 'react-native-svg';

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_trip: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: 'day' | 'week' | 'month';
  }
}

export const PlantCardPrimary = ({data, ...rest}: PlantCardProps) => {
  return (
    <RectButton style={style.content} {...rest}>
      <Image uri={data.photo} style={style.image}/>
      <Text style={style.text}>{data.name}</Text>
    </RectButton>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    width: 148,
    height: 154,
    backgroundColor: colors.shape,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    paddingVertical: 20
  },
  text: {
    fontFamily: fonts.complement,
    fontSize: 13,
    lineHeight: 23,
    color: colors.heading,
  },
  image: {
    maxHeight: 90
  }
})