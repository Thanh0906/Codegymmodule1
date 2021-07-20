let a =parseInt(document.getElementById("inputA").value);
let b =parseInt(document.getElementById("inputB").value);
let c;
function add(value) {
    if(value === '+'){
        c = a + b;
        document.getElementById("result").innerText=c;
    } else if (value === '-'){
        c = a - b;
        document.getElementById("result").innerText=c;
    } else if (value === '*') {
        c = a * b;
        document.getElementById("result").innerText=c;
    }else if ( value === '/') {
        c = a/b;
        document.getElementById("result").innerText=c;
    }

}