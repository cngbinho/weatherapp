import styled from 'styled-components';
import {FlatList} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #000;
  padding: 10px;
  height: 100%;
`;

export const ListCities = styled(FlatList)`
  background-color: #fff;
  margin-top: 5px;
  overflow: hidden;
  background-color: #000;
`;

export const City = styled.View`
  background-color: #fff;
  padding: 5px 10px 1px 10px;
  overflow: hidden;
`;

export const BtnDetail = styled.TouchableOpacity`
  border: 2px solid #eee;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

export const Input = styled.TextInput`
  background-color: white;
  padding: 5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 3px 5px;
`;

export const TextItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 3px 5px;
`;
