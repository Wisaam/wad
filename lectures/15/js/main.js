var account_info = {
	uname: "Wisaam Arif",
	balance: 0,
	IBAN: "PKN1234567890",
	currency: "PKR"
};

var months = ["January", "February", "March", "April", "May", "June", "July" , "August","September","October","November","December"];


function displayPageInfo()   //displays the information on the page
{
	document.getElementById("title").innerText = account_info.uname;
	document.getElementById("balance").innerText = account_info.balance;
	document.getElementById("IBAN").innerText = account_info.IBAN;
	document.getElementById("currency").innerText = account_info.currency;
}


function depositAmount(event)
{
	document.getElementById("deposit-msg").style.display = "none";
	var k = event.keyCode;
	if(k != 13)
		return;

	var data = document.getElementById("deposit").value;

	if (isNaN(data))
	{
		document.getElementById("deposit-msg").innerText = "Enter a Valid Amount";
		document.getElementById("deposit-msg").style.display = "block";
		return;
	}

	var amount = parseInt(data);
	if (amount <= 0)
		return;
	account_info.balance += amount;
	var d = new Date();
	var transaction = {
		amnt: amount,
		month: months[d.getMonth()],
		day: d.getDate(),
		year: d.getFullYear(),
		hrs: d.getHours(),
		min: d.getMinutes(),
		sec: d.getSeconds(),
		atype: "Credit"
	};

	addTransaction(transaction);
	displayPageInfo();
}

function withDraw(event)
{
	document.getElementById("withdraw-msg").style.display = "none";
	var k = event.keyCode;
	if(k != 13)
		return;

	var data = document.getElementById("withdraw").value;

	if (isNaN(data))
	{
		document.getElementById("withdraw-msg").innerText = "Enter a Valid Amount";
		document.getElementById("withdraw-msg").style.display = "block";
		return;
	}

	var amount = parseInt(data);
	if (amount <= 0)
		return;

	if (amount > account_info.balance)
	{
		document.getElementById("withdraw-msg").innerText = "Not enough balance";
		document.getElementById("withdraw-msg").style.display = "block";
		return;
	}

	account_info.balance -= amount;
	var d = new Date();
	var transaction = {
		amnt: amount,
		month: months[d.getMonth()],
		day: d.getDate(),
		year: d.getFullYear(),
		hrs: d.getHours(),
		min: d.getMinutes(),
		sec: d.getSeconds(),
		atype: "Debit"
	};

	addTransaction(transaction);
	displayPageInfo();
}

function addTransaction(tr)
{
	var t = document.getElementById("transaction-table");
	t.innerHTML += "<tr> <td>"+tr.month+" "+tr.day+", "+tr.year+" "+tr.hrs+":"+tr.min+":"+tr.sec+"</td> <td>"+tr.atype+"</td> <td>"+tr.amnt+"</td></tr>";
}

document.getElementById("deposit-msg").style.display = "none";
displayPageInfo();