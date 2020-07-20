import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Period extends Component {
    constructor() {
        super();
        this.state = {
            date: "New Period"
        }
    }
    onChangePeriod = () => {
        this.props.changePeriod(this.state.date);
    }

    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.onChangePeriod()}>
                    Period
            </Button>
            </div>
        );
    }
}

export default Period;