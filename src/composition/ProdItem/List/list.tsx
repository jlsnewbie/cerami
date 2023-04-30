import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import ProductItem from '../Item';
import {ListContainer} from '../style';
import {ListItemProps, ItemProps} from '../type';
export const ProdItem: React.FC<ListItemProps> = props => {
  const {data, navigation} = props;
  const [productTypeData, setproductTypeData] = useState<Object[]>([]);

  // console.log(productTypeData);
  useEffect(() => {
    setproductTypeData(data);
  }, [data]);

  const keyExtractor = (item: Object, index: number) => String(index);
  const Item = (items: ItemProps) => {
    const {
      image,
      name,
      product_category,
      product_type,
      amount,
      description,
      islike,
    } = items?.items;
    return (
      <ProductItem
        navigation={navigation}
        items={items}
        image={image}
        name={name}
        product_category={product_category}
        product_type={product_type}
        amount={amount}
        description={description}
        islike={islike}
      />
    );
  };

  return (
    <ListContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        numColumns={2}
        data={productTypeData}
        renderItem={item => <Item items={item.item} />}
        keyExtractor={keyExtractor}
      />
    </ListContainer>
  );
};

export default ProdItem;
