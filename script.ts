let D: Date;
let day: string, date: string;
let mm: number, hh: number, ss: number;

let months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

let display = () => {
    D = new Date;
    date = `${D.getDate()} ${months[D.getMonth()]}, ${D.getFullYear()}`
    day = `${days[D.getDay()-1]}`
    hh = D.getHours();
    mm = D.getMinutes();
    ss = D.getSeconds();

    (document.getElementById("date") as HTMLElement).innerHTML = date;
    (document.getElementById("day") as HTMLElement).innerHTML = day;
    (document.getElementById("hours") as HTMLElement).innerHTML = (hh > 12 ? hh - 12 : hh).toString().padStart(2, "0");
    (document.getElementById("minutes") as HTMLElement).innerHTML = mm.toString().padStart(2, "0");
    (document.getElementById("seconds") as HTMLElement).innerHTML = ss.toString().padStart(2, "0");


}
setInterval(display, 1000)