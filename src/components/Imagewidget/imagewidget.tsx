import React from 'react';
import {ImageWidgetProps} from './type';
import {ImageBackgroundContainer} from './style';
import Label from '../text';
import {COLORPICKER} from '@utils/colors';

const ImageWidget: React.FC<ImageWidgetProps> = props => {
  const {image, imageStyle = {borderRadius: 10}, title} = props;
  return (
    <ImageBackgroundContainer source={image} imageStyle={imageStyle}>
      <Label
        fontsize={13}
        fontColor={COLORPICKER.LIGHTCOLOR}
        fontfamily="GodshineSansExtrabold"
        text={title}
      />
    </ImageBackgroundContainer>
  );
};

export default ImageWidget;
