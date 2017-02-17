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











