export interface DayContainerTypes {
  selected: boolean;
  size: 'sm' | 'lg';
}

export interface TimeProps {
  size: 'sm' | 'lg';
}

export interface ShowScheduleProps {
  schedule: {
    time: string;
    days: string[];
  };
  size: 'sm' | 'lg';
}
