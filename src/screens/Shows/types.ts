import {MovieProps} from '~/store/types';

export interface MovieCardProps {
  item: {item: MovieProps};
  onPress: () => void;
}
export interface FlatListProps {
  renderItem: any;
}
