// # Funktionsumfang


// #### 1. Exponentialwerte drucken
// * Schreibe in die Datei `index.js` eine Funktion namens `printExponentialValues`, die zwei Zahlen als Parameter annimmt
// * Sie soll eine Reihe von Exponentialzahlen berechnen, wobei das erste Argument die Basiszahl für die Berechnung ist und das zweite Argument angibt, wie viele Zahlen erzeugt werden sollen.
// * Die Funktion sollte die resultierende Zahlenreihe als einzelne, durch Leerzeichen getrennte Zeichenkette auf dem Terminal ausgeben.
// * Wenn eines oder beide der übergebenen Argumente keine Zahl sind, sollte die Meldung `"x or y is not a number"` auf dem Terminal ausgegeben werden.
// * Beispiel: Bei Funktion function(3, 5) sollte `3 9 27 81 243` ausgegeben werden (Sie gibt 5 Exponentialwerte von 3 zurück)
// * funktion(2, 8) gibt `2 4 8 16 32 64 128 256` zurück (8 exponentielle Werte von 2)





// #### 2. Früchte
// * Erstelle eine Funktion namens `printFavoriteFruit`. Deklariere eine Variable namens `fruit` außerhalb der Funktion und speichere deine Lieblingsfrucht als Wert. Weise die Variable innerhalb der Funktion neu zu und drucke `"My favorite fruit is: _x_"`.





// #### 3. Eine Zahl mit sich selbst multiplizieren
// * Erstelle eine Funktion namens `exponent`, die zwei Zahlen als Parameter entgegen nimmt. Der zweite Parameter bestimmt, wie oft die erste Zahl mit sich selbst multipliziert werden soll. Speichere die Ausgabe in einer Variablen namens `result` innerhalb der Funktion.
// * Versuche dann, auf die Variable `result` außerhalb der Funktion `exponent` zuzugreifen. Ist das möglich? Warum/Warum nicht? Kommentiere deine Antwort in der Datei `index.js`.


// TASK 1
// Write your code here ↓↓↓↓ //


arrExp=new Array();
function printExponentialValues(zahl1, zahl2){
    for(let i=0; i<zahl2; i++){
        arrExp[i]=Math.pow(zahl1,i+1);
      
    }
    //console.log(arrExp);
    console.log(arrExp.join(" "));
}


function printExponentialValues2(zahl, zahlen){
expString="";
for(let i=1; i<=zahlen; i++){
   
   expString = expString + Math.pow(zahl,i) + " ";
          
        }

console.log(expString);
}






// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printExponentialValues(2, 5);


// TASK 2
// Write your code here ↓↓↓↓ //


fruit="Banana";

function printFavoriteFruit(){
let newFruit="Orange";
    fruit=newFruit;
console.log(`My favorite fruit is: ${fruit}`);
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printFavoriteFruit();



// TASK 3
// Write your code here ↓↓↓↓ //

function exponent(zahl1, zahl2){
    let result=zahl1;
        for (let i=1; i<=zahl2; i++){
            result=result*zahl1;
    
        }
        console.log(result);
    }
    
    




// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
exponent(2, 8);