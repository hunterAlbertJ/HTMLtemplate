
console.log("reading local storage", JSON.parse(localStorage.getItem("storageArr")));
let localStorageArray = JSON.parse(localStorage.getItem("storageArr"));

if(localStorageArray !== null){
   

    for(i = 0; i < localStorageArray.length; i++){
    let row = document.getElementById("row");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "col-md-3");
    let newCard = `<div class="col-md-3">
    <div class="card">
      <img src="${localStorageArray[i].url}" alt="">
      <div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 id="cardTitle" class="card-title">${localStorageArray[i].title}</h5>
            <p class="card-text">${localStorageArray[i].description}.</p>
            <button onclick="updateClicked(event.target.id)"id="${localStorageArray[i].id}"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
              Update
            </button>
            <button id="deleteButton"onclick="updateClicked(event.target.id)"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>`
    newDiv.innerHTML = newCard
   row.appendChild(newDiv);
   
    
}
}

    function updateClicked(e){
        localStorage.setItem("currentClicked", JSON.stringify(e))
        console.log("value for id in storage", JSON.parse(localStorage.getItem("currentClicked")))
         console.log("in save",e)
    }

document.getElementById("saveChangesButton").addEventListener("click", (e) =>{
    
    let jsonHolder = JSON.parse(localStorage.getItem("storageArr"))
    let lastClicked = JSON.parse(localStorage.getItem("currentClicked"))

    for(value of jsonHolder){
        console.log(value.id)
    }

    let updateUrl = jsonHolder[lastClicked].url
    let updateTitle = jsonHolder[lastClicked].title
    let updateDescription = jsonHolder[lastClicked].description

    console.log(document.getElementById("updateTitle").value)
    console.log(document.getElementById("updateDescription").value)
    if(document.getElementById("updateUrl").value !== ""){
        updateUrl = document.getElementById("updateUrl").value;
    }
    if(document.getElementById("updateTitle").value !== ""){
        updateTitle = document.getElementById("updateTitle").value;
    }
     
    if(document.getElementById("updateDescription").value !== ""){
        updateDescription = document.getElementById("updateDescription").value;
    }
     
    let updateObjectToEmptyStorageArr = {
        url: `${updateUrl}`,
        title: `${updateTitle}`,
        description: `${updateDescription}`,
        id: `${lastClicked}`
    
    }
    console.log(updateObjectToEmptyStorageArr)
    jsonHolder[lastClicked]=updateObjectToEmptyStorageArr;
    localStorage.setItem("storageArr", JSON.stringify(jsonHolder))
    console.log(jsonHolder)
    location.reload();


})

document.querySelector("#yes").addEventListener("click", (e) => {
    let jsonHolder = JSON.parse(localStorage.getItem("storageArr"))
    let lastClicked = JSON.parse(localStorage.getItem("currentClicked"))
    jsonHolder.splice(lastClicked, 1)
    localStorage.setItem("storageArr", JSON.stringify(jsonHolder))

    let updateIdArr = JSON.parse(localStorage.getItem("storageArr"));
    if(updateIdArr !== null){
        for(i = 0; i < updateIdArr.length; i++){
            console.log(updateIdArr[i].id, "line 98")
            updateIdArr[i].id = i;
        }
        localStorage.setItem("storageArr", JSON.stringify(updateIdArr))
    }
    location.reload();

})
document.querySelector("#addCardButton").addEventListener("click", (e) => {
    let newUrl = document.getElementById("newUrl").value;
    let newTitle = document.getElementById("newTitle").value;
    let newDescription = document.getElementById("newDescription").value;
    console.log(newUrl)
   
    
    
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