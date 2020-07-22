import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AdvoticsIcon from '../../static/img/advotics-logo.png';
import LogoutIcon from '../../static/img/logout.png';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#ffffff',
        padding: '0 32px',
        height: '64px',
        zIndex: '1'
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
        padding: '16px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '0 16px 0 0',
        fontFamily: 'Open Sans',
        color: theme.palette.secondary.light

    },
    username: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '0,875rem',
            margin: '0',
            fontWeight: theme.typography.fontWeightMedium
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
            fontWeight: theme.typography.fontWeightLight
        }
    },

    navHeading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    },
    navHeading2: {
        display: 'flex',
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
                                    <AccountCircle className={classes.iconAccount} style={{ color: '#707070C4' }}/>
                                </div>
                            </div>
                            <IconButton aria-label="settings" href="/">
                                <img src={LogoutIcon} alt="icon" />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
