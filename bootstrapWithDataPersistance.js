

document.querySelector("#addCard").addEventListener("click", (e) => {
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

})