let txtpass=document.getElementById("txtpass");
let lblresult=document.getElementById("lblresult");

//hacemos referencia a cada elemento de la lista
let minreq=document.getElementById("minreq");
let mayu=document.getElementById("mayu");
let min=document.getElementById("min");
let num=document.getElementById("num");
let esp=document.getElementById("esp");
let espacios=document.getElementById("espacios");

txtpass.addEventListener("input", function(){
    let pass=txtpass.value;

    //regexp individuales
    let long = /.{8,}/.test(pass);
    let mayus=/[A-Z]/.test(pass);
    let minus=/[a-z]/.test(pass);
    let numero=/[0-9]/.test(pass);
    let caresp= /[!@#%$&^*/]/.test(pass);
    let espacio= /^\S+$/.test(pass);

    //se actualizan los requisitos que se estan cumpliendo y se le señalan al usuario
    RequisitosCheck(minreq,long);
    RequisitosCheck(mayu,mayus);
    RequisitosCheck(min,minus);
    RequisitosCheck(num,numero);
    RequisitosCheck(esp, caresp);
    RequisitosCheck(espacios,espacio);

    //se hace un arreglo que contabiliza cuantos de los requisitos se cumplen
    //por medio de .filter(Boolean) que verifica si la contraseña (pass) tuvo un resultado
    //positivo al cumplir el patrón requisito. esto se verifica con el método .test() 
    //predefinido para expresiones regulares
    let arreglocum=[long,mayus,minus,numero,caresp,espacio].filter(Boolean).length;

    //se mostrará un mensaje según el nivel de seguridad que se obtenga
    if (pass.length===0){
        lblresult.textContent='';
    } else if (arreglocum<=2){
        lblresult.textContent='Contraseña débil';
        lblresult.className='fw-bold text-danger';
    } else if(arreglocum<=4){
        lblresult.textContent='Contraseña media';
        lblresult.className='fw-bold text-warning';
    }else if (arreglocum ===5){
        lblresult.textContent='Contraseña buena';
        lblresult.className='fw-bold text-info';
    }else{
        lblresult.textContent='Contraseña segura';
        lblresult.className='fw-bold text-success';
    }

});

//funcion que añade o quita un elemento de clase para marcar si se cumple o no el requisito
function RequisitosCheck(docu, regex){
    if(regex) {
        docu.classList.add('text-success');
        docu.classList.remove('text-danger');
    }
    else{
        docu.classList.add('text-danger');
        docu.classList.remove('text-success');
    }
}

//evento button para ver el div oculto
const button=document.getElementById("btnmostrar").addEventListener("click", function(){
    const div=document.querySelector("#info");
    div.classList.remove('d-none');
});

button=document.getElementById("btnmostrar").addEventListener("dblclick", function(){
    const div1=document.querySelector("#info");
    div1.classList.add('d-none');
});