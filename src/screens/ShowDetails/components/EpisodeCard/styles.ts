import styled from 'styled-components/native';

export const Container = styled.Pressable`
  margin: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.primary};

  flex-direction: row;
`;

export const Content = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 12px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EpisodeBanner = styled.Image`
  height: 64px;
  width: 116px;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
`;
