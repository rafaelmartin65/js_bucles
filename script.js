function countLetter(str){
    // convert string to lowercase
    str = str.toLowerCase();

    // incialize variable to count a occurrences of letter
    let count = 0;

    // Loop through each character of string
    for (let i = 0; i < str.length; i++){
        // check is character is 'a'
        if (str[i] === 'a'){
            count++;
        }
    }

    return count;

}



// Obtener el formulario
const form = document.getElementById('myForm');


// Agregar un listener para el evento 'submit'
form.addEventListener('submit', function(event) {        // Evitar que se envíe el formulario
    event.preventDefault();

    // Solicitar la edad hasta que se ingrese un valor válido
    let age = document.getElementById('age').value;
    
    while (true) {
        // 
        if (!isNaN(age) && age >= 0) {
            // Si se ingresa un valor válido, salir del bucle
            // Si es mayor de 18, mostrar mensaje de acceso exitoso
            if (age >= 18) {
                alert("Acceso concedido. ¡Bienvenido!");
                break;
            } else {
                alert("Lo siento, debes ser mayor de 18 años para acceder.");
                age = -1;
            }
            
        } else {
            
            alert("Por favor, ingrese una edad válida.");
            age = parseInt(prompt("Por favor, ingrese su edad:", ""));
        }
    }

    // Refrescar el valor del campo de edad en el formulario
    document.getElementById('age').value = age;

    // Obtener los valores del formulario
    const name = form.elements['name'].value;        
    const gender = form.elements['gender'].value;

    // Verificar si la edad es mayor o igual a 18
    const isAdult = age >= 18;

    // Mostrar el resultado de la validación de edad en el div
    const ageValidationResult = document.getElementById('ageValidationResult');
    ageValidationResult.innerHTML = isAdult ? "¡Eres mayor de edad!" : "Eres menor de edad.";

    

    // Contar las letras 'a' en el nombre

    console.log("El numero de letras 'a' que tiene el nombre es/son: " + countLetter(name));

    // Imprimir los resultados en la consola
    console.log('Nombre:', name);
    console.log('Edad:', age);
    console.log('Género:', gender);
    console.log('¿Es adulto?:', isAdult);


    // Imprime numeros impares de 1 a 10
    let i = 0;
    console.log("pares entre 1 y 10");
    checkpar: while (i <= 10) {
        i+=1;
                    
        if (i % 2 === 0) {
            console.log(i, "es par.");
            continue checkpar;   
        }
         
        
    }

    console.log("fin");

});