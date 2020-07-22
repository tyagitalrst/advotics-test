import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import 'moment/min/locales';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        color: theme.palette.info.main,
        width: '100%',
        height: '48px',
        textTransform: 'none',

        '& span': {
            justifyContent: 'space-between'
        },

        '&:focus': {
            outline: '5px auto #37B04C'
        },

        '& p': {
            marginBottom: 0,
            fontFamily: 'Open Sans',
            fontSize: '1rem',

        }
    },
    icon: {
        color: theme.palette.info.light,
        fontSize: '1rem',
        marginRight: theme.spacing(0.25),
    },
    periodRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
    period: {
        paddingLeft: 16,
        color: theme.palette.info.light
    },
    date: {

    }
}));

export default function ButtonPeriod(props) {
    const classes = useStyles();
    const [status, setStatus] = React.useState(false);

    const handleOnClick = () => {
        setStatus(!status)
    }

    return (
        <Button
            variant="contained"
            className={classes.button}
            onClick={handleOnClick}
            endIcon={status ? <ExpandLessIcon style={{ color: '#757575' }} /> : <ExpandMoreIcon style={{ color: '#757575' }} />}
        >
            <div className={classes.periodRoot}>
                <DateRangeIcon className={classes.iccon}/>
                <p className={classes.period}>Period</p>
            </div>
            <p className={classes.date}>{moment(props.fromDate).locale("id").format("LL")} - {moment(props.toDate).locale("id").format("LL")}</p>
        </Button>

    );
}