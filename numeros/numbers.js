function factorial(n) {
  let b = 1;
  let a = 1;
  while (b <= n) {
    a = a * b;
    b = b + 1;
  }
  return a;
}

//tareas
// completar las funciones esPrimo y findPrimos
// una vez que esten andando , que el usuario pueda especificar en un input el valor hasta el cual hallar los primos y los muestre en pantalla

//recibe un entero
// retorna true si el entero e sprimo y false si no lo e s
function esPrimo(numero) {
  let respuesta = true;
  for (let c = 2; c < numero; c = c + 1) {
    if (numero % c == 0) {
      respuesta = false;
    }
  }
  return respuesta;
}

// recibe un número
// escribe en la consola todos los primos hasta llegar al numeor pasado
// no retorna nada
function findPrimos(numero) {
  let txt = document.getElementById("primos");
  let a = 1;
  while (a < numero) {
    if (esPrimo(a)) {
      alert(a + " es primo ");
      txt.innerHTML = txt.innerHTML + ", " + a;
    }

    a = a + 1;
  }
  return true;
}
function inp() {
  let y = document.getElementById("l").value;
  findPrimos(y);
  ///alert( (factorial(4)))
}

function divisores(n) {
  let a = [];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      a.push(i);
    }
  }

  return a;
}
function numeroPerfecto(n) {
  let a = divisores(n);
  let sdd = 0;
  for (let i = 0; i < a.length; i++) sdd = sdd + a[i];

  if (sdd == n) {
    return true;
  }
  if (sdd !== n) {
    return false;
  }
}

let num = 6;
if (esPrimo(num) == true) {
  alert(num + " es primo");
} else {
  alert(num + "no es primo");
}

if (numeroPerfecto(num) == true) {
  alert("es perfecto");
}

for (i = 1; i < 1000; i++)
  if (numeroPerfecto(i)) console.log(i + " es perfecto");

console.log(divisores(28));
