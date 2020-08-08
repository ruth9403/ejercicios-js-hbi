/***
 * Global varibales
*/
const form = document.querySelector('.main-card-form');
const paragraph = document.querySelector('.results');
input1 = document.getElementById('main-card-form-inp1')

function all2(a,b){
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

    paragraph.innerHTML = `Resultados son: <p>${mayor(a,b)}</p> <p>la suma de los números es ${suma(a,b)}</p> <p>La resta de ${b} - ${a} es ${resta(a,b)}</p> <p>${par(a)}</p> <p>${impar(b)}</p> <p>la potencia de ${b} elevado a la ${a} es ${pow(a,b)}</p> <p>la raiz ${b} de ${a} es ${sqrt(a,b)}</p>` //siempre hay que igualarlo
}

function mayor(a,b){
    let mayor = '';
    if(a === b){
        mayor = `Los números son iguales`
    }else if (a > b){
        mayor = `El mayor numero ingresado es el primero, es decir (${a})`
    } else {
        mayor = `El mayor numero ingresado es el segundo, es (${b})`
    }
    return mayor
}
function suma(a,b){
    let suma = a + b;
    return suma
}
function resta(a,b){
    let resta = b - a;
    return resta
}

function par(a){
    let espar = ''
  if (a % 2 === 0){
      espar = `Si a = ${a}, es par`
    }else{
        espar = `No, a = ${a}, no es par`
    }
    return espar
}

function impar(b){
    let esimpar = ''
    if (b % 2 !== 0){
        esimpar = `Si, b= ${b}, es impar` 
    }else{
        esimpar = `No, b= ${b}, no es impar`
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

/**
 * listener
*/
//Ojo, eventos de submit se deben colocar sobre el formulario siempre!
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form)//formData coge todos los names (del input, del select, todo lo que tenga name etc), y se crea un objeto con ellos.

    const a = parseInt(data.get('a'));//el get es un método que funciona en la mayoria de los lenguajes, obtiene atributos de los objetos. (como las clases usan los getters)
    const b = parseInt(data.get('b'));
    console.log('si funciono');
    all2(a,b)
})
