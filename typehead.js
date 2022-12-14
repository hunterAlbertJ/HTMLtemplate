let objArray = [{name: "fox", link: "https://www.foxnews.com/"},{name: "fandango", link: "https://fandango.com"}, {name: "cnn", link: "https://www.cnn.com/"}];

let inputValue = document.getElementById("textInput")
let linkContainer = document.getElementById("linkContainer")

let inputFunction = function(e){    
    // console.log(e.target.value)
    linkContainer.innerHTML = "";
    for(i =0; i < objArray.length; i++){
       // console.log(objArray[i].name)
        if(objArray[i].name.includes(e.target.value.toLowerCase()) && e.target.value !== ""){
            console.log(objArray[i].name)
            
            let newCard = document.createElement("div");
           
            newCard.setAttribute("onclick", `location.href='${objArray[i].link}'`);
            newCard.innerHTML = objArray[i].name
            newCard.setAttribute("id", "card")
            linkContainer.appendChild(newCard);
            let testVal = JSON.stringify(e.target.value)
            fetch(`"https://maps.googleapis.com/maps/api/place/autocomplete/${testVal}"`)
            .then((response) => response.json())
            .then((data) => {

        }
    }
}

inputValue.addEventListener('input', inputFunction)