

function convert() {
    let amuont = parseInt(document.getElementById("amuont").value);
    let from = (document.getElementById("from").value);
    let to = (document.getElementById("to").value);
    let result;
    if (from ==="VND" && to === "USD") {
        result =amuont/23.000;
    } else if (from === "USD" && to==="VND"){
        result =amuont*23.000;
    } else{result=amuont
    }
    document.getElementById("result").innerText= result;
}



