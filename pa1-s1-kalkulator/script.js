function insert(num) { // Function to insert numbers on the display
    document.form.display.value = document.form.display.value + num
}

function back() { // Function to delete one character of the display
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0, exp.length - 1);
}

function clean() { // Function to clear the display
    document.form.display.value = "";
}

function equal() { // Function to evaluate the expression
    try {
        const display = document.form.display; // Assuming 'display' is the name of the input field
        // Replace 'x' with '*' to handle multiplication
        // Replace '÷' with '/' to handle division
        // Replace '%' with '1/100' to handle percentage
        let exp = display.value.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '1/100'); 
        if (exp) {
            display.value = eval(exp);
        }
    // Catch any errors
    } catch (error) {
        display.value = "Error";
    }
}

// SWITCH MODE
var icon = document.getElementById("light-mode");

icon.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}

