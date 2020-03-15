import React from 'react';
import {TouchableOpacity} from 'react-native';

// icons
import search from '../../../src/assets/icons/search.png';
import star from '../../../src/assets/icons/star.png';
import starBorder from '../../../src/assets/icons/star_border.png';

import {
  Container,
  City,
  WhiteText,
  IconSearch,
  IconFav,
  BtnSearch,
} from './styles';

export default function HeaderBar({
  city,
  favorite,
  handleBack,
  handleAddFavorite,
}) {
  return (
    <Container>
      <BtnSearch onPress={handleBack}>
        <WhiteText>Localidades</WhiteText>
        <IconSearch source={search} />
      </BtnSearch>

      <City>
        <WhiteText>{city.title}</WhiteText>
        <TouchableOpacity onPress={() => handleAddFavorite()}>
          <IconFav source={favorite ? star : starBorder} />
        </TouchableOpacity>
      </City>
    </Container>
  );
}
