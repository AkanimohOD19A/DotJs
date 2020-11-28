function clock() {
    const hr = document.getElementById("hour");
    const min = document.getElementById("minutes");
    const sec = document.getElementById("seconds");

    const fullDate = new Date()

    let hrs = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10){
        secs = "0" + secs;
    }

    hr.innerHTML  = hrs;
    min.innerHTML = mins;
    sec.innerHTML = secs;
}
    
setInterval(clock, 100)