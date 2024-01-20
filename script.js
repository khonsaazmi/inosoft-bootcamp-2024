function insert(num){
    document.form.display.value = document.form.display.value+num
}

function clean(){
    document.form.display.value = "";
}

function back(){
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0,exp.length-1);
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

