import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AdvoticsIcon from '../../src/static/img/advotics-logo.png';
import LogoutIcon from '../../src/static/img/logout.png'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#ffffff',
        padding: '0 32px',
        height: '64px'
    },
    icon: {
        height: 32,
        margin: '16px 0'
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    iconLogout: {
        height: 15,
        width: 15,
        padding: '24px 0 24px 16px'
    },
    iconAccount: {
        height: 32,
        width: 32,
    },

    user: {
        height: '64px'
    },
    rootContent: {
        display: 'flex',
        width: '100%',
        margin: '0',
        color: 'black',
        padding: '16px 0px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '0 16px 0 0',

    },
    username: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '0,875rem',
            margin: '0',
            fontWeight: 'bold'
        }
    },
    cover: {
        height: 15,
        flexGrow: '8',
        color: 'black'
    },
    company: {
        display: 'flex',
        alignItems: 'right',
        padding: '0',
        '& p': {
            flexGrow: 0,
            margin: '0',
            fontSize: '10px',
            fontWeight: 'inherit',
        }
    },

    navHeading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    },
    navHeading2: {
        display: 'flex',
        marginRight: 16,
    },

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <div className={classes.navHeading}>
                        <div className={classes.icon}>
                            <img src={AdvoticsIcon} alt="icon" />
                        </div>
                        <div className={classes.navHeading2}>
                            <div className={classes.user}>
                                <div className={classes.rootContent}>
                                    <div className={classes.details}>
                                        <div className={classes.username}>
                                            <p>Username</p>
                                        </div>
                                        <div className={classes.company}>
                                            <div className={classes.labelRoot}>
                                                <p>Company Name</p>
                                            </div>
                                        </div>
                                    </div>
                                    <AccountCircle className={classes.iconAccount} />
                                </div>
                            </div>
                            <div className={classes.iconLogout}>
                                <img src={LogoutIcon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
