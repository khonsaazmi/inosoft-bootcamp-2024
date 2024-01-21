function insert(num) {
    document.form.display.value = document.form.display.value + num
}

function back() {
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0, exp.length - 1);
}

function clean() {
    document.form.display.value = "";
}

function equal() {
    try {
        const display = document.form.display; // Assuming 'display' is the name of the input field
        let exp = display.value.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '1/100'); // Replace 'x' with '*' to handle multiplication
        if (exp) {
            display.value = eval(exp);
        }
    } catch (error) {
        display.value = "Error";
    }
}

var icon = document.getElementById("light-mode");

icon.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}

