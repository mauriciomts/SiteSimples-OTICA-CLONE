/* Apresentação Modal*/
setTimeout(ApresentarModal, 5000);
function ApresentarModal(){
    var modal = document.querySelector(".modal");
        
    if(modal != null){
        document.querySelector(".modal").style.display = "block";
    
        document.querySelector(".modal a")
            .addEventListener("click", function(){
        document.querySelector(".modal").style.display = "none";
        return false;        
         });        
    }

}
/* Validação Modal Pagina Inicial*/
if(document.forms["modal_form"] != undefined){
   //Validação
   var form = document.forms["modal_form"];
   form.addEventListener("submit", ValidarFormModal);
   form.email.addEventListener("keypress", function(){
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display = "none";
   });
       
   }
function ValidarFormModal(evt){
    var form = document.forms["modal_form"];
    
    var inputEmail = form.email;
    var valorEmail = form.email.value;
    
    var posicaoArroba = valorEmail.indexOf("@");
    
    if(!ValidarEmail(valorEmail)){
       
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display = "block";        
        evt.preventDefault();
    }
    
}
/* Validação Fale Conosco */
if( document.forms["form_contato"] != undefined ){
    
    var form = document.forms["form_contato"];
    
    form.addEventListener("submit", function(evt){
        
        var formValido = true;
        
        if(!NaoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.telefone.value)){
            form.telefone.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.mensagem.value)){
            form.mensagem.className = "nao_valido";
            formValido = false;
        }
        
        if(!ValidarEmail(form.email.value)){
            form.email.className = "nao_valido";
            formValido = false;
        }
        
        
        if(!formValido){
            evt.preventDefault();
        }
        
    });
    
    var inputs = document.querySelectorAll("form[name=form_contato] input[type=text]");
    for(var i=0; i<inputs.length;i++){
        inputs[i].addEventListener("keypress", function(){
       this.className = "";
    });
        
    }
    var textarea = document.querySelector("form[name=form_contato] textarea");
    textarea.addEventListener("keyup", function(){
       this.className = "";
       document.querySelector(".texto").innerHTML = "Caractere(s): " + this.value.length;
    });
        
}
    

/* Funções */
function ValidarEmail(valorEmail){
    if(
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba
    ){
        return true;
    }else{
        return false;
    }
}
function NaoVazio(texto){
    if(texto.trim().length > 0){
        return true;
    }else{
        return false;
    }
}