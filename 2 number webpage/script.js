
function numberGame1() {

    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2").value;

    if (number1 > number2) {
        document.getElementById("result").innerHTML = `${number1} is greater than ${number2}`;
    } else if (number1 < number2) {
        document.getElementById("result").innerHTML = `${number2} is greater than ${number1}`;
    } else {
        document.getElementById("result").innerHTML = `its a tie at ${number1}`;
    }





};

/*Practice*/


// function numberGame() {

//      let number1 = document.getElementById("n1").value;
//      let number2 = document.getElementById("n2").value;


//     if (typeof number1 !== 'number' || typeof number2 !== 'number') {
//         return;
//     }

//     if (number1 > number2) {
//         console.log(`${number1} is greater than ${number2}`);
//     } else if (number2 > number1) {
//         console.log(`${number2} is greater than ${number1}`);
//     } else {
//         console.log(`its a tie at ${number1}`);
//     }


//     return


//     // let comparison = return.numberGame()
//     // y.innerHTML
// }


