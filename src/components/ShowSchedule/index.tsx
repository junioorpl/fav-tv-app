import React from 'react';
import {WEEK_LIST} from './data';

import {Container, Day, DayContainer, DaysContainer, Time} from './styles';
import {ShowScheduleProps} from './types';

const ShowSchedule: React.FC<ShowScheduleProps> = ({schedule, size}) => {
  return (
    <Container>
      <DaysContainer>
        {WEEK_LIST.map(({label, value}) => {
          const selected = schedule.days.findIndex(el => el === value) !== -1;
          return (
            <DayContainer key={value} size={size} selected={selected}>
              <Day size={size} selected={selected}>
                {label}
              </Day>
            </DayContainer>
          );
        })}
      </DaysContainer>
      <Time size={size}>{schedule.time}</Time>
    </Container>
  );
};

export default ShowSchedule;
