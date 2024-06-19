/*Paso a paso de lo que realiza el codigo..*/
/*Por buenas practicas siempre declaramos nuestras varieables en la cabecera del codigo, ahora lo que hacemos es llamar a nuestros id que colocamos anteriormente dentro de las etiquetas en html cada una de estas etiquetas es semantica. ahora lo recomendable es guardar en variables de tipp const ya que estas no se volveran a modificar su valor (aqui pueden consultar un poco los temas de mutabilidad y no mutabilidad). seguimos.. nombramos nuestras variables de la misma manera que nuestros ids para poder recordar que es lo que hace cada una utlizamos el metodo (document.getElementById("AQUI VA EL ID QUE COLOCASTE EN TU ETIQUETA DE HTML")).  */
const title = document.getElementById("title");
const inputName = document.getElementById("inputName");
const button = document.getElementById("bttnNext");
const nameSpan = document.getElementById("nameDisplay");

const titleDos = document.getElementById("titleDos");
const inputEdad = document.getElementById("inputEdad");
const buttonEdad = document.getElementById("bttnNextEdad");
const nameDisplay = document.getElementById("nameDisplayEdad");
const nameDisplayEdad = document.getElementById("nameDisplayEdad");
const goDrive = document.getElementById("goDrive");
const imgNoDrive = document.getElementById('imgNoDrive')
/*Ahora lo que haremos es crear una funcion que nos permita capitalizar la primera letra de nuestro nombre de usuario, para que no se vea feo, y que se vea como si fuera un nombre de usuario real.  */
nameSpan.style.display = "none";
titleDos.style.display = "none";
inputEdad.style.display = "none";
buttonEdad.style.display = "none";
nameDisplayEdad.style.display = "none";
goDrive.style.display = "none";
imgNoDrive.style.display = 'none'

function capitalizeFirstLetter(str) {
  /*Aqui lo que hacemos es que nos devuelva la primera letra de la cadena de texto que le pasemos y la capitalice, para que no se vea feo, y que se vea como si fuera un nombre de usuario real. Rordemos que estamos utilizando el metodo de camelcase para nombrar nuestra funciona ademas esta funcion tiene como parametro srt que hace referencia al acronimo string = cadena de texto. pero este parametro viene desdde el momento en que se ejecuta el evento button.addeventelistener */
  str = str.toLowerCase();
  /*
  str = str.toLowerCase();
    esto lo que hace es que todo el texto que le pasemos a la funcion se convierte en minusculas, para que no se vea feo, y que se vea como si fuera un nombre de usuario real es decir si el usuario dentro del input coloco todo en mayusculas pasa por aqui y lo convierte en minisculas.
  */
  return str.charAt(0).toUpperCase() + str.slice(1);
  /*
  return str.charAt(0).toUpperCase() + str.slice(1);
  utilizamos el return para que nos devuelva la primera letra de la cadena de texto que le pasemos y la convierta en mayuscula, pero para entender que hace esto traemos nuestro parametro srt y le asignamos la palabra reservada o metodo dentro de JS . charAt(0) que esto se diria como character o caracter ahora porque (0) en la progrmacion el primen indicie se empieza a contar desde el 0 es decir si mi nombre es (ANDRES) la (A seria indice o y N seria indice 1 y asi sucesivamente) el . toUppercase() es otro metodo dentro de JS lo que hace es que como ya sabemos cual letra deseamos convertir en mayuscula (ojo en base al indice). la debemos fusionar con el resto de las letras enctonces usamos el operador de + para concatenar srt.slice(1) pero que hace (slice = pedazo) esto hace que las letras despues del indice 0 es decir desde la (n en adelante se uniran a la primera letra que ya esta convertida en mayudcula) y como resultado nos dara = (Andres QUE EN ESTE CASO LO UTILICE COMO EJEMPLO.)
  */
}

/*
button.disabled = true;
Esto lo que hace es que al inicio del codigo se inicie deshabilitado el boton, para que no se pueda pulsar hasta que el usuario ingrese su nombre. Recordemos que (button viene de nuestra variable declarada arriba).
ESTA ES...
const button = document.getElementById("bttnNext");
*/
button.disabled = true;

/*
ahora inputName lo que hace es que ejecuta un funcion o arrow funcion = funcion flecha con el parametro ('input') pero de donde viene input pues este escucha el evento del input que viene a decir mas o menos como que oye ingresaron algo en el input para esto input viene a ser la entrada de texto donde colocaran el nombre.
*/
inputName.addEventListener("input", () => {
  /*Dentro del evento ulilizando el metodo addEventListener creamos una funcion flecha o arrow function que ejeceturara un con dicional dependiendo si el usuario ingresa algo en el input */
  if (inputName.value.trim() !== "") {
    button.disabled = false;
    /*El if lo que hace es validar nuestra variable inputName que esta arriba con el metodo .value que no dice que si hay un valor dentro del input y este es difente a un string vacio "" que ejecutara pues que siga deshabilitado el boton el metodo trim() lo que hace es verifica si existen espacios delante o despues del texto pero en este caso cumple la funcion de que si ingresas un espacio antes del texto no lo tome como un texto es decir como que ya ingresaste algo para que no se habilite el boton ahora algo que debe quedar claro es el condiconal lo que realiza es lo siguiente en primera instacia evalua si el input esta vacio pero como lo hace pues asiganadole una evaluacion de tipo estring vacio ""*/
  } else {
    button.disabled = true;
    /*Aqui evalua la segunda condicion que indica que si el input tiene algo dentro de el habilite el boton para ejecutar el siguiente evento. */
  }
});

button.addEventListener("click", () => {
  const userName = inputName.value.trim();
  if (userName) {
    nameSpan.textContent = `Bienbenido, ${capitalizeFirstLetter(userName)}!`;
  }
  inputName.style.display = "none";
  button.style.display = "none";
  title.style.display = "none";
  nameSpan.style.display = "block";
  titleDos.style.display = "block";
  inputEdad.style.display = "block";
  buttonEdad.style.display = "block";
  //   alert(`${(capitalizeFirstLetter(userName))} Solo puedes ingresar numero para validar si puedes o no conducir!`)
});

inputEdad.addEventListener("input", () => {
  const inputStricNumber = inputEdad.value;
  const regex = /^\d+$/;
  if (regex.test(inputStricNumber)) {
    buttonEdad.disabled = false;
  } else {
    buttonEdad.disabled = true;
  }
});

buttonEdad.addEventListener("click", () => {
  const inputStricNumber = inputEdad.value;
  if (!(inputStricNumber >= 17)) {
    nameDisplay.textContent = `Lo siento, no puedes conducir tienes ${inputStricNumber} años, Sigue participando.`;
    imgNoDrive.style.display = "block";
  } else {
    nameDisplay.textContent = `¡Felicidades! Puedes conducir tienes ${inputStricNumber} años nada mas te falta el carro JAJA.`;
    goDrive.style.display = "block";
  }
  nameDisplayEdad.style.display = "block";
  nameSpan.style.display = "none";
  titleDos.style.display = "none";
  inputEdad.style.display = "none";
  buttonEdad.style.display = "none";
});
