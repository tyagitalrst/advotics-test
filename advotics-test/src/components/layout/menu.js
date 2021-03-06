import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '../../static/img/dashboard-icon.png';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: 'rgba(255,255,255, 0.8)',
    },
    drawerOpen: {
        top: '65px',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        right: '0',
    },
    drawerClose: {
        top: '65px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    active: {
        backgroundColor: '#D2D2D2',
        '& span':{
            color: theme.palette.primary.main,
            fontWeight: 600,
        }
    },
    notActive: {
        backgroundColor: 'none'
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOnClick = () => {
        setStatus(!status)
        props.changeStatus(!status)
    }


    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        {open ?
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton> :
                            <IconButton onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        }
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button onClick={handleOnClick} className={status? classes.active : classes.notActive}>
                    <ListItemIcon>
                        <IconButton >
                            <img src={DashboardIcon} alt="icon" />
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
}