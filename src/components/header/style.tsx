import {ComponentType} from 'react';
import styled from 'styled-components/native';

export const Headerstyle: ComponentType<any> = styled.View`
    padding:10px 0px 10px 0px
    flex-direction: row
    justify-content:space-between
    align-items:center
    margin-top:20px
    margin-bottom:20px
`;

export const ProfileContainer = styled.View`
    height: 60px
    width: 60px
    backgroundColor: #f5f6fa
    border-radius: 30px
`;

export const Button = styled.TouchableOpacity`
    width: 42px
    height: 42px
    border-radius: 21px
    background-color: #f5f6fa
    align-items: center
    justify-content: center
`;
