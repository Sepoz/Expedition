import React from "react";

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

//-----------------------------------------
//-----------------------------------------

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

//-----------------------------------------
//-----------------------------------------

const Product = (props) => {
    const { name, description, quantity, price } = props.product;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="" title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5">€ {price}</Typography>
                </div>

                <FormControl>
                    <InputLabel id="quantity-label">Quantità</InputLabel>
                    <Select
                        labelId="quantity-label"
                        id="quantity-select"
                        value={quantity}
                    >
                        <MenuItem value={0.2}>0,2 Kg</MenuItem>
                        <MenuItem value={0.4}>0,4 Kg</MenuItem>
                        <MenuItem value={0.6}>0,6 Kg</MenuItem>
                    </Select>
                </FormControl>

                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Aggiungi al carrello">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
