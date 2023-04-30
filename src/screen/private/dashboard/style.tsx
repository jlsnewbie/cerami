import {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {COLORPICKER} from '@utils/colors';

const {width, height} = Dimensions.get('window');
export const Container: ComponentType<any> = styled.View`
  flex: 1;
  padding : 0px 15px 0px 15px
  background-color: ${COLORPICKER.THEMECOLOR};
`;

export const ImageContainer: ComponentType<any> = styled.View`
  margin-right: 10px
  height: 80px
  width: 110px
`;

export const ClickProduct = styled.TouchableOpacity`
  flex: 1;
`;

export const NostockContainer = styled.View`
  width: ${width * 0.8};
  margin-top:25px
  align-self:center
  align-items:center
`;

export const ImageNostock = styled.Image.attrs(({source}) => {
  return source;
})`
tintColor: #c0c1c4
height: 80px
width: 80px
`;

export const Labelwarning = styled.Text`
  margin-top:10px
  font-size:17px
  text-align:center
  color:#4b4b4b
  font-family: GodshineSansExtrabold
`;
