import React, {useState, useEffect} from 'react';

import {connect, useDispatch, useSelector} from 'react-redux';

import * as weatherActions from '../../store/module/weather/actions';

import {
  Container,
  Input,
  City,
  ListCities,
  BtnDetail,
  Title,
  TextItem,
} from './styles';

function Main({navigation}) {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const cities = useSelector(state => state.weather.cities);
  const favorite = useSelector(state => state.favorite.favorite);

  useEffect(() => {
    const handleBack = navigation.getParam('handleBack');
    const woeid = favorite;

    if (favorite && !handleBack) {
      navigation.navigate('WeatherDetails', {woeid});
    }
  }, [favorite, navigation]);

  useEffect(() => {
    if (input.length > 0) {
      dispatch(weatherActions.listCitiesRequest(input));
    } else {
      setData([]);
    }
  }, [dispatch, input]);

  useEffect(() => {
    setData(cities);
  }, [cities]);

  const handleClick = city => {
    dispatch(weatherActions.clearListCities());
    navigation.navigate('WeatherDetails', {woeid: city.woeid});
  };

  return (
    <Container>
      <Title>Escolha uma cidade:</Title>
      <Input
        placeholder="Ex: São Paulo"
        value={input}
        onChangeText={setInput}
      />
      {data.length >= 0 ? (
        <ListCities
          data={data}
          keyExtractor={item => String(item.woeid)}
          renderItem={({item}) => (
            <City>
              <BtnDetail onPress={() => handleClick(item)}>
                <TextItem>{item.title}</TextItem>
              </BtnDetail>
            </City>
          )}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default connect()(Main);
