let total = 0;

function addExpense(){

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if(name==="" || amount===""){
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${name}</span>
        <span>₹${amount}</span>
    `;

    document.getElementById("expenseList").appendChild(li);

    total += Number(amount);
    document.getElementById("total").innerText = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}