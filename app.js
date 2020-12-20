
//const url = "https://pokeapi.co/api/v2/pokemon/10/"
//const url ="http://api.tvmaze.com/search/shows?q=alf"
const url ="https://api.themoviedb.org/3/search/movie?api_key=b78674d3628205a6d6750bf73d941a40&query=Frozen"


fetch(url)
.then((response)=> response.json())
.then((data)=>{
//    console.log(data)
    console.log(data.page)
    console.log(data.results[0].id)
    console.log(data.results[0].original_title)
    console.log(data.results[0].overview)
    console.log(data.results[0].poster_path)
    
    let element =document.querySelector(".aqui");
    element.innerHTML=`
    <p>ID: ${data.results[0].id}</p>
    <p>RESUMEN${data.results[0].overview}</p>
    <img src="https://image.tmdb.org/t/p/w300/${data.results[0].poster_path}"> </img>
    <br>
    `
}
    
)

/*
FUNCIONA PERFECTAMENTE PARA TV MAZE EJEMPLO ALF
fetch(url)
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    console.log(data[0].score)
    console.log(data[0].show.id)
    console.log(data[0].show.name)
    console.log(data[0].show._links.self.href)
    console.log(data[0].show.officialSite)
    console.log(data[0].show.runtime)
    let element =document.querySelector(".aqui");
    element.innerHTML=`
    <p>SCORE: ${data[0].score}</p>
    <p>NOMBRE: ${data[0].show.name}</p>
    <br>
    <a href="${data[0].show.officialSite}" target="_blank">SITIO WEB OFICIAL</a> 
    <br>
    <p>IDIOMA: ${data[0].show.language}</p>
    <p>FECHA 1ER CAPITULO ${data[0].show.premiered}</p>
    <p>RESUMEN: ${data[0].show.summary}</p>
    <p>GENERO: ${data[0].show.genres}</p>
    <p>RATING PROMEDIO: ${data[0].show.rating.average}</p>
    <img src="${data[0].show.image.medium}"> </img>
    <br>
    `
}
    
)


*/