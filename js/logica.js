const aumentar = document.querySelector(".aumentar");
const restar = document.querySelector(".disminuir");
let valor = document.querySelector(".valor");
const calcularp = document.querySelector(".precio");
const mostrar = document.querySelector(".subtotal-precio");
const mostrar_dos = document.querySelector(".precio-totalmente");
let cantidad = 1;
let precioBase =  parseFloat(calcularp.textContent.replace("$","").trim());



 aumentar.addEventListener("click",function(){
    cantidad++;
    valor.textContent = cantidad;
    calcularPrecio();
 });

 restar.addEventListener("click",function(){
    if(cantidad > 1){
        cantidad--;
        valor.textContent= cantidad;
        calcularPrecio();
    }else{
        alert("¿estas seguro de eliminar este producto?");
    }
 });
  
 function calcularPrecio(){
    let resultado = precioBase*cantidad;
    calcularp.textContent = `$ ${resultado.toFixed(2)}`;

      mostrar.textContent = `$ ${resultado.toFixed(2)}`; 
    mostrar_dos.textContent = `$ ${resultado.toFixed(2)}`;

 }



   
