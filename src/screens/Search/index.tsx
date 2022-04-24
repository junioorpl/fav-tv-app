import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Keyboard} from 'react-native';
import {IMAGES} from '~/assets';
import {Header, IconInput} from '~/components';
import Page from '~/layouts/Page';
import {handleFetchMovieById, handleSearchMovies} from '~/store/actions/movies';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import MovieSearchCard from '../../components/MovieSearchCard';
import {Container, SearchIcon, SearchList} from './styles';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {searchedMovies} = useAppSelector(state => state.movies);
  const [searchText, setSearchText] = useState('');

  const onItemPress = useCallback(
    (id: number) => {
      dispatch(handleFetchMovieById(id));
      navigation.navigate('ShowDetails');
    },
    [navigation, dispatch],
  );

  const handleSearch = useCallback(() => {
    Keyboard.dismiss();
    dispatch(handleSearchMovies(searchText));
  }, [dispatch, searchText]);

  const renderItem = useCallback(item => {
    return (
      <MovieSearchCard
        onPress={() => onItemPress(item.item.show.id)}
        item={item}
      />
    );
  }, []);

  return (
    <Page>
      <Header title="Search" />
      <IconInput
        placeholder="Your favorite show here"
        icon={<SearchIcon source={IMAGES.icons.search} />}
        onIconPress={handleSearch}
        onTextChange={setSearchText}
      />
      <Container>
        <SearchList
          showsVerticalScrollIndicator={false}
          data={searchedMovies}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
        />
      </Container>
    </Page>
  );
};

export default Search;
