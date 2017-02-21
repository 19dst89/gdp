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
        $(document).data(disaster._id, disaster);
        renderDisaster(disaster);
      })
    }
  })

  // Show disasters by type and location
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
        $(document).data(disaster._id, disaster);
        renderDisaster(disaster);
      })
    }
  })

  //create new disaster
  $("form#new-form").submit(function(event){
      event.preventDefault();
    $.ajax({
      method: "POST",
      url: `/api/disasters`,
      data: $(this).serialize(),
      success: newDisaster,
      error: handleError
    })
    function newDisaster(disaster){
      renderDisaster(disaster);
      // console.log(disaster.type);
    }
  })


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
      <div class="small-disaster-box col-md-3" style="background-color:${bkColor}">
        <ul>
          <li class="date-li">
            ${disaster.date}
          </li>
          <li class="name-li">
            ${disaster.name}
          </li>
          <li class="death-toll-li">
            # of Deaths: ${disaster.deathToll}
          </li>
          <li class="dmg-cost-li">
            Total Est Cost: ${disaster.dmgCost}
          </li>
          <li class="location-li">
            ${disaster.location}
          </li>
          <input type="hidden" class="disaster-id-input" value=${disaster._id}></input>
        </ul>
      </div>
    `)
  }

  function changeDisaster(disaster){
    renderDisaster(disaster);
    // $("form#update-form").attr("action", `/api/disasters/${locationField.value}`);
    // console.log(disaster.type);
  };

  $("div.update-form").hide();
  $("div.display-box").on("click", ".small-disaster-box", function(event){
      $("div.new-input-form").hide();
      $("div.update-form").show();
      // var editText = $(event.target).text();
      // var date = editText.split("            ")[1];
      // var name = editText.split("            ")[2];
      // var deathToll = editText.split("            ")[3].split(": ")[1];
      // var dmgCost = editText.split("            ")[4].split(": ")[1];
      // var location = editText.split("            ")[5];
      // var typeValue = editText.split("            ")[];
      var id = $(this).find('.disaster-id-input').val();
      console.log($(document).data(id).date);
      var put_data = {
        date: $(document).data(id).date,
        name: $(document).data(id).name,
        location: $(document).data(id).location,
        type: $(document).data(id).type,
        deathToll: $(document).data(id).deathToll,
        dmgCost: $(document).data(id).dmgCost,
        _id: id
      };
      //get form field values
      var dateField = document.getElementById('editDate');
        dateField.value = put_data.date;
      var nameField = document.getElementById('editName');
        nameField.value = put_data.name;
      var deathField = document.getElementById('editDeaths');
        deathField.value = parseInt(put_data.deathToll);
      var dmgField = document.getElementById('editDmg');
        dmgField.value = parseInt(put_data.dmgCost);
      var locationField = document.getElementById('editLocation');
        locationField.value = put_data.location;


      $("form#change-form").submit(function(event){
        event.preventDefault();
        console.log(this);
        $(this).attr("action", `/api/disasters/${put_data._id}`);
        $(this).attr("method", "PUT");
        $.ajax({
          method: "PUT",
          url: `/api/disasters/${put_data._id}`,
          data: put_data,
          success: changeDisaster,
          error: handleError
        });
      })
  });

  // $("form#update-form").submit(function(event){
  //     event.preventDefault();
  //   $.ajax({
  //     method: "PUT",
  //     url: `/api/disasters`,
  //     data: $(this).serialize(),
  //     success: newDisaster,
  //     error: handleError
  //   })
  //   function newDisaster(disaster){
  //     renderDisaster(disaster);
  //     // console.log(disaster.type);
  //   }
  // })



}) // end document ready










