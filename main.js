//Funciones Declaradas

     //functionDeclaration
/*function sumaDeclarada() {
    const resultado = 3 + 3;
    alert(resultado)
    return resultado;
};*/

//El ; va siempre que cierro una declaración y/o un bloque de codigo

//sumaDeclarada();

      //Funcion expresada
      //FunctionExpression

/*const sumaDlarada = function () {
    const resultado = 3 + 3;
    alert(resultado);
    return resultado;
};*/

     //Invocación de la función

//sumaDclarada();

     //Arrow Functions
    //Funciones Flecha
 
/*const sumaDeclarada = () =>{
   const resultado = 5 + 5;
   alert(resultado);
   return resultado;  
};*/

    // Retorno implicito
//const sumaDeclarada = () => 7 + 7;

//Invocación de la función
//alert(sumaDeclarada());

/*const num1 = parseInt(prompt (`Ingresa el primer número`));
const num2 = parseInt(prompt (`Ingresa el primer número`));

//funcion arrow con parametros
const sumaDosNumeros = (num1, num2) => {
 const resultado = num1 + num2;
 return resultado;
}

// invocación con argumentos
alert(`El total de la suma es: ${sumaDosNumeros(num1, num2)}`);
*/
 
             //Ejercicio 1

 /*const sumar = (num1, num2)=> {
     //const result = num1 + num2;
     //return result;
     return num1 + num2;
 }           

 // const sumar = (num1 + num2) => num1 + num2;

 console.log (sumar(2,3));
 console.log (sumar (1.2,3.4));
 console.log (sumar (3,-5));
 */

           //Ejercicio 2 Restar
/*
 const restar = (a, b)=> {
   return a - b;
}           
       
console.log (restar(2,3));
console.log (restar (10,5.5));
console.log (restar (3,5));
*/
         //Ejercicio 3 Multiplicar

         /*
 const multiplicar = (a, b)=> {
   return a * b;
}           
       
console.log (multiplicar(2,3));
console.log (multiplicar(4,0.5));

*/

       //Ejercicio 4 Dividir

         /*
 const dividir = (a, b)=> {
   return a / b;
}           
       
console.log (dividir (12,3));
console.log (dividir (8,4));
console.log (dividir (30,6));
*/

          //Ejercicio 5 Es  Par

/*const esPar = (num) =>{
  if(num % 2 === 0){
      return true;
  }
  else{
      return false;
  }
}
console.log(esPar(5));*/
 
///////////Ejercicio 6 Es impar
/*
const esImpar = (num) =>{
    if(num % 2 === 0){
        return false;
    }
    else{
        return true;
    }
  }
  console.log(esImpar(2));
  console.log(esImpar(3));
*/
          // Ejercicio 3 Multiplicación

/*const multiplicar = (a, b) => {
    //return a*b
    const resultado = a * b;
    return resultado; 
};

//Retorno implícito
//const multiplicar = (a, b) => a * b;

console.log (multiplicar(2, 3));
console.log (multiplicar (4, 0.5));
*/
 
          //Ejercicio 4 Division
/*
const dividir = (a, b) => {
    const result = a / b;
};

const resultado = dividir(10, 2);
const resultado2 = dividir(8, 4);

console.log(resultado2);
*/

          //Ejercicio Calcular Puntaje
/*

const calcularPuntaje = (facil, normal, dificil) => {
    const ejercicio1 = facil * 3; 
    const ejercicio2 = normal * 6;
    const ejercicio3 = dificil * 8;
    return ejercicio1 + ejercici02 + ejercicio3;
}

const resultado = calcularPuntaje (5, 1, 2);

console.log(resultado);}
*/

            // Ejercicio 6 Calcular área del triangulo
 /*           
 const calcularAreaTriangulo = (base, altura) => {
 return base * altura / 2;
};
              
console.log(calcularAreaTriangulo(3,4));
console.log(calcularAreaTriangulo(5,6));
*/

              // Ejercicio 7 Gritar
/*const gritar = (String) => {
    return `¡${String}!`
};

console.log(gritar("hola"));
console.log(gritar("aaaa"));

////////// Ejemplo con un prompt:////

const entrada = prompt('Ingresa un texto cualquiera');

const gritar = (texto) => `¡${texto}!`;

alert(gritar(entrada));
*/

            //Ejercicio 8 Obtener nombre completo

//const obtenerNombreCompleto = (nombre, apellido) => nombre + " " + apellido;

  //Retorno implícito
/*
const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;


alert (obtenerNombreCompleto("Edimar", "Parra"));
*/

            //Ejercicio 9 Saludar

//const usuario = prompt('Ingresa el nombre que quieras que salude');

// const saludar = (texto) => `Hola ${texto}, un gusto conocerte!`;
            
