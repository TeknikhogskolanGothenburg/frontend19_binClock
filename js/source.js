window.setInterval(function() {
    clock();
}, 1000);

function clock() {
    let date = new Date();
    let dcDiv = document.getElementById("dc");
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    dcDiv.innerHTML = `${hour}:${minute}:${second}`;
}