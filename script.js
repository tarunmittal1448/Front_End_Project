let input=document.querySelector("#name");
let div=document.querySelector("#img");

document.querySelector("#s").addEventListener("click", function(ev){
    ev.preventDefault();
    const apiKey = "2b74bea7";
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;
    fetch(apiUrl)
    .then(response => response.json())  
    .then(data => {
        console.log(data);
        for(let i=0; i<=data.totalResults-1; i++){
            let img=document.createElement("img");
            let p=document.createElement("p");
            let imageUrl = data.Search[i].Poster;
            let pCnt=data.Search[i].Title;
            let type=data.Search[i].Type;
            let year=data.Search[i].Year;
            let imdb=data.Search[i].imdbID;
            img.src=imageUrl;
            p.innerText="Name of the Movie : \n\n"+pCnt+"\n\nType of the Movie : "+type+"\n\nRelease Year of the Movie : "+year+"\n\nIMDB rating of the Movie : "+imdb;
            if(imageUrl!="N/A"){
                div.append(img);
                div.append(p);
            }
            else{
                continue;
            }
            console.log(imageUrl);
        }
    })
});