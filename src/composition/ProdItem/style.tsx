import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const ProdItemContainer = styled.View.attrs(() => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: 1,
}))`
marginBottom: 10px
width: ${width * 0.44}
height: 170px
border-radius: 20px
background-color: #fff
  `;

export const ItemDetailsContainer = styled.View`
height: 45%
padding: 10px
justify-content: flex-end
`;

export const ItemText = styled.Text.attrs(() => {
  return {
    numberOfLines: 1,
  };
})`
font-size: 13px
text-align: center
margin-bottom: 8px
font-family: GodshineSansExtrabold
`;

export const ListContainer = styled.View`
flex: 1
margin: 10px 0px 10px 0px
`;
