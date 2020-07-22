import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: '0px',
    },
    rootCard: {
        display: 'flex',
        width: '100%',
        maxHeight: 60,
        margin: '8px 0',
    },
    rootCardFirst: {
        display: 'flex',
        width: '100%',
        height: 80,
        margin: '8px 0',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '8px 24px 8px 8px',
    },
    detailsFirst: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '14px 16px 14px 8px',
        backgroundColor: '#FFE7BD',
    },
    content: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '1rem',
            margin: '0',
            color: theme.palette.text.disabled
        }
    },
    contentFirst: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '1.25rem',
            margin: '0',
            color: theme.palette.text.disabled
        }
    },
    cover: {
        maxWidth: 60,
        flexGrow: '8',
    },
    coverFirst: {
        maxWidth: 80,
        flexGrow: '8',
    },
    controls: {
        display: 'flex',
        alignItems: 'left',
        padding: '0',

        '& p': {
            flexGrow: '1',
            margin: '0',
            fontSize: '0.75rem',
            color: theme.palette.text.secondary
        }
    },
    controlsFirst: {
        display: 'flex',
        alignItems: 'left',
        padding: '0',

        '& p': {
            flexGrow: '1',
            margin: '0',
            fontSize: '0.875',
            color: theme.palette.text.secondary
        }
    },
}));

export default function BestTopCard(props) {
    const classes = useStyles();
    const index = [0,1,2,3,4]

    return (
        <ListItem className={classes.listItem}>
            <Card className={index.includes(props.index) ? classes.rootCardFirst : classes.rootCard}>
                <CardMedia
                    className={index.includes(props.index) ? classes.coverFirst : classes.cover}
                    image={props.image ? props.image : null}
                />
                <div className={index.includes(props.index) ? classes.detailsFirst : classes.details}>
                    <CardContent className={index.includes(props.index) ? classes.contentFirst : classes.content}>
                        <p>{props.title}</p>
                    </CardContent>
                    <div className={index.includes(props.index) ? classes.controlsFirst : classes.controls}>
                        <p>Rp {props.price}</p>
                        <p>{props.sold}</p>
                    </div>
                </div>
            </Card>
        </ListItem>
    );
}
