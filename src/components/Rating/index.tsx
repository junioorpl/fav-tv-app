import React from 'react';
import {View} from 'react-native';
import {IMAGES} from '~/assets';
import {Description, Icon} from './styles';
import {RatingProps} from './types';

const Rating: React.FC<RatingProps> = ({rating, size, type}) => {
  return rating ? (
    <Description size={size}>
      {rating}
      <Icon size={size} source={IMAGES.icons.star[type]} />
    </Description>
  ) : null;
};

export default Rating;
