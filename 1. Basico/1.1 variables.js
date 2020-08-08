/***
 * Global varibales
*/
const btn1 = document.getElementById('btn1');
const paragraph = document.querySelector('.results');

function all(){
    let num = ''
    let contnum = 0
    while(contnum < 1){
        let num = prompt('ingresa un numero entero positivo');
        if(isNaN(num)|| typeof(num)===null){
            alert(`lo ingresado no es un numero`);
        }
        else{
            contnum++;
            a = Math.abs(parseInt(num));
        }
    }
    contnum = 0;
    while(contnum < 1){
        let num = prompt('ingresa un numero entero positivo');
        if(isNaN(num)|| typeof(num)===null){
            alert(`lo ingresado no es un numero`);
        }
        else{
            contnum++;
            b = Math.abs(parseInt(num));
        }
    }
    paragraph.innerHTML = `Resultados son: <p>${mayor(a,b)}</p> <p>la suma de los números es ${suma(a,b)}</p> <p>La resta de los números ${resta(a,b)}</p> <p>${par(a)}</p> <p>${impar(b)}</p> <p>la potencia de ${b} elevado a la ${a} es ${pow(a,b)}</p> <p>la raiz ${b} de ${a} es ${sqrt(a,b)}</p>` //siempre hay que igualarlo
    console.log(paragraph);
    console.log(a);
    console.log(b);
    console.log(mayor(a,b));
    console.log(suma(a,b));
    console.log(resta(a,b));
    console.log(par(a));
    console.log(impar(b));
    console.log(`la potencia de ${b} elevado a la ${a} es ${pow(a,b)}`);
    console.log(`la raiz ${b} de ${a} es ${sqrt(a,b)}`);
}

function mayor(a,b){
    let mayor = '';
    if(a === b){
        mayor = `Los números son iguales`
    }else if (a > b){
        mayor = `El mayor numero es el primero ingresado es ${a}`
    } else {
        mayor = `El mayor numero es el segundo ingresado es ${b}`
    }
    return mayor
}
function suma(a,b){
    let suma = a + b;
    return suma
}
function resta(a,b){
    let resta = a - b;
    return resta
}

function par(a){
    let espar = ''
  if (a % 2 === 0){
      espar = `primer numero ingresado a = ${a}, es par`
    }else{
        espar = `primer numero ingresado a = ${a}, es par`
    }
    return espar
}

function impar(b){
    let esimpar = ''
    if (b % 2 !== 0){
        esimpar = `el segundo numero ingresado b= ${b}, es impar` 
    }
    return esimpar
}
function pow(a,b){
    let potencia = ''
    potencia = Math.pow(b,a);
    return potencia
}
function sqrt(a,b){
    let raiz = ''
    raiz = a**(1/b);
    return raiz
}
function text(){

}


/**
 * listener
*/
btn1.addEventListener('click', all)
