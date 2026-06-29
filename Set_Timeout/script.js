let messages = [
    "Login Successful",
    "New Email",
    "Meeting in 10 Minutes",
    "New Message",
    "Battery Low",
    "Download Complete"
];

let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.onclick = function(){

    box.innerHTML = "";

    for(let i = 0; i < messages.length; i++){

        setTimeout(function(){

            let p = document.createElement("div");
            p.className = "message";
            p.innerText = messages[i];

            box.appendChild(p);

        }, i * 2000);

    }

}