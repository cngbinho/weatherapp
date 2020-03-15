import React, {useState, useEffect} from 'react';

import {connect, useDispatch, useSelector} from 'react-redux';

import HeaderBar from '../../../src/components/HeaderBar';
import Today from '../../../src/components/Today';
import ListDays from '../../../src/components/ListDays';
import Footer from '../../../src/components/Footer';

import {Container, WhiteText} from './styles';

import * as weatherActions from '../../store/module/weather/actions';
import * as favoriteActions from '../../store/module/favorite/actions';

function WeatherDetails({navigation}) {
  const dispatch = useDispatch();

  const [city, setCity] = useState([]);

  const data = useSelector(state => state.weather.city);
  const favorite = useSelector(state => state.favorite.favorite);

  useEffect(() => {
    const newCity = navigation.getParam('woeid');
    setCity(newCity);
  }, [city, navigation]);

  useEffect(() => {
    if (city) {
      dispatch(weatherActions.cityDetailsRequest(city));
    }
  }, [city, dispatch]);

  function handleAddFavorite() {
    favorite !== city
      ? dispatch(favoriteActions.favoriteCityRequest(city))
      : dispatch(favoriteActions.removeFavorite());
  }

  const getDetails = () => {
    if (city) {
      dispatch(weatherActions.cityDetailsRequest(city));
    }
  };

  function handleRefresh() {
    getDetails();
  }

  const handleBack = () => {
    navigation.navigate('Main', {handleBack: true});
  };

  return (
    <Container>
      {!data.consolidated_weather ? (
        <WhiteText>Espere</WhiteText>
      ) : (
        <>
          <HeaderBar
            city={data}
            favorite={favorite === city}
            handleBack={handleBack}
            handleAddFavorite={handleAddFavorite}
          />
          <Today data={data} />
          <ListDays data={data} />
          <Footer handleRefresh={handleRefresh} />
        </>
      )}
    </Container>
  );
}

export default connect()(WeatherDetails);
