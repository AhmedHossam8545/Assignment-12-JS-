// var c = col-sm-1 col-md-2 col-lg-3 col-xl-4
export class UI{
    displayData(data)
    {
        var cartoona = ``;
        for (var i = 0; i < data.length; i++) {
            cartoona += 
            `
             <div class=" col-md-3">
                     <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button" >
                        <div class="card-body">
                           <figure class="position-relative">
                              <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}">
                           
                           </figure>
               
                           <figcaption>
               
                              <div class="hstack justify-content-between">
                                 <h3 class="h6 small">${data[i].title}</h3>
                                 <span class="badge text-bg-primary p-2">Free</span>
                              </div>
               
                              <p class="card-text small text-center opacity-50 text-white" style = "font-size : 12px " >
                              ${data[i].short_description.split(" ", 8)}
                              </p>
               
                           </figcaption>
                        </div>
               
                        <footer class="card-footer small hstack justify-content-between">
               
                           <span class="badge badge-color">${data[i].genre}</span>
                           <span class="badge badge-color">${data[i].platform}</span>
               
                        </footer>
                     </div>
                  </div>
            `
            document.getElementById('gameData').innerHTML = cartoona;
        }
    }

    displayDetails(data)
    {
        const cartoona = 
        `
        <div class="col-md-4">
                  <img src="${data.thumbnail}" class="w-100" alt="image details">
                  </div>
                  <div class="col-md-8">
                     <h3>Title: ${data.title}</h3>
                     <p>Category: <span class="badge text-bg-info">  ${data.genre}</span> </p>
                     <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                     <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                     <p class="small">
                     ${data.description}
                     </p>
                     <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
                  </div>
        `
        document.getElementById('detailsContent').innerHTML = cartoona;
    }   
}