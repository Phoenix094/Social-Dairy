import React, { useState } from "react";
import { Typography, Paper, Button, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./style";
import { createPost } from "../../actions/posts";

const Form = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	const handleForm = (e) => {
		e.preventDefault();

		dispatch(createPost(postData));
	};
	const clear = () => {};
	return (
		<Paper className={classes.paper}>
			<form
				className={`${classes.root} ${classes.form}`}
				noValidate
				autoComplete="off">
				<Typography variant="h6"> Creating Memories </Typography>
				<TextField
					fullWidth
					name="creator"
					variant="outlined"
					value={postData.creator}
					label="Creator"
					onChange={(e) => {
						setPostData({ ...postData, creator: e.target.value });
					}}
				/>
				<TextField
					fullWidth
					name="title"
					variant="outlined"
					value={postData.title}
					label="Title"
					onChange={(e) => {
						setPostData({ ...postData, title: e.target.value });
					}}
				/>
				<TextField
					fullWidth
					name="message"
					variant="outlined"
					value={postData.message}
					label="Message"
					onChange={(e) => {
						setPostData({ ...postData, message: e.target.value });
					}}
				/>
				<TextField
					fullWidth
					name="tags"
					variant="outlined"
					value={postData.tags}
					label="Tags"
					onChange={(e) => {
						setPostData({ ...postData, tags: e.target.value });
					}}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => {
							setPostData({ ...postData, selectedFile: base64 });
						}}
					/>
				</div>
				<Button
					onClick={handleForm}
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					fullWidth>
					Submit
				</Button>
				<Button onClick={clear} variant="contained" color="secondary" fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
