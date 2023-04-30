import {ComponentType} from 'react';
import styled from 'styled-components/native';

export type ImagebackgroundType = {
  imageStyle: Object;
  source: any;
};

export const ImageBackgroundContainer = styled.ImageBackground.attrs<ImagebackgroundType>(
  props => {
    const {source, imageStyle} = props;
    return {
      source,
      imageStyle,
      resizeMode: 'cover',
    };
  },
)`
  flex:1
  justify-content: flex-end;
  padding: 5px;
`;
