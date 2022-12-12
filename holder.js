
console.log("reading local storage", JSON.parse(localStorage.getItem("storageArr")));
var localStorageArray = JSON.parse(localStorage.getItem("storageArr"));
var localCardId;
for(i = 0; i < localStorageArray.length; i++){
    //console.log(localStorageArray[i])
    let row = document.getElementById("row");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "col-md-3");
    localCardId = localStorageArray[i].id
    let newCard = `<div class="col-md-3">
    <div class="card">
      <img src="${localStorageArray[i].url}" alt="">
      <div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 id="cardTitle" class="card-title">${localStorageArray[i].title}</h5>
            <p class="card-text">${localStorageArray[i].description}.</p>
            <button id="${localStorageArray[i].id}"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
              Update
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>`
    newDiv.innerHTML = newCard
    
   row.appendChild(newDiv);
   
    
}
for(i = 0; i < localStorageArray.length; i++){
    
    let tempHoldButton = document.getElementById(i)
    tempHoldButton.addEventListener("click", (e) =>{
        localStorage.setItem("currentClicked", JSON.stringify(tempHoldButton.id))
        console.log("value for id in storage", JSON.parse(localStorage.getItem("currentClicked")))
    })

    console.log(tempHoldButton.id)
}


document.querySelector("#addCardButton").addEventListener("click", (e) => {
    let newUrl = document.getElementById("newUrl").value;
    let newTitle = document.getElementById("newTitle").value;
    let newDescription = document.getElementById("newDescription").value;
    
 
    
    
    if(JSON.parse(localStorage.getItem("storageArr")) === null){
        console.log("nothing in local storage");
       

        let objectToEmptyStorageArr = [{
            url: `${newUrl}`,
            title: `${newTitle}`,
            description: `${newDescription}`,
            id: 0
        }]
        
        
        localStorage.setItem("storageArr", JSON.stringify(objectToEmptyStorageArr))
    } else {
        let jsonHolder = JSON.parse(localStorage.getItem("storageArr"))
        let objectToStorageArr = {
            url: `${newUrl}`,
            title: `${newTitle}`,
            description: `${newDescription}`,
            id: jsonHolder.length
        }
     
        jsonHolder[jsonHolder.length]=objectToStorageArr;
        localStorage.setItem("storageArr", JSON.stringify(jsonHolder))

        console.log(JSON.parse(localStorage.getItem("storageArr")).length);
    }
    console.log("reading local storage", JSON.parse(localStorage.getItem("storageArr")));
    location.reload();
})