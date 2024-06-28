import { UI } from "./ui.js";
import { getDetails } from "./details.js";
export class Games{
    constructor(){
        this.ui = new UI;
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".menu .active").classList.remove("active");
               e.target.classList.add("active");
               this.getGames(e.target.dataset.category);
            });
         });
         this.getGames("mmorpg")
    }

    showDetails(idGame){
        let details = new getDetails(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }

    firstEvent(){
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.dataset.id;
               this.showDetails(id);
            });
         });
    }

    async getGames(genre){
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        // let api = await fetch(`https://www.freetogame.com/api/games?category=${genre}`)
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,{
            method : "GET",
            headers : {
                'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'          
              }
        })
        let response = await api.json();  
        this.ui.displayData(response)
        this.firstEvent();
        loading.classList.add("d-none");

    }
}