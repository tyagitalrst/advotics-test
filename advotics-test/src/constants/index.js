import moment from "moment";

export const DASHBOARD = 'Dashboard'
export const MARKETINSIGHT = 'MARKET INSIGHT'

const days = (
    moment(moment().endOf("month"))).diff(
        moment((moment().startOf("month"))),
    'days') + 1;

export const THISMONTH = days