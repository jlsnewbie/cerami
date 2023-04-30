import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {Container, NostockContainer, Labelwarning, ImageNostock} from './style';
import Header from '@components/header';
import Label from '@components/text';
import {COLORPICKER} from '@utils/colors';
import {useTypedSelector} from '@hooks/useTypedSelector';
import ProdList from '@composition/ProdItem/List';
import {Image} from 'react-native';
function Shop(props: any): JSX.Element {
  const {route, navigation} = props;
  const SelectedCategory = route?.params?.params?.categoryname;

  const {products} = useTypedSelector(({productReducer}) => productReducer);
  const [filteredProducts, setfilteredProducts] = useState<Object[]>([]);

  const filterProducts = () => {
    const filteredProduct = products.filter(
      (item: any) => item?.product_category === SelectedCategory,
    );
    setfilteredProducts(filteredProduct);
  };

  useEffect(() => {
    filterProducts();
  }, []);
  return (
    <Container>
      <Header
        backbutton={true}
        isprofile={true}
        onPress={() => navigation?.goBack()}
      />
      {filteredProducts.length > 0 ? (
        <>
          <Label
            fontsize={21}
            numberOfLines={2}
            fontweight="600"
            fontColor={COLORPICKER.DARKCOLOR}
            fontfamily="GodshineSansExtrabold"
            text={SelectedCategory}
          />
          <ProdList data={filteredProducts} navigation={navigation} />
        </>
      ) : (
        <NostockContainer>
          <ImageNostock source={require('@assets/nostock.png')} />
          <Labelwarning>
            Opps! There's no available item for {SelectedCategory}
          </Labelwarning>
        </NostockContainer>
      )}
    </Container>
  );
}

export default Shop;
