//ejercicio 1

let edad1:number=15
if (edad1 >= 18){
    console.log("puedes votar")
}else{
    console.log("aun no puedes votar")
}

//ejercicio 2

let nota:number=60
if (nota >= 80){
    console.log("A")
} else if(nota == 60){
    console.log("B")
} else if(nota == 40){
    console.log("C")
} else if(nota <= 39){
    console.log("D")
}

//ejercicio 3

let numero:number=87
if (numero%2 == 0){
    console.log("Es par")
}else{
    console.log("Es impar")
}

//ejercicio 4

let num1:number= 2,num2:number=2
if (num1 > num2){
    console.log("Num 1 es mayor")
}else if(num1 < num2){
    console.log("Num 2 es menor")
}else if(num1 == num2){
    console.log("Son iguales")
}else{
    console.log("Son diferentes")
}

//ejercicio 5
let dia:number=5
if (dia == 1){
    console.log("el dia es lunes")
}else if (dia == 2){
    console.log("el dia es martes")
}else if (dia == 3){
    console.log("el dia es miercoles")
}else if (dia == 4){
    console.log("el dia es jueves")
}else if (dia == 5){
    console.log("el dia es viernes")
}else if (dia == 6){
    console.log("el dia es sabado")
}else if (dia == 7){
    console.log("el dia es domingo")
}

let hora:number=12
let minuto:number=58
let segundo:number=43
let pm:boolean=true
let segundos_transcurridos:number=0
segundos_transcurridos+=hora * 3600
segundos_transcurridos+=minuto * 60
segundos_transcurridos+=segundo * 43
if (pm == true){
    segundos_transcurridos+=3600 * 12
}
console.log(segundos_transcurridos)