import React from 'react';
import {TouchableOpacity} from 'react-native';

// icon
import refresh from '../../../src/assets/icons/refresh.png';

import {
  Container,
  Updated,
  UpdatedText,
  WhiteText,
  IconRefresh,
} from './styles';

const getDate = () => {
  let data = new Date()
    .toLocaleString()
    .slice(0, 16)
    .split('/');

  let formatDate = `${data[0]}/${data[1]} ${data[2].slice(5, 10)}`;

  return formatDate;
};

export default function Footer({handleRefresh}) {
  return (
    <Container>
      <WhiteText>weatherApp</WhiteText>
      <Updated>
        <UpdatedText>Atualizado {getDate()}</UpdatedText>
        <TouchableOpacity onPress={handleRefresh}>
          <IconRefresh source={refresh} />
        </TouchableOpacity>
      </Updated>
    </Container>
  );
}
