//get api key 
let accessKey = "5lZkXL_h0_mN98HrHFAkCxQy76KAjr7cuCfbp66Rvjo";
//capture search term 
const searchTerm = "cars";

const resource = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&client_id=${accessKey}`;

//make a request to unsplash api
//capture the api data
fetch(resource)
.then((res) => res.json())
.then((data) => {
    const container = document.getElementsByClassName("container");
    console.log(data)
})

//loop over the data and append to the dom