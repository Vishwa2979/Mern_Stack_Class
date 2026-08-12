let questions=[
    {
        question:"What does HTML stand for?",
        options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Markup Language","Home Tool Markup Language"],
        answer:0
    },
    {
        question:"Which language is used for styling?",
        options:["HTML","CSS","Java","Python"],
        answer:1
    },
    {
        question:"Which keyword declares a variable?",
        options:["var","int","string","define"],
        answer:0
    },
    {
        question:"Which method prints output?",
        options:["print()","console.log()","write()","output()"],
        answer:1
    }
];

let index=0;
let score=0;
let selected=-1;

function loadQuestion(){
    selected=-1;

    document.getElementById("question").textContent=questions[index].question;

    let options=document.getElementById("options");
    options.innerHTML="";

    questions[index].options.forEach((option,i)=>{
        let button=document.createElement("button");
        button.textContent=option;
        button.className="option";

        button.onclick=()=>{
            selected=i;
        };

        options.appendChild(button);
    });
}

function nextQuestion(){
    if(selected===questions[index].answer){
        score++;
    }

    index++;

    if(index<questions.length){
        loadQuestion();
    }else{
        document.getElementById("question").textContent="Quiz Completed";
        document.getElementById("options").innerHTML="";
        document.getElementById("result").textContent="Score: "+score+"/"+questions.length;
    }
}

loadQuestion();