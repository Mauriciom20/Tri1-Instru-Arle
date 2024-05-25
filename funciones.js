let a = 10
let b = 5

//sin parametros y sin retorno
function sumar(){
    console.log(a+b);
}
sumar();
//con parametros y sin retorno
function sumar2(){
    console.log(a + b);
}
sumar2();
//con parametros y retorno
function sumar3(){
    return a + b;
}
console.log(sumar3());
//sin parametros y con retorno
function sumar4(){
    return a + b;
}
console.log(sumar4());
