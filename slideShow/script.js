let name = document.getElementById("name");

let slides = [
    { text: "HTML", color: "lightblue" },
    { text: "CSS", color: "lightgreen" },
    { text: "JavaScript", color: "lightpink" },
    { text: "React", color: "lightyellow" },
    { text: "Node.js", color: "lightgray" },
    { text: "Python", color: "orange" },
    { text: "Java", color: "skyblue" },
    { text: "C", color: "khaki" },
    { text: "C++", color: "plum" },
    { text: "SQL", color: "lightcoral" },
    { text: "PHP", color: "wheat" },
    { text: "Bootstrap", color: "lavender" },
    { text: "Git", color: "lightsalmon" },
    { text: "GitHub", color: "lightseagreen" },
    { text: "MongoDB", color: "palegreen" },
    { text: "Express", color: "beige" },
    { text: "API", color: "mistyrose" },
    { text: "JSON", color: "powderblue" },
    { text: "VS Code", color: "thistle" },
    { text: "Programming", color: "peachpuff" }
];

let i = 0;

function changeSlide() {
    document.body.style.backgroundColor = slides[i].color;
    name.innerText = slides[i].text;

    i++;

    if (i == slides.length) {
        i = 0;
    }
}

changeSlide();

setInterval(changeSlide, 2000);