fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {


for(i = 0; i < data.length; i++){
    console.log("in loop")
    let text= document.createElement("div");
    text.innerText = data[i].title;
    container.appendChild(text);

}
});