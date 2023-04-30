import React from 'react';
import {View} from 'react-native';
import {Hotprops} from './type';
import {HotprodContainer} from './style';
import {COLORPICKER} from '@utils/colors';
import Grid from '@components/Grid';
import Label from '@components/text';
import Button from '@components/button';
import ImageWidget from '@components/Imagewidget';

export const Hotproduct: React.FC<Hotprops> = props => {
  const {title, data, navigation} = props;

  const selectItem = () => {
    navigation.navigate('ItemSelected', {params: data});
  };
  return (
    <HotprodContainer justifyContent="center" margintop={15}>
      <Grid flexType="row" width={100}>
        <Grid flexType="column" width={50}>
          <ImageWidget
            imageStyle={{borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
            image={data?.image[0]}
          />
        </Grid>
        <Grid flexType="column" width={50} backgroundColor="#fff">
          <HotprodContainer padding={10} justifyContent="center">
            <View style={{marginTop: 10, marginBottom: 5}}>
              <Label
                numberOfLines={2}
                fontsize={18}
                fontfamily="GodshineSansExtrabold"
                fontColor={COLORPICKER.DARKCOLOR}
                text={title}
              />
            </View>
            <Label
              numberOfLines={3}
              fontsize={12}
              fontColor={COLORPICKER.DARKCOLOR}
              text={data?.description}
            />
            <Button onPress={selectItem} margin="10px 0px 10px 0px">
              <Label
                fontsize={11}
                fontColor={COLORPICKER.LIGHTCOLOR}
                text={`Buy Now - $ ${parseFloat(data?.amount || '0').toFixed(
                  2,
                )}`}
              />
            </Button>
          </HotprodContainer>
        </Grid>
      </Grid>
    </HotprodContainer>
  );
};

export default Hotproduct;
