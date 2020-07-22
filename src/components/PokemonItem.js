import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import { fetchDataFrom } from "../utils/fetchApi";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PokemonItem = ({ value }) => {
  const { themeState } = useContext(ThemeContext);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    async function getData() {
      fetchDataFrom(value.url).then((data) => {
        if (isMounted) setState(data);
        setIsLoading(false);
      });
    }
    getData();
    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={state.sprites.front_shiny}
            title={state.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {state.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
    // <div className="container mx-auto">
    //   <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //     <img
    //       className="w-50 mx-auto"
    //       src={state.sprites.front_shiny}
    //       alt={`${state.name}`}
    //     />
    //     <div className="px-6 py-4">
    //       <div className="font-bold text-xl mb-2">{state.name}</div>
    //       <p className="text-gray-700 text-base">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //         Voluptatibus quia, nulla! Maiores et perferendis eaque,
    //         exercitationem praesentium nihil.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

PokemonItem.propTypes = {
  value: PropTypes.object,
};
export default PokemonItem;
