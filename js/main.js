function proses(op) {
    var nilai1 = parseInt(document.getElementById("nilai1").value);
    var nilai2 = parseInt(document.getElementById("nilai2").value);
    var hasil = 0;

    if (op == '+') {
        hasil = nilai1 + nilai2;
    } else if (op == '-') {
        hasil = nilai1 - nilai2;
    } else if (op == '*') {
        hasil = nilai1 * nilai2;
    } else if (op == '/') {
        hasil = nilai1 / nilai2;
    }

    document.getElementById("hasil").innerHTML = hasil;
}