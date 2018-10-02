  // WORKING OUT
  // $.getJSON( "data.json", function( data ) {
  //   $('.title').text( data[0].title );
  //   $('#pic').append('<img src='+ data[0].url+ "'>");
  //   $('#servings').text( 'Serves: ' + data[0].serves);
  //   $('#ingredients').text(data[0].ingredients);
  //   $('#method').text(data[0].method);
  //  });
  //
  //  $.getJSON( "data.json", function( data ) {
  //    $('.row').append('<div class="card">')
  //    $('.title').text( data[1].title );
  //    $('#pic').append('<img src='+ data[1].url+ "'>");
  //    $('#servings').text( 'Serves: ' + data[1].serves);
  //    $('#ingredients').text(data[1].ingredients);
  //    $('#method').text(data[1].method);
  //   });
  //
  //   $.getJSON( "data.json", function( data ) {
  //     $('.title').text( data[2].title );
  //     $('#pic').append('<img src='+ data[2].url+ "'>");
  //     $('#servings').text( 'Serves: ' + data[2].serves);
  //     $('#ingredients').text(data[2].ingredients);
  //     $('#method').text(data[2].method);
  //    });

// Create new card
// .append "title" from json file
// .append "$('src').val()" from json
// select
// new cards created for json data
$.getJSON("data.json", function (data) {
  count = Object.keys(data).length;
    $.each(data, function (key, val) {
      for(var i = 0; i < count; i++) {
        $('.row').prepend("<div class='card'" + "<div><h3 id='title'>" + data[i].title + "</h3>" + "<div id='pic'><img src=" + data[i].url + "></div>" + "<h4 id='servings'>Servings: " + data[i].serves + "</h4>" + "<h3>Ingredients</h3>" + "<p id='ingredients'>" + data[i].ingredients + "</p>" + "<h3>Method</h3>" + "<p id='method'>" + data[i].method + "</p>" + "</div>" + "</div>")
    };
  });
});


// form submit event handlers
//INCOMPLETE
$(document).on('click', 'submit', function() {
  addToList( handleFormSubmission);
});

$(document).ready(function(){
    $("form").submit(function(){
        alert("Submitted");
    });
  });

// handles form values and stores them as variables for later use.
function handleFormSubmission() {
  var title = $('#title').val();
  var url = $('#pic').val();
  var serves = $('#serves').val();
  var ingredients = $('ingredients').val();
  var method = $('method').val();
};
