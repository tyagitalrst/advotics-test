import React, { Component } from 'react';
import LayoutDashboard from './layout-dashboard';
import MarketInsight from './market-insight';
import Period from './period';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            date: "Period"
        };
    }

    onChangePeriod(newPeriod) {
        this.setState({
            date: newPeriod
        });
    }

    render() {
        return (
            <div>
                <LayoutDashboard dashboard={
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h1">Dashboard</Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Period
                                changePeriod={this.onChangePeriod.bind(this)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MarketInsight date={this.state.date} />
                        </Grid>
                    </Grid>
                } />
            </div>
        );
    }
}

export default Dashboard;
