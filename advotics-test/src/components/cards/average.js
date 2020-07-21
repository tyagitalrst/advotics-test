import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import AverageChart from '../average-chart';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
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
        paddingLeft: 16,
        paddingRight: 0,
    },

    cardHeading: {
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardHeading2: {
        display: 'flex',
    },

    formControl: {
        margin: theme.spacing(1),
        width: 107,
        height: 32,
    },

    bottomChart:{
        marginTop: 48,
    }
}));

export default function AverageCard(props) {
    const classes = useStyles();
    const [period, setPeriod] = React.useState('');
    const handleChange = (event) => {
        setPeriod(event.target.value);
    };

    // const category = '1';

    return (
        <Card className={classes.root}>
            <div className={classes.cardHeading}>
                <Typography variant="h5">AVERAGE PURCHASE VALUE</Typography>
                <div className={classes.cardHeading2}>
                    <FormControl variant="outlined">
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={period}
                            onChange={handleChange}
                            className={classes.formControl}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"1"}>Ten</MenuItem>
                            <MenuItem value={"2"}>Twenty</MenuItem>
                            <MenuItem value={"3"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton aria-label="settings" className={classes.moreIcon}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <CardContent className={classes.bottomChart}>
                <AverageChart />
            </CardContent>
        </Card>
    );
}

