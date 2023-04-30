import React, {useMemo, useState, useCallback} from 'react';
import {
  Container,
  ImageContainer,
  ClickProduct,
  NostockContainer,
  ImageNostock,
  Labelwarning,
} from './style';
import ImageWidget from '@components/Imagewidget';
import Header from '@components/header';
import Label from '@components/text';
import {COLORPICKER} from '@utils/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import Hotproduct from '@composition/Hotproduct';
import ProductGroupButtons from '@composition/ProdTypeButton';
import {useTypedSelector} from '@hooks/useTypedSelector';
import ProdList from '@composition/ProdItem/List';

function Dashboard(props: any): JSX.Element {
  const {navigation} = props;
  const {products, productType, productHot, productCategory} = useTypedSelector(
    ({productReducer}) => productReducer,
  );
  const [selectedType, setselectedType] = useState<string>(
    productType[0] || '',
  );

  const onChangeselected = useCallback(
    (value: string) => {
      setselectedType(value);
    },
    [selectedType, setselectedType],
  );

  const filteredProducts = useMemo(() => {
    const filteredProduct = products.filter(
      (item: any) => item?.product_type === selectedType,
    );
    return filteredProduct;
  }, [setselectedType, selectedType]);

  return (
    <Container>
      <Header isLogo={true} isprofile={true} />

      <Label
        fontsize={20}
        numberOfLines={2}
        fontColor={COLORPICKER.DARKCOLOR}
        fontfamily="GodshineSansExtrabold"
        text={'What products are \nyou looking for?'}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginTop: 20, flexGrow: 0}}>
        {productCategory.map((value: any, index: number) => {
          return (
            <ImageContainer key={index}>
              <ClickProduct
                onPress={() =>
                  navigation?.navigate('Shop', {
                    params: value,
                    navigation: navigation,
                  })
                }>
                <ImageWidget image={value.image} title={value.categoryname} />
              </ClickProduct>
            </ImageContainer>
          );
        })}
      </ScrollView>

      {Object.keys(productHot!).length > 0 && (
        <Hotproduct
          title={productHot?.title}
          data={productHot?.data}
          navigation={navigation}
        />
      )}

      <ProductGroupButtons
        selectedType={selectedType}
        onPress={onChangeselected}
        data={productType}
      />
      {filteredProducts.length > 0 ? (
        <ProdList data={filteredProducts} navigation={navigation} />
      ) : (
        <NostockContainer>
          <ImageNostock source={require('@assets/nostock.png')} />
          <Labelwarning>
            Opps! There's no available item for {selectedType}
          </Labelwarning>
        </NostockContainer>
      )}
    </Container>
  );
}

export default Dashboard;
