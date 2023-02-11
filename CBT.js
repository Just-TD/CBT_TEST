const setQuestion = () => { 
    let questionSet = question.value;
    let option_A = optA.value;
    let option_B = optB.value;
    let option_C = optC.value;
    let option_D = optD.value;

    question.value = "";
    optA.value = "";
    optB.value = "";
    optC.value = "";
    optD.value = "";
        
    
    let finalQuestion = [];
    let myQuestion = { 
        questionSet:questionSet,
        option_A:option_A,
        option_B:option_B,
        option_C:option_C,
        option_D:option_D

    }
    let thatValue = JSON.parse(localStorage.getItem("Options"));
    finalQuestion = thatValue;
    finalQuestion.push(myQuestion);
    localStorage.setItem("Options", JSON.stringify(finalQuestion));


    // let thatValue = JSON.parse(localStorage.getItem("Options"));
    // finalQuestion = thatValue;
    // finalQuestion.push(myQuestion);
    // localStorage.setItem("Options", JSON.stringify(finalQuestion));
    // console.log(finalQuestion);

    

    // let thisValue = JSON.parse(localStorage.getItem("Options"));
    // finalQuestion = thisValue;


    // let thisValue = JSON.parse(localStorage.getItem("Options"));
    //     finalQuestion = thisValue;
         
    
    // finalQuestion.push(myQuestion);
    
    
  
    // console.log(finalQuestion);
}

let finalResult = 0;
const getA = () => { 
    alert("Wrong answer")
   
 
}
const getB = () => { 
    console.log("Wrong answer")
   
 
}
const getC = () => { 
     console.log("Correct answer")
     finalResult = finalResult + 1;
     console.log(finalResult);
   
 
}
const getD = () => { 
    console.log("wrong answer")
   
 
}
const getE = () => { 
    console.log("Wrong answer")
 
}