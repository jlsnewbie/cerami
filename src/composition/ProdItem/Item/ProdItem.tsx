import React from 'react';
import {ProdItemProps} from '../type';
import Label from '@components/text';
import Button from '@components/button';
import ImageWidget from '@components/Imagewidget';
import {ProdItemContainer, ItemDetailsContainer, ItemText} from '../style';

export const ProdItem: React.FC<ProdItemProps> = props => {
  const {
    image,
    name,
    product_category,
    product_type,
    amount,
    description,
    islike,
    navigation,
    items,
  } = props;

  const selectItem = () => {
    navigation.navigate('ItemSelected', {params: props});
  };
  return (
    <ProdItemContainer
      onStartShouldSetResponder={() => {
        return true;
      }}
      onResponderRelease={selectItem}>
      <ImageWidget
        imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
        image={image[0]}
      />
      <ItemDetailsContainer>
        <ItemText>{name}</ItemText>
        <Button
          onPress={selectItem}
          backgroundColor="#f5f6fa"
          borderRadius={10}
          alignItems="center">
          <Label
            numberOfLines={1}
            text={`$ ${parseFloat(amount || '0').toFixed(2)}`}
            fontsize={13}
            fontfamily="GodshineSansExtrabold"
          />
        </Button>
      </ItemDetailsContainer>
    </ProdItemContainer>
  );
};

export default ProdItem;
