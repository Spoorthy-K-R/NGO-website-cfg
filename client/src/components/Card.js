import React from "react";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardContainer = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.image}
          style={{ height: "auto", maxHeight: "100%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={props.link}>
            <Button size="small">Login</Button>
          </Link>
          <Button size="small">Register</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardContainer;
