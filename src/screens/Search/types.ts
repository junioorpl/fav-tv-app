import {PeopleProps, SearchedPeopleProps} from '~/store/types';

export interface PersonDetailProps {
  onClose: () => void;
  show: boolean;
  item: PeopleProps | undefined;
}
export interface TabsProps {
  tabs: string[];
  selectedTab: string;
  onItemPress: (tab: string) => void;
}

export interface SearchPersonCardProps {
  item: {item: SearchedPeopleProps};
  onPress: () => void;
}

export interface FlatListProps {
  renderItem: any;
}

export interface TabProps {
  selected: boolean;
}
