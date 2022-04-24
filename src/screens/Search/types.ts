import {MovieProps} from '~/store/types';

export interface MovieCardProps {
  movie: {item: MovieProps};
}
export interface FlatListProps {
  renderItem: any;
}
