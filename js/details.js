import { UI } from "./ui.js";
export class getDetails {
    constructor(id) {
       this.ui = new UI();
 
       document.getElementById("btnClose").addEventListener("click", () => {
          document.querySelector(".games").classList.remove("d-none");
          document.querySelector(".details").classList.add("d-none");
       });
 
       this.getDetailss(id);
    }
 
    async getDetailss(idGames) {
       let loading = document.querySelector(".loading");
       loading.classList.remove("d-none");
 
      //  const options = {
      //     method: "GET",
      //     mode: "no-cors"
      //  };
 
      //  let api =  await fetch(`https://www.freetogame.com/api/game?id=${idGames}`, options);
       let api =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,{
         "method": "GET",
         "headers": {
            'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'          
          }   
       });

       let response = await api.json();
       console.log(response)
       loading.classList.add("d-none");
       this.ui.displayDetails(response);
      //  console.log(response);
    }
 }
 console.log("Hiiiiii");
let t1 = new getDetails(540);
// console.log(t1.getDetailss(540));






















// class gameDetails{
//     constructor(id){
//         this.ui = new UI();
//         document.querySelector("#btnClose").addEventListener("click" , function(){
//             document.querySelector(".details").classList.add("d-none")
//             document.querySelector(".games").classList.remove("d-none")

//         })
//         this.getDetails(id);
//     }

//     async getDetails(gameId) {
//         const loading = document.querySelector(".loading");
//         loading.classList.remove("d-none");
    
//         try {
//             let api = await fetch(`https://www.freetogame.com/api/game?id=540`, {
    
//                 mode : 'no-cors',
//                 method : 'GET'
//             });
//             let response = await api.json();
//             console.log(response);
//         } 
//         catch (error) {
//             console.error( error);
//         } 
//         finally {
//             loading.classList.add("d-none");
//         }
//     }
 

// } 
// console.log("dddii");
// let t1 = new gameDetails();
// t1.getDetails(540);