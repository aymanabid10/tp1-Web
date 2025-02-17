const text = document.getElementById("text");
const colorPicker = document.getElementById("colorPicker");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");

colorPicker.addEventListener("input", () => {
    text.style.color = colorPicker.value;
});

fontSize.addEventListener("input", () => {
    text.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("change", () => {
    text.style.fontFamily = fontFamily.value;
});