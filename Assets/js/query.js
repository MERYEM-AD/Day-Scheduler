// Use Moment.js 

let today = moment();
let today_Date_Hour = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today_Date_Hour);