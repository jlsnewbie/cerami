import {ComponentType} from 'react';
import styled from 'styled-components/native';
import {COLORPICKER} from '@utils/colors';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

type LabelProps = {
  marginBottom?: number;
};

export const Container: ComponentType<any> = styled.View`
  flex: 1;
  padding : 0px 15px 0px 15px
  background-color: ${COLORPICKER.THEMECOLOR};
`;

export const ImageContainer: ComponentType<any> = styled.View`
  flex: 1;
`;

export const ImageHeaderContainer = styled.View`
  position: absolute;
  padding:0px 10px 0px 10px
  width:100%
  z-index: 1;
`;

export const BottomContainer = styled.View`
  border-top-left-radius:20px
  border-top-right-radius:20px
  padding:20px
  background-color:#fff
  width:100%
`;

export const BottomContainer1 = styled.View.attrs(() => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 10,
    height: -10,
  },
  shadowOpacity: 1,
  shadowRadius: 16.0,
  elevation: 30,
}))`
  position: absolute;
  bottom:0px
  width:100%
  align-items:center
`;

export const BottomContainerHeader = styled.View`
flex-direction:row
justify-content:space-between
`;
export const LabelContainerTitle = styled.View<LabelProps>`
  margin-bottom: ${props => props?.marginBottom}px;
  width: 70%;
`;

export const LabelContainer = styled.View<LabelProps>`
  margin-bottom: ${props => props?.marginBottom}px;
`;

export const ItemAdd = styled.TouchableOpacity`
height:36px
width:36px
border-radius:20px
background-color:${COLORPICKER.BUTTONCOLOR}
align-items: center
justify-content: center
`;

export const ImageNostock = styled.Image.attrs(({source}) => {
  return source;
})`
tintColor: #c0c1c4
height: 130px
width: 130px
`;

export const NostockContainer = styled.View`
  position:absolute
  width: ${width * 0.8};
  top:${height * 0.3}
  align-self:center
  align-items:center
`;

export const Labelwarning = styled.Text`
  margin-top:10px
  font-size:20px
  text-align:center
  color:#c0c1c4
  font-family: GodshineSansExtrabold
`;

type CardCarouseprops = {
  setActiveSlide: (index: number) => void;
  renderItem: any;
  data: Object[];
};

export const CardCarousel = styled(Carousel).attrs<CardCarouseprops>(props => {
  return {
    scrollEnabled: true,
    data: props.data,
    inactiveSlideOpacity: 1,
    inactiveSlideScale: 1,
    onSnapToItem: (index: number) => props.setActiveSlide(index),
    renderItem: props.renderItem,
    sliderWidth: width,
    itemWidth: width * 0.3,
  };
})`
  background-color: green;
`;
