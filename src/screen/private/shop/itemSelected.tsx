import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {
  ImageContainer,
  ImageHeaderContainer,
  BottomContainer,
  BottomContainer1,
  LabelContainer,
  LabelContainerTitle,
  BottomContainerHeader,
  ItemAdd,
  CardCarousel,
} from './style';
import {Dimensions, View} from 'react-native';
import Header from '@components/header';
import Label from '@components/text';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageWidget from '@components/Imagewidget';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');
function Shop(props: any): JSX.Element {
  const {route, navigation} = props;
  const {
    amount,
    description,
    image,
    isLike,
    name,
    product_category,
    product_type,
  } = route?.params?.params;
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderCard = (item: any) => {
    return <ImageWidget image={item.item} imageStyle={{borderRadius: 0}} />;
  };

  const PaginationDisplay = () => {
    return (
      <Pagination
        dotsLength={image.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#fff',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <ImageContainer>
      <ImageHeaderContainer>
        <Header
          backbutton={true}
          isfavorite={true}
          onPress={() => navigation?.goBack()}
        />
      </ImageHeaderContainer>
      {/* <ImageWidget image={image[0]} imageStyle={{borderRadius: 0}} /> */}
      <Carousel
        data={image}
        renderItem={item => renderCard(item)}
        onSnapToItem={index => setActiveSlide(index)}
        sliderWidth={width}
        itemWidth={width}
      />
      <BottomContainer1>
        <PaginationDisplay />

        <BottomContainer>
          <BottomContainerHeader>
            <LabelContainerTitle marginBottom={10}>
              <Label
                fontfamily="GodshineSansExtrabold"
                text={name}
                fontsize={26}
                numberOfLines={1}
              />
            </LabelContainerTitle>
            <ItemAdd>
              <Icon name="add-outline" size={25} color={'#fff'} />
            </ItemAdd>
          </BottomContainerHeader>

          <LabelContainer marginBottom={10}>
            <Label
              fontweight="bold"
              text={`$ ${parseFloat(amount || '0').toFixed(2)}`}
              numberOfLines={2}
            />
          </LabelContainer>
          <Label text={description} numberOfLines={2} />
        </BottomContainer>
      </BottomContainer1>
    </ImageContainer>
  );
}

export default Shop;
