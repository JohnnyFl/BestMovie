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

const CardMovie = props => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: blue
    }
  });

  const { movie } = props;

  return (
    <Card className={classes.card}>
      <ThemeProvider theme={theme}>
        <Link to={`/movie/${movie.id}`}>
          <CardActionArea>
            <CardContent>
              <Typography variant="subtitle2" component="h2" align="center">
                {movie.original_title || movie.original_name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              title={movie.original_title || movie.original_name}
            />
          </CardActionArea>
        </Link>

        {/* <CardActions className={classes.bottomInfo}>
          <Button size="small" color="primary">
            2019
          </Button>
          <Button size="small" color="primary">
            Comedy
          </Button>
        </CardActions> */}
      </ThemeProvider>
    </Card>
  );
};

export default CardMovie;
