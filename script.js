
window.onload = function () {
    document.getElementById("html-code").value = localStorage.getItem("htmlCode") || "";
    document.getElementById("css-code").value = localStorage.getItem("cssCode") || "";
    document.getElementById("javascript-code").value = localStorage.getItem("jsCode") || "";
    run(); 
};


function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = `<style>${document.getElementById("css-code").value}</style>`;
    let jsCode = `<script>${document.getElementById("javascript-code").value}<\/script>`;

    let iframe = document.getElementById("output");
    iframe.srcdoc = htmlCode + cssCode + jsCode;
    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", document.getElementById("css-code").value);
    localStorage.setItem("jsCode", document.getElementById("javascript-code").value);
}


document.getElementById("html-code").addEventListener("keyup", run);
document.getElementById("css-code").addEventListener("keyup", run);
document.getElementById("javascript-code").addEventListener("keyup", run);


document.getElementById("html-code").addEventListener("input", function(event) {
    let textarea = event.target;
    let cursorPos = textarea.selectionStart;
    let value = textarea.value;

    let match = value.substring(0, cursorPos).match(/<([a-zA-Z0-9]+)>$/);

    if (match) {
        let tagName = match[1]; 
        let closingTag = `</${tagName}>`;

        textarea.value = value.substring(0, cursorPos) + closingTag + value.substring(cursorPos);
        textarea.selectionStart = textarea.selectionEnd = cursorPos;
    }
});
