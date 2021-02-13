import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Users = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color:'black',
    background :'red',
  },
}));

export default function CenteredGrid() {
  const classes = Users();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>hai</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>hello</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>world</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>design</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>babe</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>super</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>colour</Paper>
        </Grid>
      </Grid>
    </div>
  );
}