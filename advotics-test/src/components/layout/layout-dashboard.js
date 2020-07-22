import React, { useState } from 'react';
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
    const [status, setStatus] = useState(true);

    const onChangeStatus = (newStatus) => {
        setStatus(newStatus)
    };

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <Menu changeStatus={onChangeStatus}/>
                <main className={classes.content}>
                    {status ? props.dashboard : null}
                </main>
            </div>
        </div>
    );
}
