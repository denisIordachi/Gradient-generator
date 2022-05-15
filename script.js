const colorpicker1 = document.getElementById('colorpicker');
const colorpicker2 = document.getElementById("colorpicker2")
const body = document.querySelector("body")

colorpicker1.addEventListener("input", generate);
colorpicker2.addEventListener("input", generate);


function generate() {

    const color1 = colorpicker1.value
    const color2 = colorpicker2.value
    body.style.background = `linear-gradient(${color1}, ${color2})`
    body.style.backgroundRepeat = "no-repeat"
}
generate()

