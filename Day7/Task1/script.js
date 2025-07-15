function outputy() {
    var str = document.getElementById('strInput').value;
    var letter = document.getElementById('letterInput').value;
    var output = document.getElementById('out');

    var out = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            out.push(i);
        }
    }

    output.value = `[${out.join(", ")}]`;
    console.log(output.value);
}
