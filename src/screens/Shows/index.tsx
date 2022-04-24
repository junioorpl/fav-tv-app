import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {IMAGES} from '~/assets';
import {Header} from '~/components';
import Page from '~/layouts/Page';
import {handleFetchMovieById, handleFetchMovies} from '~/store/actions/movies';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import {decreasePage, firstPage, increasePage} from '~/store/slices/movies';
import MovieCard from './components/MovieCard';
import {
  Container,
  ListHeader,
  ListHeaderText,
  MovieList,
  RefreshIcon,
} from './styles';

const ITEM_HEIGHT = 98;

const Shows: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {movies, hasError, errorMessage, updatedAt, page, loading} =
    useAppSelector(state => state.movies);
  const [currentPage, setCurrentPage] = useState(0);
  const listRef = useRef<any>();

  const onItemPress = useCallback(
    (id: number) => {
      dispatch(handleFetchMovieById(id));
      navigation.navigate('ShowDetails');
    },
    [navigation, dispatch],
  );

  const handlePageReset = useCallback(() => {
    dispatch(firstPage());
  }, [dispatch]);

  const handleEndReached = useCallback(() => {
    dispatch(increasePage());
    dispatch(handleFetchMovies());
  }, [dispatch]);

  const handleListPull = useCallback(() => {
    if (currentPage !== 0) {
      dispatch(decreasePage());
    } else {
      dispatch(handleFetchMovies());
    }
  }, [currentPage, dispatch]);

  const renderItem = useCallback(item => {
    return <MovieCard onPress={() => onItemPress(item.item.id)} item={item} />;
  }, []);

  useEffect(() => {
    dispatch(handleFetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && page !== currentPage) {
      console.log('🚀 ~ file: index.tsx ~ line 31 ~ page', page);
      setCurrentPage(page);
      listRef?.current.scrollToIndex({index: 1, animated: false});
    }
  }, [page, currentPage, loading]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Page>
      <Header
        title="Shows"
        iconSide="right"
        icon={<RefreshIcon source={IMAGES.icons.refresh} />}
        onIconPress={handlePageReset}
      />
      <Container>
        <MovieList
          ref={listRef}
          getItemLayout={(_, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={handleListPull}
          data={movies[currentPage]}
          onEndReachedThreshold={0.85}
          onEndReached={handleEndReached}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
          ListHeaderComponent={
            <ListHeader>
              <ListHeaderText>
                {hasError
                  ? `${errorMessage}`
                  : currentPage !== 0
                  ? 'Pull to show previous series'
                  : !!updatedAt && `Last Update ${updatedAt}`}
              </ListHeaderText>
            </ListHeader>
          }
          contentContainerStyle={{justifyContent: 'space-between'}}
        />
      </Container>
    </Page>
  );
};

export default Shows;
