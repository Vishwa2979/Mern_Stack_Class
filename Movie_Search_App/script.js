const API_KEY="YOUR_API_KEY";

async function searchMovie(){
    let search=document.getElementById("search").value;

    if(search==="")return;

    let response=await fetch(
        "https://www.omdbapi.com/?apikey="+API_KEY+"&s="+encodeURIComponent(search)
    );

    let data=await response.json();

    let movies=document.getElementById("movies");
    movies.innerHTML="";

    if(data.Response==="False"){
        movies.innerHTML="<h2>Movie not found</h2>";
        return;
    }

    data.Search.forEach(movie=>{
        let div=document.createElement("div");
        div.className="movie";

        let poster=movie.Poster!=="N/A"
            ?movie.Poster
            :"https://via.placeholder.com/200x250";

        div.innerHTML=`
            <img src="${poster}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        movies.appendChild(div);
    });
}