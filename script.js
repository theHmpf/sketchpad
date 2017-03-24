$.when( $.ready ).then(function(){

  //select grid div

  var grid = $('#grid-container');

  //var tailLength = 1000;
  var resetButton = $('#reset-button');

  // Remove old divs and then creates as much divs as gridNumber
  function createDivs(number){

    grid.empty();

    for (var i = 0; i < number; i++) {
        var divNew = $("<div id=grid-div-" + i + "></div>").addClass("grid-div");
        grid.append(divNew);
    }

    var gridDivs = $('.grid-div');
    // Place always the last hovered div at the end of this array
    //var activeDivArray = [];

    function divHoverIn(div){
      div.css({
        "background-color": "rgb(130, 51, 98)"
      });

      //activeDivArray.push(div);

    }

    function divHoverOut(div) {

      // if(activeDivArray.length >= tailLength) {
      //   console.log(activeDivArray);
      //
      //   activeDivArray[0].css({
      //     "background-color": "rgb(65, 156, 130)"
      //   });
      //
      //   activeDivArray.shift();
      //   console.log(activeDivArray);
      // }

    }

    gridDivs.hover(function() {
      divHoverIn( $( this ) );
    }, function() {
      divHoverOut( $( this ) );
    });
  }

  createDivs(50000);

  resetButton.click(function(){
    gridNumber = prompt("How much grid segments do you want?");
    createDivs(gridNumber);

    var gridDivs = $('.grid-div');
    gridDivs.css({
      "background-color": "rgb(65, 156, 130)"
    });
  });

});
