let total = 0;

function addExpense(){

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if(name == "" || amount == ""){
        alert("Enter all details");
        return;
    }

    let item = document.createElement("li");
    item.innerHTML = name + " - ₹" + amount;

    document.getElementById("list").appendChild(item);

    total = total + Number(amount);

    document.getElementById("total").innerHTML = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}