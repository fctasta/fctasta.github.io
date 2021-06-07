var days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứa Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
let DAY = new Date();
var year,
    month,
    date,
    day,
    second,
    ms;
let ansDay;

function buildans(D) {
    year = D.getFullYear(),
        month = D.getMonth(),
        date = D.getDate(),
        day = D.getDay(),
        second = D.getSeconds(),
        ms = D.getTime();
    let st = D.toISOString();
    ansDay = "";
    for (var i = 0; i < st.length; i++) {
        if (st[i] == "T") break;
        ansDay += st[i];
    }
}
buildans(DAY);

let event1, event2, eventEnd;
let DAYevent = new Date(year, month, date, 19, 30);
var DAYms = DAYevent.setDate(DAYevent.getDate() + 6 - day);

if (DAYevent.getTime() < DAY.getTime()) {
    event1 = new Date(DAYevent.setDate(DAYevent.getDate() + 7));
    event2 = new Date(DAYevent.setDate(DAYevent.getDate() + 7));
} else {
    event1 = new Date(DAYms);
    event2 = new Date(DAYevent.setDate(DAYevent.getDate() + 7));
}


buildans(event1);
document.getElementById("event1Day").innerHTML =
    ansDay;
document.getElementById("event1DayBot").innerHTML =
    " (" + days[day] + ")";
document.getElementById("event1Start").innerHTML =
    ansDay + " " + event1.toLocaleTimeString() + " UTC+" + event1.getTimezoneOffset() / -60;
document.getElementById("event1StartBot").innerHTML = " (" + event1.getTime() / 1000 + ")";
eventEnd = new Date(event1.getTime() + 10800000);
buildans(eventEnd);

document.getElementById("event1End").innerHTML =
    ansDay + " " + eventEnd.toLocaleTimeString() + " UTC+" + eventEnd.getTimezoneOffset() / -60;
document.getElementById("event1EndBot").innerHTML = " (" + eventEnd.getTime() / 1000 + ")";

buildans(event2);
document.getElementById("event2Day").innerHTML =
    ansDay;
document.getElementById("event2DayBot").innerHTML =
    " (" + days[day] + ")";
document.getElementById("event2Start").innerHTML =
    ansDay + " " + event2.toLocaleTimeString() + " UTC+" + event2.getTimezoneOffset() / -60;
document.getElementById("event2StartBot").innerHTML = " (" + event2.getTime() / 1000 + ")";

eventEnd = new Date(event2.getTime() + 10800000);
buildans(eventEnd);

document.getElementById("event2End").innerHTML =
    ansDay + " " + eventEnd.toLocaleTimeString() + " UTC+" + eventEnd.getTimezoneOffset() / -60;
document.getElementById("event2EndBot").innerHTML = " (" + eventEnd.getTime() / 1000 + ")";
