function addData() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;

    if (name === "" || city === "") {
        alert("Please fill both fields");
        return;
    }

    let li = document.createElement("li");
    li.innerText = `Name: ${name} | City: ${city}`;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
}

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html lang="en"></html>')
    res.write('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Input to List</title></head>')
    res.write('<body><h1>Input to List</h1><input type="text" id="name" placeholder="Enter name"><input type="text" id="city" placeholder="Enter city"><button onclick="addData()">Add</button><ul id="list"></ul><script src="script.js"></script></body>')
    res.write('</html>')
    res.end();
}
)

const PORT=8000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
}