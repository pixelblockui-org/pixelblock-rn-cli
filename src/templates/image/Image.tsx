import React from 'react';
import { Image as PXImage } from 'react-native';
import { styles } from './styles';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({ source, style }) => {
  return <PXImage source={source} style={[styles.image, style]} />;
};

export default Image;