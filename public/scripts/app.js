$(document).ready(function() {
  console.log("JS Loaded");

  // Show all disasters
  $.ajax({
    method: "GET",
    url: "/api/disasters",
    success: handleSuccess,
    error: handleError
  })
  function handleSuccess(disasters) {
    $("div.display-box").empty();
    $("h1").click( function(){
    disasters.forEach(function(disaster) {
    renderDisaster(disaster);
    });
  })
  }

  // Show disasters by location
  $(".city-btns").click(function(event){
    var location = event.target.value;

    $.ajax({
    method: "GET",
    url: `/api/disasters/${location}`,
    success: showByLocation,
    error: handleError
    })

    function showByLocation(disasters){
      $("div.display-box").empty();
      disasters.forEach(function(disaster){
        renderDisaster(disaster);
      })
    }
  })

  //create new disaster
  // $.ajax({
  //   method: "POST",
  //   url: `/api/disasters`
  //   success: newDisaster,
  //   error: handleError
  // })
  // function newDisaster(req, res){
  //   console.log(req.body)
  // }


  function handleError(err){
    console.log("error", err);
  }

  // Render disasters on HTML
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
          <li>
            ${disaster.location}
          </li>
        </ul>
      </div>
    `)
  }


}) // end document ready











