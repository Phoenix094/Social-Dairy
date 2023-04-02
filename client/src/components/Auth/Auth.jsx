import React, { useState } from 'react'
import { Avatar, Paper, Grid, Container, Typography, Button } from '@material-ui/core'
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const [isSignUp, setIsSignUp] = useState(false);

    const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    return (
        <Container component='main' maxWidth='xs' >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} />
                <LockedOutlinedIcon />
                <Typography variant='h5' >{isSignUp ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='First Name' label='First Name' handleChange={handleChange} autoFoucs half />
                                    <Input name='First Name' label='First Name' handleChange={handleChange} autoFoucs half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} hadleShowPassword={handleShowPassword} />
                        {isSignUp &&
                            <Input name='password' label='Repeat Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} hadleShowPassword={handleShowPassword} />
                        }
                        <Button type='submit' variant='contained' fullWidth color='primary' className={classes.submit} >
                            {
                                isSignUp ? 'Sign In' : 'Sign Up'
                            }
                        </Button>
                    </Grid>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {
                                    isSignUp ? 'Already have account? Sign In' : `Don't have account? Sign Up`
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
