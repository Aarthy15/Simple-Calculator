
function display(value) {
    var outputScreen = document.getElementById('output-screen');
    if (outputScreen !== null) {
        outputScreen.value += value;
    } else {
        console.error("Output screen element not found");
    }
}

function Clear() {
    var outputScreen = document.getElementById('output-screen');
    if (outputScreen !== null) {
        outputScreen.value = "";
    } else {
        console.error("Output screen element not found");
    }
}

function del() {
    var outputScreen = document.getElementById('output-screen');
    if (outputScreen !== null) {
        outputScreen.value = outputScreen.value.slice(0, -1);
    } else {
        console.error("Output screen element not found");
    }
}

function Equal() {
    var outputScreen = document.getElementById('output-screen');
    if (outputScreen !== null) {
        try {
            outputScreen.value = eval(outputScreen.value);
        } catch (error) {
            alert("Invalid Expreesion");
        }
    } else {
        console.error("Output screen element not found");
    }
}