// console.log(saludar(usuario));

            //Ejercicio 10: Saludar gritando (nombre y apelido)
/*
const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

const saludar = (texto) => `Hola ${texto}, un gusto conocerte!`;

const gritar = (texto) => `¡${texto}!`; 

    //Esto es una callback, llamamos una función dentro de otra función.

const saludarGritando = () =>{
    return gritar(saludar(obtenerNombreCompleto("Edimar","Morles")));
}
console.log(saludarGritando (obtenerNombreCompleto, saludar, gritar));
*/

             //Ejercicio 11. Obtener Datos de ciudad
/*
const obtenerDatosDeCiudad = (nombre, poblacion, pais) => `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}` ;


alert (obtenerDatosDeCiudad( "Mérida", 45.582000, "Venezuela"));
*/

            //Ejercicio 12. Convertidor de horas a segundos
/*
const convertirHorasEnSegundos = (horas) => {

    return horas*3600;
}
const resultado = convertirHorasEnSegundos (1);
const resultado2 = convertirHorasEnSegundos (3);
const resultado3 = convertirHorasEnSegundos (4.5);

console.log (resultado);
console.log (resultado2);
console.log (resultado3) ;
*/

          //Ejercicio 13.Perimetro Rectangulo
/*
const calcularPerimetroRectangulo = (alto, ancho) => {

    return 2*(alto+ancho);
}

console.log (calcularPerimetroRectangulo(3.2, 5))
console.log (calcularPerimetroRectangulo(10, 20))
*/
         //Ejercicio 14. Calcular Porcentaje
/*
const calcularPorcentaje = (numero, porcentaje) => {
    return numero*porcentaje/100
};

console.log (calcularPorcentaje(100, 15))
console.log (calcularPorcentaje(10, 50))
console.log (calcularPorcentaje(200, 10))

*/

          //Ejercicio 15. Sumar Porcentaje
/*
const sumarPorcentaje = (numero, porcentaje) => {
    return numero*porcentaje/100+numero
}

console.log (sumarPorcentaje(100, 15))
console.log (sumarPorcentaje(10, 50))
console.log (sumarPorcentaje(200, 10))
*/

         //Ejercicio 16. Restar Porcentaje
/*
const restarPorcentaje = (numero, porcentaje) => {
      return numero-numero*porcentaje/100           
}
        
console.log (restarPorcentaje(100, 15))
console.log (restarPorcentaje(10, 50))
console.log (restarPorcentaje(200, 10))
*/

          //Ejercicio 17. Calcular FPS
/*
const calcularFPS = (CuadrosSegundos, Minutos) => {
   return 60*CuadrosSegundos*Minutos
}

console.log (calcularFPS(1, 1))
console.log (calcularFPS(10, 20))
console.log (calcularFPS(2, 3))
*/

            //Ejercicio 18. ObtenerCompetencia
/*
const obtenerCompetencia = (a, b) => {

    return `${a} vs ${b}`
};

console.log (obtenerCompetencia("JavaScript", "Python"));
console.log (obtenerCompetencia("Coca", "Pepsi"));
console.log (obtenerCompetencia("Perros", "Gatos"));
*/

              //Ejercicio 19. Generar Email
/*
const generarEmail = (usuario, dominio) => {

    return ` ${usuario}@${dominio}.com`
};

console.log (generarEmail ("adalovelace", "gmail"))

*/
/////////// Ejercicio 20. Es mayor de edad
/*
const esMayorDeEdad = (edad) =>{
    if(edad >= 18){
        return true;
    }
    else{
        return false;
    }
  };
  console.log(esMayorDeEdad(15));
  console.log(esMayorDeEdad(18));
  console.log(esMayorDeEdad(27));
*/
///////////Ejercicio 21. Hace calor
/*
const haceCalor = (temperatura) =>{
    if(temperatura >= 22){
        return true;
    }
    else{
        return false;
    }
};

console.log(haceCalor(12));
console.log(haceCalor(22));
console.log(haceCalor(23));
*/
/////////////Ejercicio 22. Hace frío
/*
const haceFrio = (temperatura) =>{
    if(temperatura <= 12){
        return true;
    }
    else{
        return false;
    }
};

console.log(haceFrio(12));
console.log(haceFrio(22));
console.log(haceFrio(3));
console.log(haceFrio(-2));
*/

////////////////Ejercicio 23. Acepta depósito

const aceptaDeposito = (monto) => {
    if(monto % 10 === 0){
        return true;
    }
    else{
        return false;
    }
};

console.log (aceptaDeposito(440));
console.log (aceptaDeposito(123));
console.log (aceptaDeposito(500.50));
console.log (aceptaDeposito(1000));


