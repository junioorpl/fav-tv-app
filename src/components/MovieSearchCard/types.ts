import {SearchedMovieProps} from '~/store/types';

export interface SearchMovieCardProps {
  item: {item: SearchedMovieProps};
  onPress: () => void;
}
