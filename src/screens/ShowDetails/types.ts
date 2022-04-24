import {CastProps, EpisodeProps} from '~/store/types';

export interface SeasonListProps {
  seasons: number[];
  selectedSeason: number;
  onItemPress: (el: number) => void;
}

export interface CastListProps {
  cast: CastProps[];
  onItemPress: (el: number) => void;
}

export interface SeasonContainerProps {
  selected: boolean;
}

export interface EpisodeListProps {
  episodes: EpisodeProps[];
  onEpisodePress: (id: number) => void;
}

export interface EpisodeCardProps {
  item: EpisodeProps;
  onEpisodePress: (id: number) => void;
}

export interface EpisodeDetailProps {
  show: boolean;
  episode: EpisodeProps | undefined;
  onClose: () => void;
}

export interface CastDetailsProps {
  show: boolean;
  cast: CastProps | undefined;
  onClose: () => void;
}
