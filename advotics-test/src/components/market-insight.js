import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BestTopCard from './cards/best-top';
import SalesCard from './cards/sales';
import AverageCard from './cards/average';
import HelpIcon from '../static/img/help.png';

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
    },
    cardHeading: {
        padding: '0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    cardHeading2: {
        display: 'flex',
    },

    fontIcon: {
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: theme.spacing(0.25),
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
    help: {
        textDecoration: 'underline',
        color: 'white',
    }
}));

export default function MarketInsight(props) {
    const classes = useStyles();

    return (
        <div >
            <Accordion defaultExpanded className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                >
                    <div className={classes.cardHeading}>
                        <Typography className={classes.heading}>MARKET INSIGHT</Typography>
                        <div className={classes.cardHeading2}>
                            <div className={classes.labelRoot}>
                                <img src={HelpIcon} alt="icon" className={classes.fontIcon}/>
                                <a className={classes.help}>Click Here for Help</a>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SalesCard />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* <h1>{props.date}</h1> */}
                            <AverageCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <BestTopCard title={"BEST SELLING SKU"} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <BestTopCard title={"TOP COMPETITOR SKU"} />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}