import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
`;

export const City = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WhiteText = styled.Text`
  color: #fff;
  padding-right: 5px;
`;

export const IconFav = styled.Image`
  width: 24px;
  height: 24px;
`;

export const IconBack = styled.Image`
  width: 30px;
  height: 30px;
`;

export const IconSearch = styled.Image`
  width: 18px;
  height: 18px;
`;

export const BtnSearch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 3px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 3px;
`;
