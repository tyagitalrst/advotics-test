import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import 'moment/min/locales'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        color: theme.palette.info.main,
        maxWidth: '400px',
        textTransform: 'none',

        '&:focus': {
            outline: '5px auto #37B04C'
        },

        '& p':{
            marginBottom: 0,
        }
    },
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
            startIcon={<DateRangeIcon />}
            onClick={handleOnClick}
            endIcon={status ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
            <p>Period</p>
            <p>{moment(props.fromDate).locale("id").format("LL")} - {moment(props.toDate).locale("id").format("LL")}</p>
        </Button>

    );
}