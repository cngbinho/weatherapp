import React from 'react';

import {Container, TodayText, MaxMinTemp} from './styles';

export default function Today({data}) {
  return (
    <Container>
      <TodayText>Hoje</TodayText>
      <TodayText>
        {data.consolidated_weather
          ? ` ${Math.floor(data.consolidated_weather[0].the_temp)}º`
          : ''}
      </TodayText>
      <MaxMinTemp>
        {data.consolidated_weather
          ? ` ${Math.floor(
              data.consolidated_weather[0].min_temp,
            )}º / ${Math.floor(data.consolidated_weather[0].max_temp)}º`
          : ''}
      </MaxMinTemp>
    </Container>
  );
}
