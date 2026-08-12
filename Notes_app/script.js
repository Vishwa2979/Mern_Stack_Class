let notes=JSON.parse(localStorage.getItem("notes"))||[];

function save(){
    localStorage.setItem("notes",JSON.stringify(notes));
}

function addNote(){
    let input=document.getElementById("note");
    let text=input.value.trim();

    if(text==="")return;

    notes.push(text);
    input.value="";

    save();
    displayNotes();
}

function displayNotes(){
    let container=document.getElementById("notes");
    container.innerHTML="";

    notes.forEach((note,index)=>{
        let div=document.createElement("div");
        div.className="note";

        div.innerHTML=`
            <p>${note}</p>
            <button class="delete" onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);
    });
}

function deleteNote(index){
    notes.splice(index,1);
    save();
    displayNotes();
}

displayNotes();