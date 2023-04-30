import styled from 'styled-components/native';

type Labelstyleprops = {
  fontsize: number;
  fontColor: string;
  fontweight: string;
  fontfamily: string;
  numberOfLines: number;
};

export const Labelstyle = styled.Text.attrs(props => {
  const {numberOfLines} = props;
  return {
    numberOfLines,
  };
})<Labelstyleprops>`
    color:  ${props => props.fontColor}
    fontSize: ${props => props.fontsize}px;
    font-weight: ${props => props.fontweight}
    font-family: ${props => props.fontfamily}
`;
