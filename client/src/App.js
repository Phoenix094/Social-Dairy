import React, { useEffect } from 'react'

import useStyles from './style';

import { Container, AppBar, Typography, Grow, Grid, CssBaseline } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/post'

const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(classes);

  useEffect(() => {

    dispatch(getPosts());

  }, [dispatch])

  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline/>
        <AppBar className={classes.appBar}  position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2'>Memories </Typography>
          <img className={classes.image} src={memories} alt="memories" height='60' />

        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify='center' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>

          </Container>
        </Grow>

      </Container>
    </>
  )
}

export default App
