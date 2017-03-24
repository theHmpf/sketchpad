$.when( $.ready ).then(function(){

  //select grid div

  var grid = $('#grid-container');

  var gridNumber = 10000;

  var tailLength = 1000;
  // Create as much divs as gridNumber
  for (var i = 0; i < gridNumber; i++) {
      var divNew = $("<div id=grid-div-" + i + "></div>").addClass("grid-div");
      grid.append(divNew);
  }

  var gridDivs = $('.grid-div');

  // Place always the last hovered div at the end of this array
  var activeDivArray = [];

  function divHoverIn(div){
    div.css({
      "background-color": "rgb(130, 51, 98)"
    });

    activeDivArray.push(div);

  }

  function divHoverOut(div) {

    if(activeDivArray.length >= tailLength) {
      console.log(activeDivArray);

      activeDivArray[0].css({
        "background-color": "rgb(65, 156, 130)"
      });

      activeDivArray.shift();
      console.log(activeDivArray);
    }

  }

  gridDivs.hover(function() {
    divHoverIn( $( this ) );
  }, function() {
    divHoverOut( $( this ) );
  });

});
