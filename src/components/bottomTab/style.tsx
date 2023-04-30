import styled from 'styled-components/native';
import {COLORPICKER} from '@utils/colors';

export const CustomSearchContainer = styled.View`
zIndex: 1
position: absolute
bottom: 0px
height: 50px
width: 50px
padding: 8px
alignSelf: center
`;

export const CustomSearchButton = styled.TouchableOpacity`
flex: 1
background-color: ${COLORPICKER.BUTTONCOLOR}
border-radius: 25px
align-items: center
justify-content: center
`;
