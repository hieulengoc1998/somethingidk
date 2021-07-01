let input = document.getElementById("textInput")
let output = document.getElementById("textOutput")

input.addEventListener("input", () => {
    console.log(input.value)
    let outputValue = document.createElement('p')
    outputValue.innerHTML = input.value;
    output.appendChild(outputValue)
})
