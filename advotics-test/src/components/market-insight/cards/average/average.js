import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import AverageChart from './average-chart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'white',
        border: '1px solid #ced4da',
        fontSize: 12,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            backgroundColor: 'white',
            borderColor: 'none',
            boxShadow: 'none',
        },
    },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 664,
        height: '100%'
    },
    margin: {
        alignItems: 'center',
    },
    moreIcon: {
        marginRight: -12,
    },

    cardHeading: {
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>h3': {
            fontWeight: theme.typography.fontWeightRegular,
        }
    },
    cardHeading2: {
        display: 'flex',
    },

    bottomChart: {
        marginTop: 48,
    },

    formControl: {
        margin: theme.spacing(1),
        width: 107,
        height: 32,
    },
}));

var getRandomValues = function () {
    var array = [];

    for (var i = 0; i < 7; i++) {
        var a = Math.round(Math.random() * 7);
        array.push(a);
    }
    return array;
};

export default function AverageCard(props) {
    const classes = useStyles();
    const [period, setPeriod] = React.useState('0');
    const [valChart, setValChart] = React.useState([getRandomValues(), getRandomValues(), getRandomValues(), getRandomValues(), getRandomValues()]);

    const handleChange = (event) => {
        setPeriod(event.target.value)
        setValChart([getRandomValues(), getRandomValues(), getRandomValues(), getRandomValues(), getRandomValues()])
    };

    return (
        <Card className={classes.root}>
            <div className={classes.cardHeading}>
                <Typography variant="h3">AVERAGE PURCHASE VALUE</Typography>
                <div className={classes.cardHeading2}>
                    <FormControl variant="outlined">
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            defaultValue={'0'}
                            value={period}
                            onChange={handleChange}
                            className={classes.formControl}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value={""}>
                                <em></em>
                            </MenuItem>
                            <MenuItem value={"0"}>Last 7 days</MenuItem>
                            <MenuItem value={"1"}>Yesterday</MenuItem>
                            <MenuItem value={"2"}>Last 30 days</MenuItem>
                            <MenuItem value={"3"}>This Month</MenuItem>
                            <MenuItem value={"4"}>Custom</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton aria-label="settings" className={classes.moreIcon} href="/">
                        <MoreVertIcon style={{ color: '#757575' }} />
                    </IconButton>
                </div>
            </div>
            <CardContent className={classes.bottomChart}>
                <AverageChart
                    dataNett={valChart[0]}
                    dataGross={valChart[1]}
                    dataAPV={valChart[2]}
                    dataUPT={valChart[3]}
                    dataLine={valChart[4]}
                />
            </CardContent>
        </Card>
    );
}