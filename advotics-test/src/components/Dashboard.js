import React, { Component } from 'react';
import LayoutDashboard from '../components/layout/layout-dashboard';
import MarketInsight from '../components/market-insight/market-insight';
import Period from '../components/period/period';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DASHBOARD } from '../constants/index';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            days: 7
        };
    }

    onChangePeriod(newDays) {
        this.setState({
            days: newDays
        });
    }

    render() {
        return (
            <div>
                <LayoutDashboard dashboard={
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h1">{DASHBOARD}</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Period
                                changePeriod={this.onChangePeriod.bind(this)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MarketInsight days={this.state.days} />
                        </Grid>
                    </Grid>
                } />
            </div>
        );
    }
}

export default Dashboard;