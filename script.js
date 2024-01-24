const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const textLeft = document.getElementById('text-left');
const textCenter = document.getElementById('text-center');
const textRight = document.getElementById('text-right');
const textJustify = document.getElementById('text-justify');
const textArea = document.getElementById('text-area');

bold.addEventListener('click', function () {
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal'
    }
    else {
        textArea.style.fontWeight = 'bold'
    }
})
italic.addEventListener('click', function () {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal'
    }
    else {
        textArea.style.fontStyle = 'italic'
    }
})
underline.addEventListener('click', function () {
    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none'
    }
    else {
        textArea.style.textDecoration = 'underline'
    }
})
textLeft.addEventListener('click', function () {
    textArea.style.textAlign = 'start'
})
textCenter.addEventListener('click', function () {
    if (textArea.style.textAlign === 'center') {
        textArea.style.textAlign = 'start'
    }
    else {
        textArea.style.textAlign = 'center'
    }
})
textJustify.addEventListener('click', function () {
    if (textArea.style.textAlign === 'justify') {
        textArea.style.textAlign = 'start'
    }
    else {
        textArea.style.textAlign = 'justify'
    }
})
textRight.addEventListener('click', function () {
    if (textArea.style.textAlign === 'end') {
        textArea.style.textAlign = 'start'
    }
    else {
        textArea.style.textAlign = 'end'
    }
})
function setColor(value) {
    textArea.style.color = value;
}
function fontSize(value) {
    textArea.style.fontSize = value + "px";
}