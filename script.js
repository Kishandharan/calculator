let submit_btn = document.getElementById("submit-btn");
submit_btn.onclick = function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let oper = document.getElementById("oper").value;
    let out = document.getElementById("out");
    if(oper == "add"){
        out.innerText = `${num1} + ${num2} = ${num1+num2}`;
    }

    if(oper == "subtract"){
        out.innerText = `${num1} - ${num2} = ${num1-num2}`;
    }

    if(oper == "multiply"){
        out.innerText = `${num1} * ${num2} = ${num1*num2}`;
    }

    if(oper == "divide"){
        out.innerText = `${num1} / ${num2} = ${num1/num2}`;
    }
}
