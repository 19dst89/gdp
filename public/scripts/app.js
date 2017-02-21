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
    $("#showAll").click( function(){
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

  // Show disasters byt type and location
  $(".type-btns").click(function(event){
    var type = event.target.value;
    var location = "New York";

    $.ajax({
    method: "GET",
    url: `/api/disasters/${location}/${type}`,
    success: showByType,
    error: handleError
    })

    function showByType(disasters){
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
    var bkColor = ""
    if (disaster.type === "Flood") {
      bkColor = "lightblue";
    } else if (disaster.type === "Earthquake") {
      bkColor = "darkgoldenrod";
    } else if (disaster.type === "Hurricane") {
      bkColor = "royalblue";
    } else if (disaster.type === "Tornado") {
      bkColor = "rgb(128, 128, 128)";
    }

    $("div.display-box").append(`
      <div class="small-box col-md-3" style="background-color:${bkColor}">
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











