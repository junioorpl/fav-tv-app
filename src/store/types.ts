export interface ErrorPayloadProps {
  errorMessage: string;
}

export interface CastProps {
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: string | null;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    updated: number;
    _links: {
      self: {
        href: string;
      };
    };
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    _links: {
      self: {
        href: string;
      };
    };
  };
  self: boolean;
  voice: boolean;
}

export interface EpisodeProps {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface MovieProps {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
  _embedded?: {
    episodes?: EpisodeProps[];
    cast?: CastProps[];
  };
}

export interface PeopleProps {
  id: number;
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  birthday: string;
  deathday: string | null;
  gender: string;
  image: {
    medium: string;
    original: string;
  };
  updated: number;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface SearchedMovieProps {
  score: number;
  show: MovieProps;
}
export interface SearchedPeopleProps {
  score: number;
  person: PeopleProps;
}

export interface FavoriteShow {
  url: string;
  id: number;
  name: string;
  addedAt: string;
}

export interface MoviesState {
  movies: MovieProps[][];
  searchedMovies: MovieProps[];
  searchedPeople: SearchedPeopleProps[];
  castMovies: MovieProps[];
  favorites: FavoriteShow[];
  selectedMovie: MovieProps | null;
  page: number;
  loading: boolean;
  hasError: boolean;
  updatedAt: string;
  errorMessage: string | unknown;
}
