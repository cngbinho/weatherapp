import React from 'react';

import {Container, Daily, Days, Temp, WhiteText} from './styles';

const showDayMonth = date => {
  let splitDate = date.split('-');
  let dayMonth = `${splitDate[2]}/${splitDate[1]}`;

  return dayMonth;
};

export default function ListDays({data}) {
  return (
    <Container>
      {data.consolidated_weather.map(weather => (
        <Daily key={weather.id}>
          <Days>
            <WhiteText>{showDayMonth(weather.applicable_date)}</WhiteText>
          </Days>
          <Temp>
            <WhiteText>{`${Math.floor(weather.the_temp)}º`}</WhiteText>
          </Temp>
        </Daily>
      ))}
    </Container>
  );
}
