import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

const TEST_PRODUCTS = [
    {
        id: 1,
        name: "Mela Rossa",
        description: "melinda igp",
        quantity: 1,
        price: 3,
    },
    {
        id: 2,
        name: "Mela Verde",
        description: "melinda igp",
        quantity: 1,
        price: 2.5,
    },
    {
        id: 3,
        name: "Pera",
        description: "Opera igp",
        quantity: 1,
        price: 2,
    },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {TEST_PRODUCTS.map((product) => {
                    return (
                        <Grid
                            item
                            key={product.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </main>
    );
};

export default Products;
