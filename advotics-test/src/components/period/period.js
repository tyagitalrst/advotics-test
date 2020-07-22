import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from "moment";
import 'moment/min/locales';
import '../../css/date-range-picker.css';
import ButtonPeriod from './button-period';


const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
    "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
    "This Month": [moment().startOf("month"), moment()],
}

const start = moment().subtract(7, "days");
const end = moment().subtract(1, "days");
const minDate = moment().subtract(6, "month");
const maxDate = moment().subtract(1, "days");

class Period extends Component {
    constructor() {
        super();
        this.state = {
            days: 7,
            fromDate: moment().subtract(7, "days"),
            toDate: moment().subtract(1, "days"),
        }
    }

    handleEvent = (event, picker) => {
        console.log("start: ", picker.startDate._d);
        console.log("end: ", picker.endDate._d);
        const days = (moment(picker.endDate._d.toISOString()))
            .diff((moment(picker.startDate._d.toISOString())),
                'days') + 1;
        this.setState({
            fromDate: picker.startDate._d.toISOString(),
            toDate: picker.endDate._d.toISOString(),
            days: days
        });
        this.props.changePeriod(this.state.days);
    };

    render() {
        return (
            <DateRangePicker
                startDate={start}
                endDate={end}
                ranges={range}
                opens={'left'}
                alwaysShowCalendars={true}
                onEvent={this.handleEvent}
                minDate={minDate}
                maxDate={maxDate}
            >
                <ButtonPeriod
                    fromDate={this.state.fromDate}
                    toDate={this.state.toDate} />
            </DateRangePicker>
        );
    }
}

export default Period;