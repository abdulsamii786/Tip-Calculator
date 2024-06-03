let billInput = document.getElementById("bill");
let percentageInput = document.getElementById("percentage");

let error = document.getElementById("error");
let total = document.getElementById("tip");
let totalAmount = document.getElementById("total-amount");

function calculateBill() {
  let billValue = billInput.value;
  let percentageValue = percentageInput.value;

  if (billValue === "" || percentageValue === "") {
    error.innerText = "Invalid Input";
    total.innerText = "";
    totalAmount.innerText = "";
  } else {
    billValue = parseFloat(billValue);
    percentageValue = parseFloat(percentageValue);
    let totalTip = (billValue * percentageValue) / 100;
    total.innerText = `Tip Amount :${totalTip}`;
    totalAmount.innerText = `Total Bill :${totalTip + billValue}`;
    billInput.value = "";
    percentageInput.value = "";
    error.innerText = "";
  }
}
