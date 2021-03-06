import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Cart from '../../../../static/img/sales-turnover.svg';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { THISMONTH } from '../../../../constants/index';
import { dummySalesTurnover } from '../../../../constants/dummy-data';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 276,
    },
    moreIcon: {
        margin: -12
    },

    listItem: {
        padding: '0px',
    },

    rootContent: {
        display: 'flex',
        width: '100%',
        margin: '0',
        paddingRight: '36px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '0',
    },
    content: {
        flex: '1 0 auto',
        padding: '0',
        '& p': {
            fontSize: '1.25rem',
            margin: '0',
            fontWeight: 'bold'
        }
    },
    cover: {
        maxWidth: 45,
        height: 40,
        flexGrow: '8',
    },
    controls: {
        display: 'flex',
        alignItems: 'left',
        padding: '0',
        '& p': {
            flexGrow: 0,
            margin: '0',
            fontSize: '10px',
            fontWeight: 'inherit',
        }
    },
    fontIcon: {
        color: 'red',
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: theme.spacing(0.25),
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        '& p': {
            color: theme.palette.text.secondary
        }
    },
    percentage: {
        color: 'red',
        fontSize: '10px',
        fontWeight: 'bold',
        flexGrow: 0,
    },

    cardHeading: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 0,
        '&>p': {
            fontSize: '0.875rem',
            margin: 0,
            color: theme.palette.secondary.contrastText
        }

    },
    cardHeading2: {
        display: 'flex',
    },
}));

export default function SalesCard(props) {
    const classes = useStyles();

    const category = () => {
        if (props.days === 1) {
            return 1;
        } else if (props.days === 7) {
            return 2;
        } else if (props.days === THISMONTH) {
            return 3;
        } else if (props.days < THISMONTH) {
            return 4;
        } else if (props.days > THISMONTH) {
            return 5;
        }
    }

    return (
        <Card className={classes.root}>
            <div className={classes.cardHeading}>
                <p>Sales Turnover</p>
                <div className={classes.cardHeading2}>
                    <IconButton aria-label="settings" className={classes.moreIcon} href="/">
                        <MoreVertIcon style={{ color: '#757575' }} />
                    </IconButton>
                </div>
            </div>
            <CardContent className={classes.rootContent}>
                {dummySalesTurnover.sort((a, b) => b.price * b.sold - a.price * a.sold).map((data, index) =>
                    (
                        data.category === category() ?
                            <div className={classes.details} key={index}>
                                <CardContent className={classes.content}>
                                    <p>Rp {data.sales}</p>
                                </CardContent>
                                <div className={classes.controls}>
                                    <div className={classes.labelRoot}>
                                        <ArrowDownwardIcon className={classes.fontIcon} />
                                        <span className={classes.percentage}>{data.percentage}% </span>
                                        <p>&nbsp;last period in products sold</p>
                                    </div>
                                </div>
                            </div>
                            : null
                    )
                )}
                <CardMedia
                    className={classes.cover}
                    image={Cart}
                />
            </CardContent>
        </Card>
    );
}