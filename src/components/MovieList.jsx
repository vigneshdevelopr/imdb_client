import React, { useEffect, useState } from 'react';
import '../styles/MovieList.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movieslice';

const MovieList = () => {

  const image_url = 'https://image.tmdb.org/t/p/original'



  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const status = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

 
  return (
    <div className='movieCards'>

        {movies.map((movieResults, idx)=>(

      

<Card key={idx} sx={{ maxWidth: 345, cursor:'pointer' }}>
      <CardMedia   
        sx={{ height: 440 }}
        image={`${image_url}${movieResults.poster_path}`}

        title={movieResults.title}
      />
      <CardContent>
        <Typography sx={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          {movieResults.title   }
        </Typography>
        <Typography sx={{maxHeight:'4rem', display:'block', overflow:'hidden'}} variant="body2" color="text.secondary">
          {movieResults.overview}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

))}
    </div>
  );
};

export default MovieList;
