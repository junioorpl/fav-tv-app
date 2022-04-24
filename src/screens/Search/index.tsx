import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Keyboard} from 'react-native';
import {IMAGES} from '~/assets';
import {Header, IconInput} from '~/components';
import Page from '~/layouts/Page';
import {
  handleFetchMovieById,
  handleSearchCastMovies,
  handleSearchMovies,
  handleSearchPeople,
} from '~/store/actions/movies';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import {PeopleProps} from '~/store/types';
import MovieSearchCard from '../../components/MovieSearchCard';
import PersonDetails from './components/PersonDetails';
import PersonSearchCard from './components/PersonSearchCard';
import Tabs from './components/Tabs';
import {TABS} from './labels';

import {Container, SearchIcon, SearchList} from './styles';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {searchedMovies, searchedPeople} = useAppSelector(
    state => state.movies,
  );
  const [selectedPerson, setSelectedPerson] = useState<PeopleProps>();
  const [showDetails, setShowDetails] = useState(false);
  const [currentTab, setCurrentTab] = useState('Shows');
  const [searchText, setSearchText] = useState('');

  const onItemPress = useCallback(
    (id: number) => {
      console.log('🚀 ~ file: index.tsx ~ line 36 ~ id', id);
      if (currentTab === 'Shows') {
        dispatch(handleFetchMovieById(id));
        navigation.navigate('ShowDetails');
      } else {
        const foundPerson = searchedPeople.find(el => el.person.id === id);
        console.log(
          '🚀 ~ file: index.tsx ~ line 41 ~ foundPerson',
          foundPerson,
        );
        setSelectedPerson(foundPerson?.person);
        dispatch(handleSearchCastMovies(id));
        setShowDetails(true);
      }
    },
    [navigation, dispatch, currentTab],
  );

  const handleSearch = useCallback(() => {
    Keyboard.dismiss();
    if (currentTab === 'Shows') {
      dispatch(handleSearchMovies(searchText));
    } else {
      dispatch(handleSearchPeople(searchText));
    }
  }, [dispatch, searchText, currentTab]);

  const handleCloseDetails = useCallback(() => {
    setShowDetails(false);
  }, []);

  const handleTabPress = useCallback(tab => {
    setCurrentTab(tab);
  }, []);

  const renderItem = useCallback(
    item => {
      return currentTab === 'Shows' ? (
        <MovieSearchCard
          onPress={() => onItemPress(item.item.show.id)}
          item={item}
        />
      ) : (
        <PersonSearchCard
          onPress={() => onItemPress(item.item.person.id)}
          item={item}
        />
      );
    },
    [currentTab],
  );

  return (
    <Page>
      <Header title="Search" />
      <IconInput
        placeholder="Your favorite show here"
        icon={<SearchIcon source={IMAGES.icons.search} />}
        onIconPress={handleSearch}
        onTextChange={setSearchText}
      />
      <Tabs tabs={TABS} selectedTab={currentTab} onItemPress={handleTabPress} />
      <Container>
        <SearchList
          showsVerticalScrollIndicator={false}
          data={currentTab === 'Shows' ? searchedMovies : searchedPeople}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
        />
      </Container>
      <PersonDetails
        item={selectedPerson}
        onClose={handleCloseDetails}
        show={showDetails}
      />
    </Page>
  );
};

export default Search;
