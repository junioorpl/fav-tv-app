import {createAsyncThunk} from '@reduxjs/toolkit';
import createAPI from '~/service';

export const handleFetchMovies = createAsyncThunk(
  'movies/fetch',
  async (_, thunkAPI): Promise<any> => {
    try {
      const state: any = thunkAPI.getState();

      if (!!state.movies.movies[state.movies.page]) {
        return thunkAPI.fulfillWithValue({
          movies: state.movies.movies[state.movies.page],
        });
      }

      const {data} = await createAPI().show.fetchShows(state.movies.page);

      return thunkAPI.fulfillWithValue({movies: data});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue('Error retrieving show list');
    }
  },
);

export const handleFetchMovieById = createAsyncThunk(
  'movies/searchById',
  async (id: number, thunkAPI): Promise<any> => {
    try {
      const {data} = await createAPI().show.fetchShowById(id);

      return thunkAPI.fulfillWithValue({selectedMovie: data});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue('Error retrieving show search');
    }
  },
);

export const handleSearchMovies = createAsyncThunk(
  'movies/search',
  async (searchTerm: string, thunkAPI): Promise<any> => {
    try {
      const {data} = await createAPI().show.searchShows(searchTerm);

      return thunkAPI.fulfillWithValue({searchedMovies: data});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue('Error retrieving selected show');
    }
  },
);

export const handleSearchPeople = createAsyncThunk(
  'movies/peopleSearch',
  async (searchTerm: string, thunkAPI): Promise<any> => {
    try {
      const {data} = await createAPI().show.searchPeople(searchTerm);

      return thunkAPI.fulfillWithValue({searchedPeople: data});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue('Error retrieving selected show');
    }
  },
);

export const handleSearchCastMovies = createAsyncThunk(
  'movies/castSearch',
  async (id: number, thunkAPI): Promise<any> => {
    try {
      const {data} = await createAPI().show.searchCastShows(id);
      const formattedArr = data.map((el: any) => el._embedded.show);
      return thunkAPI.fulfillWithValue({castMovies: formattedArr});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue('Error retrieving cast member show');
    }
  },
);
