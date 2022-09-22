let botaoCalcular = document.getElementById(btn_calcular);
function calcular(){
   var mq = document.getElementById("mq").value;//*260;
   var pc = document.getElementById("pc").value;//*1800;
   let resultado = document.getElementById("resultado");
   if(mq !== "" && pc !==""){
       let preco1 = (mq*260);
       let preco2 = (pc*1800);
       let soma = preco1+preco2;
       let precoj = (soma*6)/100
       let diferenca = soma-precoj;
       //let mensagem = "";

       resultado.textContent = "O preço a ser pago pelo metro quadrado é de R$ " + preco1 + " e da parte da construção é de R$ " + preco2 + ", dando um total de R$ " + soma + ". A parte que ficara com João é de R$ " + precoj + ". Dando uma diferença de R$ " + diferenca;
   }else{
       resultado.textContent = "Por favor preencha todos os campos!!!"
   }
}
btn_calcular.addEventListener('click', calcular);