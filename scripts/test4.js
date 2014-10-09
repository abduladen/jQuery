// I start by creating an array with 5 numbers.
// To the div with the id of before I append a stringified version
// of the original array.  Then I create a new array with the map()
// function which uses the return statement for variable assignment.
// The original array is changed from an array of numerical values to
// an array of strings.

$(document).ready(function() {

  var arr = [1, 2, 3, 4, 5];
  
  $('#before').append(JSON.stringify(arr));
  
  arr = $.map(arr, function(value, index) {
    return 'Changed the original value of ' + value;
  });
  
  $('#after').append(JSON.stringify(arr));

});
