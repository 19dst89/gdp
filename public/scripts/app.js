$(document).ready(function() {
  console.log("JS Loaded");

  $.ajax({
    method: "GET",
    url: "/api/disasters",
    success: handleSuccess,
    error: handleError
  })
  function handleSuccess(disasters) {
    $("div.display-box").empty();
    $("h1").click( function(){
  // debugger;
    disasters.forEach(function(disaster) {
    renderDisaster(disaster);
    });
  })
  }

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


  // $.ajax({
  //   method: "GET",
  //   url: "/api/disasters/San Francisco",
  //   success: showByLocation,
  //   error: handleError
  // })

  // function showByLocation(disasters){
  //   $(".city-btns").click(function(event){
  //     console.log(event.target.value)
  //     // var locSF = $("#sf-btn").val();
  //     // var locSea = $("#seattle-btn").val();
  //     // console.log(locSF);
  //     // console.log(locSea);
  //     // disasters.forEach(function(disaster){
  //     //   renderDisaster(disaster);
  //     // })
  //   })

  // }

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
          <li>
            ${disaster.location}
          </li>
        </ul>
      </div>
    `)
  }


}) // end document ready











