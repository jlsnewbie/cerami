import styled from 'styled-components/native';
import {GridProps} from './type';

export const GridStyle = styled.View<GridProps>`
  flex-direction: ${props => props.flexType};
  width: ${props => props.width}%;
  background-color: ${props => props?.backgroundColor};
`;
