import React from 'react';
import {GridProps} from './type';
import {GridStyle} from './style';

export const Grid: React.FC<GridProps> = props => {
  const {flexType, width, backgroundColor, children} = props;
  return (
    <GridStyle
      flexType={flexType}
      width={width}
      backgroundColor={backgroundColor}>
      {children}
    </GridStyle>
  );
};

export default Grid;
