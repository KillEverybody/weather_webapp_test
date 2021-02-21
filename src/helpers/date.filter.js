import {format,  fromUnixTime} from "date-fns";

export default date => {
    return format(new Date(fromUnixTime(date)), 'E').toUpperCase();
};