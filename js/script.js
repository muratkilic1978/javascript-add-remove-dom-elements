const outputListElements = document.getElementById("listElements");

const outputBtnAdd = document.getElementById("add");

const outputInputElementField = document.getElementById("inputElementField");

outputBtnAdd.addEventListener("click",function(){
    let newElement = document.createElement("LI");
    outputListElements.append(newElement);
    newElement.innerHTML = outputInputElementField.value+ "  " + "<button class='btn'>X</button>";
});

outputListElements.addEventListener("click", function(e){
   if(e.target && e.target.nodeName == "BUTTON"){
//       console.log("Button ", e, " was clicked");
       e.target.parentNode.remove();
   } 
});