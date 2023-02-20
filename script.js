function startDrawing(e) {
    e.preventDefault();
    document.querySelector("#diamond").innerHTML = "";
    let rows = parseInt(document.getElementById("rowNum").value);
    draw(rows);
}

function draw(rows, row = 0) {
    let paintWidth = (row < rows / 2) ? (1 + row * 2) : (1 + (rows - 1 - row) * 2);
    let spaces = Math.floor((rows - paintWidth) / 2);
    drawCell(spaces, paintWidth);
    if (row < rows - 1) draw(rows, row + 1);
}

function drawCell(spaces, paint) {
    const diamond = document.querySelector("#diamond");
    if (spaces == 0 && paint == 0) {
        diamond.innerHTML += "<br>";
        return;
    }
    if (spaces > 0) {
        diamond.innerHTML += " ";
        drawCell(spaces - 1, paint);
    } else {
        diamond.innerHTML += "*";
        drawCell(spaces, paint - 1);
    }
}