var D;
var day, date;
var mm, hh, ss;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var display = function () {
    D = new Date;
    date = "".concat(D.getDate(), " ").concat(months[D.getMonth()], ", ").concat(D.getFullYear());
    day = "".concat(days[D.getDay() - 1]);
    hh = D.getHours();
    mm = D.getMinutes();
    ss = D.getSeconds();
    document.getElementById("date").innerHTML = date;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hours").innerHTML = (hh > 12 ? hh - 12 : hh).toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = mm.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = ss.toString().padStart(2, "0");
};
setInterval(display, 1000);
