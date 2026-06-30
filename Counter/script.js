let count = 0;
let timer;

function startCounter() {
    if (!timer) {
        timer = setInterval(function () {
            count++;
            document.getElementById("count").innerText = count;
        }, 1000);
    }
}

function stopCounter() {
    clearInterval(timer);
    timer = null;
}

function resetCounter() {
    clearInterval(timer);
    timer = null;
    count = 0;
    document.getElementById("count").innerText = count;
}