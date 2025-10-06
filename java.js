function cekdata() {
    const namainput = document.getElementById("nama");
    const umurinput = document.getElementById("umur");

    const nama = namainput.value.trim();
    const umur = umurinput.value.trim();

    if (nama === "" || umur === "") {
        alert("Jangan Di kosongin!");
        if (nama === "") namainput.focus();
        else umurinput.focus();
    } else {
        alert("Nama " + nama + " umur " + umur + " tahun");
    }
}
