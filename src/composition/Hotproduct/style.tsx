import styled from 'styled-components/native';

type Containerstyleprops = {
  justifyContent?: string | undefined;
  margintop?: number;
  padding?: number;
};

export const HotprodContainer = styled.View.attrs(() => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: 1,
}))<Containerstyleprops>`
      padding:${props => props?.padding || 0}px
      margin-top:${props => props?.margintop || 0}px
      justify-content : ${props => props?.justifyContent}
      align-items:flex-start
  `;
