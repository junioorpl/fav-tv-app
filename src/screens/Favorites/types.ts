import {FavoriteShow} from '~/store/types';

export interface FavoriteCardProps {
  item: {item: FavoriteShow};
  onPress: () => void;
}

export interface FlatListProps {
  renderItem: any;
}
