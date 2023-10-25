import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';

import useStyles from "./style";
import memories from "../../images/memories.png";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(localStorage.getItem("profile"));
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        console.log(token);
        setUser(localStorage.getItem('profile'))

    }, [location])

    console.log(user.result);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2">
                    Memories{" "}
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            {/* <Toolbar className={classes.toolbar} >
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6' >{user.result.name}</Typography>
                            <Button variant="contained" color="secondary" className='' onClick={logout} >Log Out</Button>
                        </div>
                    ) : (
                        <Button color="primary" variant="contained" component={Link} to='/auth' >Sign In</Button>
                    )
                }
            </Toolbar> */}
        </AppBar>
    );
};

export default Navbar;
