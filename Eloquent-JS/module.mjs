/* 
This example module provides a date-formatting function. It uses two pack-
ages from NPM— ordinal to convert numbers to strings like "1st" and "2nd" ,
and date-names to get the English names for weekdays and months. It exports
a single function, formatDate , which takes a Date object and a template string.
The template string may contain codes that direct the format, such as YYYY
for the full year and Do for the ordinal day of the month. You could give it a string like "MMMM Do YYYY" to get output like “November 22nd 2017”.
*/

import ordinal from "ordinal";
import { days, months } from "date-names";

export function formatDate (date, format) 
{
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
}

