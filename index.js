



const display = document.querySelector(".display1");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const percentage = document.querySelector(".percentage");
const value = document.querySelector(".value");
const dot = document.querySelector(".punto");

let num = "";
let previousNum = "";

// f - num selector
function numSelector(event){
    num += event.target.textContent;
    display.textContent = num;

    console.log("NUM", num)
    console.log("PREVIOUS NUM", previousNum)

}

numbers.forEach((number) => number.addEventListener("click", numSelector));

// f - reset display
function resetDisplay() {
  num = "";
  display.textContent = "0"
  
}

clearAll.addEventListener("click", resetDisplay);

//f- decimal

function decimal(){

  // if no dot = poner
  if (!num.includes(".")){
    num += "."
    display.textContent = num;
  
}
   // else dot = nada
   return;

  
}

dot.addEventListener("click", decimal)

// f - operator:sum

let operation = ""
function operatorManager(event){

  operation = event.target.innerText

  previousNum = num

  num = ""

  // cuando doy + se guarda pero no se muestra en display
// se guarda valor anterior
// recoge un nuevo numero

}

operators.forEach(operator => operator.addEventListener("click", operatorManager));
// ...operators
// f - equal

function getEqual() {
  // si he hecho click a un operador tiene que hacer una operacion
  // si no he hecho click a ningun operador nada
  let result;

    switch (operation) {
      case "+":
        result = Number(previousNum) + Number(num);
        break;
      case "-":
        result = Number(previousNum) - Number(num);
        break;
      case "*":
        result = Number(previousNum) * Number(num);
        break;
      case "/":
        result = Number(previousNum) / Number(num);
        break;
        
      default:
        break;
    } 
    num = result.toString()
    previousNum = ""

    console.log("NUM", num)
    console.log("TEMP NUM", previousNum)

    display.innerText = result.toString()


}

equal.addEventListener("click", getEqual)

function changeSign (){
  if(num[0] === "-" ){
    num = num.substring(1);
    

  } else{
    num = "-" + num
  }
  
  display.innerText = num
  
}
 
value.addEventListener("click", changeSign);