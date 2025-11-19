window.addEventListener("load",()=>{
    
    var cuadro1 = document.getElementById("cuadro1");
    cuadro1.addEventListener("dragstart", arrastrando)
    cuadro1.addEventListener("dragend", ()=>cuadro1.innerHTML="")

    var cuadro2 = document.getElementById("cuadro2");

    cuadro2.addEventListener("drop",soltar);
    cuadro2.addEventListener("dragenter",entrar);
    cuadro2.addEventListener("dragleave",salir);
    cuadro2.addEventListener("dragover",reset)

    function entrar(event) {
        cuadro2.style.backgroundColor="red";
    }

    function salir(event) {
        cuadro2.style.backgroundColor="green";
    }

    function soltar(event) {
        cuadro1.style.display="none";
        cuadro2.style.backgroundColor="orange";
    }

    function reset(event){
        event.preventDefault();
    }

    function arrastrando(ev) {
        cuadro1.innerHTML="Arrastrando";
    }

})