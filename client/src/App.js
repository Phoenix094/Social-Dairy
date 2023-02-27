import React from "react";
import { AppBar, Container, Grow, Grid, Typography } from "@material-ui/core";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style";

const App = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} color="inherit" position="static">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="memories"
					height="60"
				/>
			</AppBar>
			<Grow in>
				<Grid container justify="space-between" spacing={3} alignItems="center">
					<Grid item xs={12} sm={7}>
						<Posts />
					</Grid>
					<Grid item xs={12} sm={7}>
						<Form />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
};

export default App;
