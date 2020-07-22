import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from "moment";
import ButtonPeriod from '../components/button-period';
import 'moment/min/locales'


const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Year": [
        moment()
            .subtract(1, "year")
            .startOf("year"),
        moment()
            .subtract(1, "year")
            .endOf("year")
    ]
}

class Period extends Component {
    constructor() {
        super();
        this.state = {
            date: "New Period",
            fromDate: new Date(),
            toDate: new Date(),
        }
    }
    onChangePeriod = () => {
        this.props.changePeriod(this.state.date);
    }

    handleEvent = (event, picker) => {
        console.log("start: ", picker.startDate._d);
        console.log("end: ", picker.endDate._d);
        console.log(picker.endDate._d - picker.startDate._d)
        this.setState({
            fromDate: picker.startDate._d.toISOString(),
            toDate: picker.endDate._d.toISOString()
        });
    };

    render() {
        console.log(this.state.fromDate);


        return (
            <DateRangePicker
                ranges={range}
                opens={'left'}
                alwaysShowCalendars={true}
                onEvent={this.handleEvent}
                startDate={moment().subtract(6, "days")}
                endDate={moment()}
                minDate={moment().subtract(6, "month")}
                maxDate={moment()}
            >
                <ButtonPeriod
                    fromDate={this.state.fromDate}
                    toDate={this.state.toDate} />
            </DateRangePicker>
        );
    }
}

export default Period;