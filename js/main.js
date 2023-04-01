const firstRadioEl = document.getElementById("rad-1");
const secondRadioEl = document.getElementById("rad-2");
const thirdRadioEl = document.getElementById("rad-3");
const fourthRadioEl = document.getElementById("rad-4");

const amtRemittedEl = document.getElementById("amt-rem");
const nameOfBankEl = document.getElementById("name-of-bank");
const dateOfRemittenceEl = document.getElementById("date-of-rem");
const nameOfBranchEl = document.getElementById("name-0f-branch");

const checkBox1El = document.getElementById("cb-1");
const checkBox2El = document.getElementById("cb-2");
const checkBox3El = document.getElementById("cb-3");
const checkBox4El = document.getElementById("cb-4");

function check() {
    //if first radio checked then enable the input's
  if (firstRadioEl.checked) {
    amtRemittedEl.disabled = false;
    nameOfBankEl.disabled = false;
    dateOfRemittenceEl.disabled = false;
    nameOfBranchEl.disabled = false;
  }

  //if first radio enabled & all input filled and anyone checkbox checked then add the active class to both the buttons
  if (
     firstRadioEl.checked && amtRemittedEl.value && nameOfBankEl.value && dateOfRemittenceEl.value && nameOfBranchEl.value &&
    (checkBox1El.checked || checkBox2El.checked || checkBox3El.checked |checkBox4El.checked)
  ) {
    document.querySelector("#submit").classList.add("cta-active");
    document.querySelector("#cancel").classList.add("cta-active");
  } 
  
  //if any of the other radio btn checked then add the active class to btn & reset the input values & disable the input fields 
  else if (
    secondRadioEl.checked ||
    thirdRadioEl.checked ||
    fourthRadioEl.checked
  ) {

    //input value reset
    amtRemittedEl.value = "";
    nameOfBankEl.value = "";
    dateOfRemittenceEl.value = "";
    nameOfBranchEl.value = "";

    //input disable
    amtRemittedEl.disabled = true;
    nameOfBankEl.disabled = true;
    dateOfRemittenceEl.disabled = true;
    nameOfBranchEl.disabled = true;

    //checkbox uncheck
    checkBox1El.checked = false;
    checkBox2El.checked = false;
    checkBox3El.checked = false;
    checkBox4El.checked = false;

    document.querySelector("#submit").classList.add("cta-active");
    document.querySelector("#cancel").classList.add("cta-active");
  } 
  
  //if none above condition satisfies then remove the active class
  else {
    document.querySelector("#submit").classList.remove("cta-active");
    document.querySelector("#cancel").classList.remove("cta-active");
  }
}
