import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";


import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./style";
import { getPosts } from "../../actions/posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid
                    className={classes.mainContainer}
                    container
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} currentId={currentId} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
