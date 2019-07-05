import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import "./CardMovie.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 325
  },
  bottomInfo: {
    justifyContent: "center"
  }
});

const CardMovie = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: blue
    }
  });

  return (
    <Card className={classes.card}>
      <ThemeProvider theme={theme}>
        <Link to="/movie">
          <CardActionArea>
            <CardContent>
              <Typography variant="subtitle1" component="h2" align="center">
                Avengers: Infinity War
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className={classes.media}
              image="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              title="Avengers: Infinity War"
            />
          </CardActionArea>
        </Link>

        <CardActions className={classes.bottomInfo}>
          <Button size="small" color="primary">
            2019
          </Button>
          <Button size="small" color="primary">
            Comedy
          </Button>
        </CardActions>
      </ThemeProvider>
    </Card>
  );
};

export default CardMovie;
