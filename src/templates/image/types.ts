import { ImageProps as RNImageProps } from 'react-native';

export interface ImageProps extends RNImageProps {
  source: RNImageProps['source'];
}