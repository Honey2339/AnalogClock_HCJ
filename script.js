let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function dTime(){
    let date = new Date();
    let hhour = date.getHours();
    let mmin = date.getMinutes();
    let ssec = date.getSeconds();

    let hrotate = 30*hhour + mmin/2;
    let mrotate = 6*mmin;
    let srotate = 6*ssec;

    hour.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}
setInterval(dTime,1000);