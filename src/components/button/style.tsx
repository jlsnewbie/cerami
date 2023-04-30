import styled from 'styled-components/native';
import {COLORPICKER} from '@utils/colors';

type ButtonstyleProps = {
  margin?: string;
  borderRadius?: number;
  backgroundColor?: string;
  alignItems?: string;
};

export const Buttonstyle = styled.TouchableOpacity<ButtonstyleProps>`
    background-color:  ${props =>
      props.backgroundColor || COLORPICKER.BUTTONCOLOR}
    padding: 8px
    align-items:${props => props.alignItems}
    border-radius:${props => props.borderRadius || '5'}px
    margin:${props => props.margin || '0px'}
`;
