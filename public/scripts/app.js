// var disasterList = [
//   {
//     name: "1989 Loma Prieta",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//     {
//     name: "1989 Loma Prieta",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   },
//   {
//     name: "Testing Data",
//     date: "October 17, 1989",
//     deathToll: 63,
//     dmgCost: 6000000000,
//   }
// ];

$(document).ready(function() {
  console.log("JS Loaded");

  $.ajax({
    method: "GET",
    url: "/api/disasters",
    success: handleSuccess,
    error: handleError
  })

  function handleSuccess(disasters) {
  // debugger;
    disasters.forEach(function(disaster) {
    renderDisaster(disaster);
    });
  }
  function handleError(err){
    console.log("error", err);
  }

  function renderDisaster(disaster){
    $("div.display-box").append(`
      <div class="small-box col-md-3">
        <ul>
          <li>
            ${disaster.date}
          </li>
          <li>
            ${disaster.name}
          </li>
          <li>
            # of Deaths: ${disaster.deathToll}
          </li>
          <li>
            Total Est Cost: ${disaster.dmgCost}
          </li>
        </ul>
      </div>
    `)
  }
}) // end document ready


  // disasterList.forEach(function(disaster){

    // $("div.display-box").append(`
    //   <div class="small-box col-md-3">
    //     <ul>
    //       <li>
    //         ${disaster.date}
    //       </li>
    //       <li>
    //         ${disaster.name}
    //       </li>
    //       <li>
    //         # of Deaths: ${disaster.deathToll}
    //       </li>
    //       <li>
    //         Total Est Cost: ${disaster.dmgCost}
    //       </li>
    //     </ul>
    //   </div>
    //   `)
  // });









//   $.ajax({
//     method: "GET",
//     url: "/api/albums",
//     success: handleSuccess,
//     error: handleError
//   })
// });

// function handleSuccess(albums) {
//   // debugger;
//   albums.forEach(function(album) {
//   renderAlbum(album);
// });
// }