// 1. Declara una variable llamada sentence y dale el valor "JavaScript no es tan difícil como me había dicho Ángel..."
let sentence = "JavaScript no es tan difícil como me había dicho Ángel...";

// 2. Muestra el contenido de sentence en la consola.
console.log(sentence);

// 3. Muestra en la consola la longitud de sentence.
console.log(sentence.length);

// 4. Cambia todos los caracteres de sentence a mayúsculas.
let uppercaseSentence = sentence.toUpperCase();
console.log(uppercaseSentence);

// 5. Cambia todos los caracteres de sentence a minúsculas.
let lowercaseSentence = sentence.toLowerCase();
console.log(lowercaseSentence);

// 6. Crea una variable llamada js y asígnale como valor el resultado de cortar o extraer la palabra "JavaScript" de sentence. Comprueba que haya funcionado.
let js = sentence.slice(11, 57);
console.log(js);

// 7. Crea una variable llamada profe y asígnale como valor el resultado de cortar o extraer la palabra "Ángel" de sentence. Comprueba que haya funcionado.
let profe = sentence.slice(11, 48);
console.log(profe);

// 8. Comprueba si sentence contiene el string "script".
let containsScript = sentence.includes("script");
console.log(containsScript);

// 9. Cambia a una variable newSentence el valor de sentence usando replace() para que diga "Python no es tan difícil como me había dicho Marcos...".
let newSentence = sentence.replace("JavaScript", "Python").replace("Ángel", "Marcos");
console.log(newSentence);

// 10. ¿Cuál es el caracter que se encuentra en la posición 4 de newSentence? Muéstralo en la consola.
let characterAtPosition4 = newSentence.charAt(4);
console.log(characterAtPosition4);

// 11.¿Cuál es la posición de la primera ocurrencia del caracter "a" en newSentence? Muéstralo en la consola.
let positionOfA = newSentence.indexOf("a");
console.log(positionOfA);

// 12.¿Cuál es la posición de la última ocurrencia del caracter "a" en newSentence? Muéstralo en la consola.
let positionOfLastA = newSentence.lastIndexOf("a");
console.log(positionOfLastA);

// 13.¿Cuál es la posición de la primera ocurrencia del caracter "z" en newSentence? Muéstralo en la consola.
let positionOfZ = newSentence.indexOf("z");
console.log(positionOfZ);

// 14.Crea una variable llamada doubts que sea el resultado de concatenar newSentence con el string "pero todavía es pronto para saberlo".
let doubts = newSentence + " pero todavía es pronto para saberlo";
console.log(doubts);

// 15.Crea la variable longitud y asígnale la longitud de newSentence.
let longitud = newSentence.length;

// Muestra por consola el caracter que se encuentra en la posición que guarda longitud.
console.log(newSentence.charAt(longitud));

// El resultado será un valor (undefined) porque la posición que se pasa a charAt() está fuera del rango válido. Las posiciones comienzan desde 0, por lo que el índice máximo es longitud - 1.

// 16. Muestra por consola el último carácter de newSentence utilizando charAt() y la variable longitud.
console.log(newSentence.charAt(longitud - 1));

// 17.Crea las variables name1 y name2 con sus respectivos valores.
let name1 = "John";
let name2 = "Anna";

// Crea las variables long1 y long2 con la longitud de name1 y name2, respectivamente.
let long1 = name1.length;
let long2 = name2.length;

// Muestra por consola si long1 es estrictamente igual a long2.
console.log(long1 === long2);

// 18.Crea la variable bothNames y asígnale como valor la concatenación de name1 y name2.
var bothNames = name1 + name2;

// Crea la variable finalLong y asígnale como valor la longitud de bothNames.
var finalLong = bothNames.length;

// Muestra por consola si finalLong es estrictamente igual a la suma de long1 y long2.
console.log(finalLong === (long1 + long2));

// Muestra por consola si long1 es mayor que long2, o long2 es mayor que long1.
console.log(long1 > long2 || long2 > long1);

// Muestra por consola si las dos operaciones anteriores son verdaderas.
console.log((finalLong === (long1 + long2)) && (long1 > long2 || long2 > long1));





