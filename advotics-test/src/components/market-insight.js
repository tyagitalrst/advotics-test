import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BestTopCard from './cards/best-top';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: '#FFFFFF',
    },
    accordionSummary: {
        backgroundColor: '#37B04C',
        borderRadius: '2px',
    }
}));

export default function MarketInsight(props) {
    const classes = useStyles();

    return (
        <div >
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading}>MARKET INSIGHT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <h1>Dashboard</h1>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h1>{props.date}</h1>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <BestTopCard title={"BEST SELLING SKU"} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <BestTopCard title={"TOP COMPETITOR SKU"}/>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}