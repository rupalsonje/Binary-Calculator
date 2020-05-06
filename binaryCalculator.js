var res=document.getElementById("res");
var zero=document.getElementById("btn0");
var one=document.getElementById("btn1");
var equal=document.getElementById("btnEql");
var clear=document.getElementById("btnClr");
var sum=document.getElementById("btnSum");
var sub=document.getElementById("btnSub");
var div=document.getElementById("btnDiv");
var mul=document.getElementById("btnMul");

zero.addEventListener("click",btn0,false);
one.addEventListener("click",btn1,false);
equal.addEventListener("click",btneq,false);
clear.addEventListener("click",btnclr,false);
sum.addEventListener("click",btnsum,false);
sub.addEventListener("click",btnsub,false);
mul.addEventListener("click",btnmul,false);
div.addEventListener("click",btndiv,false);

function checkOperator(){
  if(res.innerHTML.endsWith('+') || res.innerHTML.endsWith('-') || res.innerHTML.endsWith('*') || res.innerHTML.endsWith('/')){
    return true;
  }
}

function btn0(){
  res.innerHTML +=0;
}
function btn1(){
  res.innerHTML +=1;
}
function btnsum(){
  if(res.innerHTML.length!=0 && !checkOperator()){
      res.innerHTML +='+';
    }
}
function btnsub(){
   if(res.innerHTML.length!=0 && !checkOperator()){
      res.innerHTML +='-';
    }
}
function btnmul(){
   if(res.innerHTML.length!=0 && !checkOperator()){
      res.innerHTML +='*';
    }
}
function btndiv(){
   if(res.innerHTML.length!=0 && !checkOperator()){
      res.innerHTML +='*';
    }
}
function btnclr(){
  res.innerHTML = '';
}
function btneq(){
  if(!checkOperator()) {
    let re = /\d+/g
    let re2 = /[\+\-\*\/]+/g
    let numbers = res.innerHTML.match(re);
    let operations = res.innerHTML.match(re2);
    while(operations.length>0) {
      if(operations.includes('*')) {
        let indexOfMul = operations.indexOf('*');
        let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
        numbers.splice(indexOfMul,2);
        numbers.splice(indexOfMul,0,mul.toString(2));
        operations.splice(indexOfMul,1);
      } else if (operations.includes('/')) {
        let indexOfDiv = operations.indexOf('/');
        let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
        numbers.splice(indexOfDiv,2);
        numbers.splice(indexOfDiv,0,division.toString(2));
        operations.splice(indexOfDiv,1);
      } else if (operations.includes('+')) {
        let indexOfSum = operations.indexOf('+');
        let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
        numbers.splice(indexOfSum,2);
        numbers.splice(indexOfSum,0,sum.toString(2));
        operations.splice(indexOfSum,1);
      } else {
        let indexOfSub = operations.indexOf('-');
        let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
        numbers.splice(indexOfSub,2);
        numbers.splice(indexOfSub,0,sub.toString(2));
        operations.splice(indexOfSub,1);
      }  
    }
    res.innerHTML = "ANS = "+numbers[0].toString(2);
  } else {
    alert("Line must ends with number.")
  }}