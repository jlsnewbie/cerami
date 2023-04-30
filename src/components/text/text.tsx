import React from 'react';
import {Labelprops} from './type';
import {Labelstyle} from './style';
import {COLORPICKER} from '@utils/colors';

const Label: React.FC<Labelprops> = props => {
  const {
    text,
    fontColor = COLORPICKER.DARKCOLOR,
    fontweight = 'normal',
    fontsize = 15,
    fontfamily = 'GodshineSans',
    numberOfLines = 1,
  } = props;
  return (
    <Labelstyle
      numberOfLines={numberOfLines}
      fontColor={fontColor}
      fontweight={fontweight}
      fontsize={fontsize}
      fontfamily={fontfamily}>
      {text}
    </Labelstyle>
  );
};

export default Label;
