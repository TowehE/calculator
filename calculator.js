function getHistory(){
    return document.getElementById("history-value").innerText;
 }
 
 function printHistory(num){
     document.getElementById("history-value").innerText=num;
 }
 
 function getOutput(){
    return document.getElementById("output-value").innerText;
 }
 
 function printOutput(num){
     if (num==""){
         document.getElementById("output-value").innerText=num;
     }
     else{
         document.getElementById("output-value").innerText=getFormattedNumber(num);
     }
 }
 
 // let light = document.getElementById("calculator")
 // light.style.background = " "
 
 // function color(){
 //     let light=document.getElementById("calculator")
 //     let color = ["white"]
 //     dark.style.color = "black"
 //     light.style.background = color
 // }
 
 
 // let dark = document.getElementById("calculator")
 // dark.style.background = " "
 
 // function black(){
 //     let dark=document.getElementById("calculator")
 //     let black = ["black"]
 //     dark.style.color = "white"
 //     dark.style.background = black
 // }
 // printoutput("99999")
 
 function getFormattedNumber(num){
     if (num=="-"){
         return "";
     }
     let n = Number(num);
     let value = n.toLocaleString("en");
     return value;
 }
 
 // printOutput("98876576");
 
 function reverseNumberFormat(num){
     return Number(num.replace(/,/g,''));
 }
 
 // alert(reverseNumberFormat(getOutput()));
 
 let operator = document.getElementsByClassName("operator");
 for (let i = 0;i<operator.length;i++){
     operator[i].addEventListener('click', function(){
         if(this.id=="clear"){
             printHistory("");
             printOutput("0");
         }
         else if(this.id=="backspace"){
             let output=reverseNumberFormat(getOutput()).toString();
             if(output){//if output has a value
                 output= output.substr(0, output.length-1);
                 printOutput(output);
             }
         }
         else{
             let output=getOutput();
             let history=getHistory();
             if (output==""&&history!=""){
                 if(isNaN(history[history.length-1])){
                     history=history.substr(0,history.length-1);
                 }
             }
             if(output!="" || history!=""){
                 output= output==""?
                 output:reverseNumberFormat(output);
                 history=history+output;
                 if (this.id=="="){
                     let result=eval(history);
                     printOutput(result);
                     printHistory("");
                 }
                 else{
                     history=history+this.id;
                     printHistory(history);
                     printOutput("");
                 }
             }
         }
     });
 }
 
 let number = document.getElementsByClassName("number");
 for (let i = 0;i<number.length;i++){
     number[i].addEventListener('click', function(){
             let output=reverseNumberFormat(getOutput());
             if(output!=NaN) { //if output is a number
                 output=output+this.id;
                 printOutput(output);
             }
     });
 }
 
 const outputP = document.getElementById("output-value")
 const body = document.getElementById("calculator")
 const toggle = document.getElementById("toggle")
 toggle.onclick = function(){
     toggle.classList.toggle("actives")
     body.classList.toggle("actives")
     outputP.classList.toggle("actives")
 }
 
 // let Vol = ["green", "black", "blue", "red"]
 // let Num = Math.floor(Math.random() * Vol.length)
 // console.log(Vol[Num])