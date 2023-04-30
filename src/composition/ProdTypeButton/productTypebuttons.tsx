import React, {useEffect, useState} from 'react';
import {ProductTypeButtonProps} from './type';
import {COLORPICKER} from '@utils/colors';
import Label from '@components/text';
import Button from '@components/button';
import {ScrollView} from 'react-native';

export const ProductGroupButtons: React.FC<ProductTypeButtonProps> = props => {
  const {data, onPress, selectedType = ''} = props;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{marginTop: 15, flexGrow: 0}}>
      {data.map((value, index) => {
        return (
          <Button
            backgroundColor={
              selectedType === value
                ? COLORPICKER.BUTTONCOLOR
                : COLORPICKER.LIGHTCOLOR
            }
            onPress={() => {
              if (onPress) {
                onPress(value);
              }
            }}
            key={index}
            borderRadius={15}
            margin="0px 8px 0px 0px">
            <Label
              fontsize={12}
              fontColor={
                selectedType === value
                  ? COLORPICKER.LIGHTCOLOR
                  : COLORPICKER.DARKCOLOR
              }
              text={value}
            />
          </Button>
        );
      })}
    </ScrollView>
  );
};

export default ProductGroupButtons;
