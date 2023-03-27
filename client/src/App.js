import React, { useEffect, useState } from "react";
import { AppBar, Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style";
import { getPosts } from "./actions/posts";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<>
			<Container maxWidth="lg">
				<AppBar className={classes.appBar} position="static" color="inherit">
					<Typography className={classes.heading} variant="h2">
						Memories{" "}
					</Typography>
					<img
						className={classes.image}
						src={memories}
						alt="memories"
						height="60"
					/>
				</AppBar>
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
			</Container>
		</>
	);
};

export default App;
