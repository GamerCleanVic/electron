const input = document.getElementById('num1Tabuada');

input.addEventListener('keypress', function(event) {
    if (this.value.length >= 12) {
      event.preventDefault();
      alert("Nº permitido de caracteres = 12");
    }
});

// Obtém a referência do formulário
var form = document.getElementById("form1");

// Adiciona um manipulador de evento de envio ao formulário
form.addEventListener("submit", function(event) {
  // Previne o envio do formulário
  event.preventDefault();

  // Obtém a referência da caixa de texto
  var input = document.getElementById("num1Tabuada");

  // Obtém o valor da caixa de texto
  var value = input.value;


  function myFunction (){    
    const div1 = document.getElementById('root');
    var a = parseInt(value);    
    document.getElementById("root").innerHTML = `<h1 class="titleResult">AS 4 OPERAÇÕES BÁSICAS</h1>
        <p class="txt1">Código JS por ChatGPT Dec 15 Version, já o (For), HTML, CSS e innerAdjacent editados por mim.</p>
    `;
        if(value == ''){
            document.write(`<a class="stlLinks" href="index.html"><div class="btnAfter">CLIQUE AQUI E DIGITE ALGO</div></a>`);
        }
        else if(value == 0){
            document.write(`<a class="stlLinks" href="index.html"><div class="btnAfter">CLIQUE AQUI E DIGITE 1 Nº DIFERENTE DE ZERO</div></a>`);
        }
        else if(value == '¨'){
            document.write(`<a class="stlLinks" href="index.html"><div class="btnAfter">CLIQUE AQUI E DIGITE 1 Nº DIFERENTE DE ZERO</div></a>`);
        }
        else if(value == 'e'){
            document.write(`<a class="stlLinks" href="index.html"><div class="btnAfter">CLIQUE AQUI E DIGITE 1 Nº DIFERENTE DE ZERO</div></a>`);
        }
        else{
            for(let i = 10; i >= 1; i--){
                let divid = parseFloat(a / i);
                div1.insertAdjacentHTML("afterend", `<div class="boxResult"><p class="result1">${a} / ${i} = ${divid.toFixed(2)}</p></div>`);                
            }            
            div1.insertAdjacentHTML("afterend", `<h1>DIVISÃO - 2 CASAS PÓS VÍRGULA</h1>`);
            div1.insertAdjacentHTML("afterend", `<br /><br />`); 
            for(let i = 10; i >= 1; i--){
                let divid = parseFloat(a / i);
                div1.insertAdjacentHTML("afterend", `<div class="boxResult"><p class="result1">${a} / ${i} = ${divid}</p></div>`);                
            }            
            div1.insertAdjacentHTML("afterend", `<h1>DIVISÃO - RESULTADO COMPLETO</h1>`);
            div1.insertAdjacentHTML("afterend", `<br /><br />`);  
            for(let i = 10; i >= 1; i--){
                let multip = parseInt(a * i);
                div1.insertAdjacentHTML("afterend", `<div class="boxResult"><p class="result1">${a} x ${i} = ${multip}</p></div>`);                
            }            
            div1.insertAdjacentHTML("afterend", `<h1>MULTIPLICAÇÃO</h1>`);
            div1.insertAdjacentHTML("afterend", `<br /><br />`);  
            for(let i = 10; i >= 1; i--){
                let subt = parseInt(a - i);
                div1.insertAdjacentHTML("afterend", `<div class="boxResult"><p class="result1">${a} - ${i} = ${subt}</p></div>`);                
            }            
            div1.insertAdjacentHTML("afterend", `<h1>SUBTRAÇÃO</h1>`);
            div1.insertAdjacentHTML("afterend", `<br /><br />`);     
            for(let i = 10; i >= 1; i--){
                let somar = parseInt(a + i);
                div1.insertAdjacentHTML("afterend", `<div class="boxResult"><p class="result1">${a} + ${i} = ${somar}</p></div>`);                
            }
            div1.insertAdjacentHTML("afterend", `<h1>SOMA</h1>`);
                    
            let imprimirNoForm = `<a href="index.html" class="stlLinks"><div class="btnAfter">TENTAR COM OUTRO Nº</div></a>`;
            document.getElementById("form1").innerHTML = (imprimirNoForm);
        }    
}
myFunction();
});