let addButton = document.getElementById("add");
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let imageField = document.getElementById("imageField").value;
    let bottomText = document.getElementById("bottomField").value;
    let topText = document.getElementById("topField").value;
    let newCard = document.createElement("div");
    let imageDiv = document.createElement("img")

    newCard.setAttribute("class", "container")
    imageDiv.setAttribute("src",imageField);
    newCard.appendChild(imageDiv);
   
    let topTextDiv = document.createElement("div");
    let bottomTextDiv = document.createElement("div");
    topTextDiv.innerText = topText;
    bottomTextDiv.innerText = bottomText;
    let deleteButton = document.createElement("button");
    delete

    topTextDiv.setAttribute("id", "text");
    bottomTextDiv.setAttribute("id", "text");
    bottomTextDiv.setAttribute("innerText", bottomText);
    newCard.prepend(topTextDiv);
    newCard.appendChild(bottomTextDiv);
    
    document.body.appendChild(newCard);
    
})
console.log("test")