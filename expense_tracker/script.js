let total = 0;

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("expenseList");

    let li = document.createElement("li");

    li.innerHTML = name + "<span>₹" + amount + "</span>";

    list.appendChild(li);

    total = total + Number(amount);

    document.getElementById("total").innerText = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}