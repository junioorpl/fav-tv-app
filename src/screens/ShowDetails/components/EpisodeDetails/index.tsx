import React from 'react';
import {theme} from '~/baseStyles';
import {Rating} from '~/components';
import BottomModal from '~/layouts/Modal';
import {Row, Summary, Title, WhiteSpace} from '../../styles';
import {EpisodeDetailProps} from '../../types';

import {
  Container,
  Content,
  EpisodeImage,
  InfoBox,
  SummaryScroll,
} from './styles';

const EpisodeDetails: React.FC<EpisodeDetailProps> = ({
  episode,
  onClose,
  show,
}) => {
  return (
    <BottomModal onClose={onClose} show={show}>
      <Container>
        <Content>
          <EpisodeImage
            source={{
              uri:
                !!episode?.image && !!episode?.image.original
                  ? episode.image.original
                  : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${episode?.name}`,
            }}
          />
          <InfoBox>
            <Row>
              <Title>
                S{episode?.season} E{episode?.number} - {episode?.name}
              </Title>

              {!!episode?.rating.average && (
                <Rating
                  type="secondary"
                  size="lg"
                  rating={episode?.rating.average}
                />
              )}
            </Row>
            <SummaryScroll>
              <Summary>{episode?.summary.replace(/(<([^>]+)>)/gi, '')}</Summary>
            </SummaryScroll>
          </InfoBox>
        </Content>
      </Container>
    </BottomModal>
  );
};

export default EpisodeDetails;
