import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AdvoticsIcon from '../../src/static/img/advotics-logo.png'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#ffffff',
        padding: '0 32px'
    },
    icon: {
        height: '32px',
        margin: '16px 0'
    },

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <Grid container spacing={1}>
                        <Grid item xs={10} md={10}>
                            <div className={classes.icon}>
                                <img src={AdvoticsIcon} alt="icon" />
                            </div>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="primary"
                                    className={classes.icon}
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
