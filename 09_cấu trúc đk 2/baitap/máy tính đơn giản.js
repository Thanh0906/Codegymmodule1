let x = "";
function chuso(value) {
    x += value;
    document.getElementById("kq").innerText = x;
    document.getElementById("kq").value = x;
}
function xoa() {
    x = "";
    document.getElementById("kq").innerText = x ;
}
function ketqua() {
    x = eval(document.getElementById("kq").value);
    document.getElementById("kq").innerText = x ;
    x= "" ;
}