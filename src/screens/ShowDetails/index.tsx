import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Header, Rating, ShowSchedule} from '~/components';
import Page from '~/layouts/Page';

import {
  Background,
  BackIcon,
  Container,
  Content,
  LoadingContainer,
  Row,
  Title,
  Genres,
  GenreText,
  Summary,
  WhiteSpace,
} from './styles';
import {IMAGES} from '~/assets';
import {useAppSelector} from '~/store/hooks';
import {theme} from '~/baseStyles';
import SeasonList from './components/SeasonList';
import {CastProps, EpisodeProps} from '~/store/types';
import EpisodeList from './components/EpisodeList';
import EpisodeDetails from './components/EpisodeDetails';
import CastList from './components/CastList';
import CastDetails from './components/CastDetails';
import {useDispatch} from 'react-redux';
import {handleSearchCastMovies} from '~/store/actions/movies';
import {addFavorite, removeFavorite} from '~/store/slices/movies';

const ShowDetails: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedMovie, favorites, loading} = useAppSelector(
    state => state.movies,
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false);
  const [showCastDetails, setShowCastDetails] = useState(false);
  const [seasons, setSeasons] = useState<number[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<EpisodeProps>();
  const [selectedCast, setSelectedCast] = useState<CastProps>();
  const navigation = useNavigation();

  const handlePageData = useCallback(() => {
    try {
      const season = selectedMovie?._embedded?.episodes?.map(el => el.season);
      const qtSeasons = [...new Set(season)];
      const filteredEpisodes = selectedMovie?._embedded?.episodes?.filter(
        el => el.season === qtSeasons[0],
      );

      if (!!filteredEpisodes) {
        setEpisodes([...filteredEpisodes] || []);
      }
      setSeasons(qtSeasons);
    } catch (err) {
      console.log('🚀 ~ file: index.tsx ~ line 43 ~ handlePageData ~ err', err);
    }
  }, [selectedMovie]);

  const handleSeasonPress = useCallback(
    (seasonNumber: number) => {
      try {
        setSelectedSeason(seasonNumber);
        const filteredEpisodes = selectedMovie?._embedded?.episodes?.filter(
          el => el.season === seasonNumber,
        );
        setEpisodes(filteredEpisodes || []);
      } catch (err) {
        console.log('🚀 ~ file: index.tsx ~ line 54 ~ err', err);
      }
    },
    [selectedMovie],
  );

  const handleEpisodePress = useCallback(
    (id: number) => {
      try {
        const foundEpisode = selectedMovie?._embedded?.episodes?.find(
          el => el.id === id,
        );

        setSelectedEpisode(foundEpisode);
        setShowEpisodeDetails(true);
      } catch (err) {
        console.log('🚀 ~ file: index.tsx ~ line 76 ~ err', err);
      }
    },
    [selectedMovie],
  );

  const handleFavorite = useCallback(() => {
    try {
      if (!isFavorite) {
        dispatch(
          addFavorite({
            url:
              selectedMovie?.image && !!selectedMovie?.image.original
                ? selectedMovie?.image.original
                : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${selectedMovie?.name}`,
            id: selectedMovie?.id,
            name: selectedMovie?.name,
          }),
        );
      } else {
        dispatch(removeFavorite({id: selectedMovie?.id}));
      }
    } catch (err) {
      console.log('🚀 ~ file: index.tsx ~ line 76 ~ err', err);
    }
  }, [isFavorite, selectedMovie]);

  const handleCastPress = useCallback(
    (id: number) => {
      try {
        const foundCast = selectedMovie?._embedded?.cast?.find(
          el => el.person.id === id,
        );

        dispatch(handleSearchCastMovies(id));
        setSelectedCast(foundCast);
        setShowCastDetails(true);
      } catch (err) {
        console.log('🚀 ~ file: index.tsx ~ line 76 ~ err', err);
      }
    },
    [selectedMovie, dispatch],
  );

  const handleCloseDetails = useCallback(() => {
    setShowEpisodeDetails(false);
    setShowCastDetails(false);
  }, []);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    handlePageData();
  }, [handlePageData]);

  useEffect(() => {
    setIsFavorite(
      favorites.findIndex(el => el.id === selectedMovie?.id) !== -1,
    );
  }, [favorites, selectedMovie]);

  return (
    <Page>
      <Header
        title="Details"
        iconSide="left"
        icon={
          <BackIcon
            style={{transform: [{rotate: '90deg'}]}}
            source={IMAGES.icons.arrowDown}
          />
        }
        onIconPress={handleBack}
      />
      {!selectedMovie || loading ? (
        <LoadingContainer>
          <ActivityIndicator color="white" />
        </LoadingContainer>
      ) : (
        <Container showsVerticalScrollIndicator={false}>
          <Background
            source={{
              uri:
                !!selectedMovie.image && !!selectedMovie.image.original
                  ? selectedMovie.image.original
                  : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${selectedMovie.name}`,
            }}
          />
          <Content>
            <Row>
              <Title>{selectedMovie.name}</Title>

              {!!selectedMovie.rating.average && (
                <Rating
                  type="secondary"
                  size="lg"
                  rating={selectedMovie.rating.average}
                />
              )}
            </Row>
            <Row>
              <Genres>
                {selectedMovie.genres.length > 0 &&
                  selectedMovie.genres.map((genre, idx) => (
                    <GenreText key={idx}>{genre}</GenreText>
                  ))}
              </Genres>
            </Row>

            <ShowSchedule size="lg" schedule={selectedMovie.schedule} />
            <Row>
              <Button
                label={
                  isFavorite ? 'Remove from favorites' : 'Add to favorites'
                }
                onPress={handleFavorite}
              />
            </Row>
            <Row>
              <Summary>
                {selectedMovie.summary.replace(/(<([^>]+)>)/gi, '')}
              </Summary>
            </Row>
            {seasons.length > 0 && (
              <>
                <SeasonList
                  seasons={seasons}
                  selectedSeason={selectedSeason}
                  onItemPress={handleSeasonPress}
                />
                <EpisodeList
                  episodes={episodes}
                  onEpisodePress={handleEpisodePress}
                />
              </>
            )}
            {selectedMovie?._embedded?.cast &&
              selectedMovie?._embedded?.cast?.length > 0 && (
                <CastList
                  cast={selectedMovie?._embedded?.cast}
                  onItemPress={handleCastPress}
                />
              )}
          </Content>

          <WhiteSpace />
        </Container>
      )}
      <EpisodeDetails
        episode={selectedEpisode}
        onClose={handleCloseDetails}
        show={showEpisodeDetails}
      />
      <CastDetails
        cast={selectedCast}
        onClose={handleCloseDetails}
        show={showCastDetails}
      />
    </Page>
  );
};

export default ShowDetails;
