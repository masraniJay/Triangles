const inputs = document.querySelectorAll(".input-side");
const calcButton = document.querySelector(".btn-check");
const result = document.querySelector(".result");

calcButton.addEventListener("click", function calcHypotenuse() {
    if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0) {
        const sum = sumOfSquares(inputs[0].value, inputs[1].value);
        const hypotenuse = Math.sqrt(sum);
        result.innerText = "The length of Hypotenuse is " + hypotenuse.toFixed(2);
    } else {
        result.innerText = "Values must be greater than 0"
    }
});

function sumOfSquares() {
    const sum = Number(inputs[0].value) * Number(inputs[0].value) + Number(inputs[1].value) * Number(inputs[1].value);
    return sum;
}