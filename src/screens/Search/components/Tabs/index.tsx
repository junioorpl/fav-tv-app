import React from 'react';
import {TabsProps} from '../../types';

import {Container, TabContainer, TabText} from './styles';

const Tabs: React.FC<TabsProps> = ({tabs, selectedTab, onItemPress}) => {
  return (
    <Container
      data={tabs}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}: {item: any}) => {
        return (
          <TabContainer
            onPress={() => onItemPress(item)}
            selected={selectedTab === item}>
            <TabText selected={selectedTab === item}>{`${item}`}</TabText>
          </TabContainer>
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Tabs;
