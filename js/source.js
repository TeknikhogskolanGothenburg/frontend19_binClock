window.setInterval(function() {
    clock();
}, 1000);

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


    let dcDiv = document.getElementById("dc");

    dcDiv.innerHTML = `${hour}:${minute}:${second}`;
}