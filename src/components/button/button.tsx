import React from 'react';
import {Buttonprops} from './type';
import {Buttonstyle} from './style';

const Button: React.FC<Buttonprops> = props => {
  const {
    children,
    margin,
    borderRadius,
    backgroundColor,
    onPress,
    alignItems = 'flex-start',
  } = props;

  return (
    <Buttonstyle
      backgroundColor={backgroundColor}
      onPress={onPress}
      margin={margin}
      borderRadius={borderRadius}
      alignItems={alignItems}>
      {children}
    </Buttonstyle>
  );
};

export default Button;
