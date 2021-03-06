import React from 'react';
import { useHistory } from 'react-router';
import { Typography, Tooltip, IconButton, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSelector } from 'react-redux';

import { Container, Content } from './style';
import { RootState } from 'store';
import { Character } from 'model/character';
import { MediaCard } from 'components/MediaCard';
import { Empty } from 'components/Empty';

export const Favorites = () => {
  const history = useHistory();
  const favorite = useSelector((state: RootState) => state.favorite);

  return (
    <Container>
      <Content>
        <Typography variant="h3" style={{ marginBottom: '5%' }}>
          <Tooltip title="Voltar" arrow>
            <IconButton
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          {'  '}

          {favorite.length > 1 ? 'Favorites' : 'Favorite'}
        </Typography>
        {favorite.length == 0 && (
          <Empty
            title="No favorites"
            textBody=" Go back to the previous page and favorite a character"
          />
        )}
        <Grid container spacing={6}>
          {favorite.map((character: Character) => (
            <Grid key={character.id} item xs={4}>
              <MediaCard character={character} />
            </Grid>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};
