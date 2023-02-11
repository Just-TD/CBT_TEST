let thisValue = JSON.parse(localStorage.getItem("Options"));
const fetchDetails = () =>{ 
    let thisValue = JSON.parse(localStorage.getItem("Options"));

    let content = "";


    for(let i = 0; i < thisValue.length; i++){ 
        content += `<div class = "bg-secondary text-white p-5">

        <span> ${[i]}. ${thisValue[i].questionSet}  </span> <br> 

        <div class="form-check"> 
        <input type="checkbox" class="form-check-input" id="flexbest_A" onclick = "getA()">
        <label for="flexbest_A" class="form-check-label"> ${thisValue[i].option_A}</label>
        </div>

        <div class="form-check"> 
        <input type="checkbox" class="form-check-input" id="flexbest_B" onclick = "getB()>
        <label for="flexbest_B" class="form-check-label"> ${thisValue[i].option_B}</label>
        </div>

        <div class="form-check"> 
        <input type="checkbox" class="form-check-input" id="flexbest_C" onclick = "getC()>
        <label for="flexbest_C" class="form-check-label"> ${thisValue[i].option_C}</label>
        </div>

        <div class="form-check"> 
        <input type="checkbox" class="form-check-input" id="flexbest_D" onclick = "getD()>
        <label for="flexbest_D" class="form-check-label"> ${thisValue[i].option_D}</label>
        </div>

        
        
        </div>`

        
    document.getElementById("finalVelocity").innerHTML = content;


    }


}
























// function myFunction (num1,num2){ 
//     let myCalculation = num1 * num2;
//     return myCalculation;


// }
// finalValue = myFunction(12,13);
// console.log(finalValue);
// if(finalValue < 200){ 
//     console.log("This is very possible");
// }else{ 
//     console.log("Omo make i look away");
// }

answerBank = [ 
    {question1:"A"},
    {question2:"B"},
    {question1:"C"},
    {question1:"C"},
    {question1:"D"}
]
console.log(answerBank);

const checkTheAnswer = () => { 
    console.log("Correct Answer")
}




