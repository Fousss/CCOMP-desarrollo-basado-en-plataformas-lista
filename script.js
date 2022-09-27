let counter = 0
   
functionhello(){
    counter++

    document.querySelector("#counter").innerHTML= counter
   
    if(counter %10===0){
        alert(`Counter is at ${counter}`)
    }
}


functiononSubmit(){
    constcontainer=document.getElementById("container")
    constinputValue=document.querySelector("[name=todo]")
   
    constPCounter=document.createElement("p")
    constDIV=document.createElement("div")
    constINPUT=document.createElement("input")
    constP=document.createElement("p")
    constBUTTON=document.createElement("button")
   
   
    DIV.classList.add("line__item")
   
    P.innerHTML=inputValue.value
   
    INPUT.type="checkbox"
    INPUT.addEventListener("change", ()=>{
        if(!P.querySelector("del")){          
            consttmp= P.innerHTML
           
            constDEL=document.createElement("del")
            DEL.innerHTML= tmp
           
            P.innerHTML=""
            P.appendChild(DEL)
    }else{
        constDEL= P.querySelector("del")
        consttmp= DEL.innerHTML
       
        P.innerHTML= tmp
    }
    })
   
   

   
    BUTTON.innerHTML="x"
    BUTTON.addEventListener("click", ()=> DIV.remove())
   
    counter++
   
    PCounter.innerHTML= counter
   
    DIV.appendChild(PCounter)
    DIV.appendChild(INPUT)
    DIV.appendChild(P)
    DIV.appendChild(BUTTON)
   
    container.appendChild(DIV)
}