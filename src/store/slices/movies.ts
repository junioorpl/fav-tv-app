import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {
  handleFetchMovieById,
  handleFetchMovies,
  handleSearchCastMovies,
  handleSearchMovies,
  handleSearchPeople,
} from '../actions/movies';

import {MoviesState} from '../types';

const initialState: MoviesState = {
  movies: [],
  searchedMovies: [],
  searchedPeople: [],
  castMovies: [],
  favorites: [],
  selectedMovie: null,
  page: 0,
  loading: false,
  updatedAt: '',
  hasError: false,
  errorMessage: '',
};

export const MoviesSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    resetError: state => {
      state.hasError = false;
      state.errorMessage = '';
    },
    firstPage: state => {
      state.page = 0;
    },
    increasePage: state => {
      state.page++;
    },
    decreasePage: state => {
      state.page--;
    },
    addFavorite: (state, action) => {
      const newArr = [...state.favorites];
      newArr.push({...action.payload, addedAt: moment().toString()});
      newArr.sort((a, b) => a.name.localeCompare(b.name));
      state.favorites = newArr;
    },
    removeFavorite: (state, action) => {
      const idx = state.favorites.findIndex(el => el.id === action.payload.id);
      const newArr = [...state.favorites];
      newArr.splice(idx, 1);
      state.favorites = newArr;
    },
  },
  extraReducers: builder => {
    builder.addCase(handleFetchMovies.fulfilled, (state, action) => {
      if (state.movies[state.page]) {
        state.movies[state.page] = action.payload.movies;
      } else {
        state.movies.push(action.payload.movies);
        state.updatedAt = moment().format('hh:MM A MM/DD/YYYY');
      }

      state.hasError = false;
      state.errorMessage = '';
      state.loading = false;
    });
    builder.addCase(handleFetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(handleFetchMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleSearchMovies.fulfilled, (state, action) => {
      state.searchedMovies = action.payload.searchedMovies;

      state.hasError = false;
      state.errorMessage = '';
      state.loading = false;
    });
    builder.addCase(handleSearchMovies.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(handleSearchMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleSearchPeople.fulfilled, (state, action) => {
      state.searchedPeople = action.payload.searchedPeople;

      state.hasError = false;
      state.errorMessage = '';
      state.loading = false;
    });
    builder.addCase(handleSearchPeople.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(handleSearchPeople.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleFetchMovieById.fulfilled, (state, action) => {
      state.selectedMovie = action.payload.selectedMovie;

      state.hasError = false;
      state.errorMessage = '';
      state.loading = false;
    });
    builder.addCase(handleFetchMovieById.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(handleFetchMovieById.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleSearchCastMovies.fulfilled, (state, action) => {
      state.castMovies = action.payload.castMovies;

      state.hasError = false;
      state.errorMessage = '';
    });
    builder.addCase(handleSearchCastMovies.rejected, (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const {
  resetError,
  increasePage,
  decreasePage,
  firstPage,
  addFavorite,
  removeFavorite,
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
