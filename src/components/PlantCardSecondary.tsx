import React from 'react';
import { 
  View 
} from 'react-native';
import { FlatList, RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

const PlantCardSecondary: React.FC = () => {
  return <View />;
}

export default PlantCardSecondary;