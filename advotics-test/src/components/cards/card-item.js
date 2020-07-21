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
            fontSize: '16px',
            margin: '0',
        }
    },
    contentFirst: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '20px',
            margin: '0',
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
            fontSize: '12px'
        }
    },
    controlsFirst: {
        display: 'flex',
        alignItems: 'left',
        padding: '0',

        '& p': {
            flexGrow: '1',
            margin: '0',
            fontSize: '14px'
        }
    },
}));

export default function BestTopCard(props) {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <Card className={props.index === 0 ? classes.rootCardFirst : classes.rootCard}>
                <CardMedia
                    className={props.index === 0 ? classes.coverFirst : classes.cover}
                    image={props.image ? props.image : null}
                />
                <div className={props.index === 0 ? classes.detailsFirst : classes.details}>
                    <CardContent className={props.index === 0 ? classes.contentFirst : classes.content}>
                        <p>{props.title}</p>
                    </CardContent>
                    <div className={props.index === 0 ? classes.controlsFirst : classes.controls}>
                        <p>Rp {props.price}</p>
                        <p>{props.sold}</p>
                    </div>
                </div>
            </Card>
        </ListItem>
    );
}
