import React from 'react';
import {Image} from 'react-native';
import {Headerstyle, ProfileContainer, Button} from './style';
import ImageWidget from '@components/Imagewidget';
import {HeaderProps} from './type';
import Icon from 'react-native-vector-icons/Ionicons';

const Header: React.FC<HeaderProps> = props => {
  const {
    backbutton = false,
    isprofile = false,
    isfavorite = false,
    isLogo = false,
    onPress,
  } = props;
  return (
    <Headerstyle>
      {backbutton && (
        <Button
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}>
          <Icon name="chevron-back-sharp" size={23} />
        </Button>
      )}
      {isLogo && (
        <Image
          source={require('@assets/ceramilogo.png')}
          resizeMode="cover"
          style={{
            width: 150,
            height: 36,
          }}
        />
      )}

      {isfavorite && (
        <Button>
          <Icon name="heart-outline" size={25} />
        </Button>
      )}

      {isprofile && (
        <ProfileContainer>
          <ImageWidget image={require('@assets/user.png')} />
        </ProfileContainer>
      )}
    </Headerstyle>
  );
};

export default Header;
