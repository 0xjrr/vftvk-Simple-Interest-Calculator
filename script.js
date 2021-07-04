//set const values for boxes
const rateValue = document.getElementById("rate_val")
const principalField = document.getElementById("principal")
const rateField = document.getElementById("rate")
const yearsField = document.getElementById("years")
const resultField = document.getElementById("result")

// init vars
let principal
let rate
let years
let interest
let year

const updateRate = () => {
    // Update rate in the span elem
    rate = rateField.value;
    rateValue.innerText = rate
}

// Compute value
function compute() {
    // get current value 
    principal = principalField.value;
    
    if (principal <= 0) {
        // alert if principal is less than zero and place cursor in principal elem 
        alert(`Enter a positive number geater than zero on the Principal Amount`)
        principalField.focus();
        principalField.select();
        resultField.innerText = `Enter a positive number`
    } else {
        // Display text with value on result span elem 
        rate = rateField.value;
        years = yearsField.value;
        year = new Date().getFullYear() + parseInt(years);
        interest = principal * years * rate / 100;
        resultString = `If you deposit <mark>${principal}</mark> <br>
        at an interest rate of <mark>${rate}% </mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${year}</mark>.`
        resultField.innerHTML = resultString;
    }

}
