document.querySelector("button").addEventListener("click", function(ev){
    let input = document.querySelector("input");
    let image = document.querySelector("#image");
    let apiKey="2b74bea7";
    let apiUrl=`http://www.omdbapi.com/?s=${input.value}&apikey=${apiKey}`;
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let imageUrl=data.Poster;
        image.src=imageUrl;
    })
});