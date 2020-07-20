import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import Menu from './menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: '32px 32px 32px 24px',
    },

}));

export default function LayoutDashboard(props) {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <Menu />
                <main className={classes.content}>
                    {props.dashboard}
                </main>
            </div>
        </div>
    );
}
