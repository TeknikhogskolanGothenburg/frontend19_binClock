window.setInterval(function() {
    clock();
}, 1000);

document.addEventListener('keydown', toggleClocks);
function toggleClocks(e) {
    let decClock = document.getElementById("dec-clock");
    if(e.code === 'KeyD') {
        if(decClock.style.opacity === '0') {
            decClock.style.opacity = '0.6';
        }
        else {
            decClock.style.opacity = '0';
        }
    }
    
    let hexClock = document.getElementById("hex-clock");
    if(e.code === 'KeyH') {
        if(hexClock.style.opacity === '0') {
            hexClock.style.opacity = '0.6';
        }
        else {
            hexClock.style.opacity = '0';
        }
    }

    let binClock = document.getElementById("bin-clock");
    if(e.code === 'KeyB') {
        if(binClock.style.opacity === '0') {
            binClock.style.opacity = '0.6';
        }
        else {
            binClock.style.opacity = '0';
        }
    }
}

function tick(item, _) {
    let [n, t] = item;
    let bits = Array.from(t).reverse();
    for(let i = 0; i < 4; ++i) {
        if((n >> i) & 1 === 1) {
            bits[i].style.opacity = "1.0";
            bits[i].style.boxShadow = "0 0 4px 4px #22e122";
        }
        else {
            bits[i].style.opacity = "0.2";
            bits[i].style.boxShadow = "0 0 0 0 #000";
        }
    }
}

function clock() {
    let date = new Date();
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();


    var time = [
        [second % 10, document.getElementsByClassName("s2")],
        [(second - second % 10) / 10, document.getElementsByClassName("s1")],
        [minute % 10, document.getElementsByClassName("m2")],
        [(minute - minute % 10) / 10, document.getElementsByClassName("m1")],
        [hour % 10, document.getElementsByClassName("h2")],
        [(hour - hour % 10) / 10, document.getElementsByClassName("h1")]
    ];
    
    time.forEach(tick);

    // Decimal Clock
    let dcDiv = document.getElementById("dc");
    dcDiv.innerHTML = `${hour}:${minute}:${second}`;

    // Hexadecimal clock
    
    let hexHour = hour.toString(16).padStart(2, '0');
    let hexMinute = minute.toString(16).padStart(2, '0');
    let hexSecond = second.toString(16).padStart(2, '0');
    let hcDiv = document.getElementById("hc");
    hcDiv.innerHTML = `${hexHour}:${hexMinute}:${hexSecond}`;

    // Binary clock
    let binHour = parseInt(hour, 10).toString(2).padStart(6, '0');
    let binMinute = parseInt(minute, 10).toString(2).padStart(6, '0');
    let binSecond = parseInt(second, 10).toString(2).padStart(6, '0');
    let bcDiv = document.getElementById("bc");
    bcDiv.innerHTML = `${binHour}:${binMinute}:${binSecond}`;
    
}