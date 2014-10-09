// In this script I practice using the jQuery grep() function which searches through
// the elements of an array and filters the array by a certain criteria, then
// returns a new array.  In this case I'm searching the months array for months
// that contain the letter r and creating a new array containing those months.
// I also use the javascript join() function, which joins the elements of an array 
// into a string.  It has an optional parameter which is used to create a separator
// between the elements.

$(document).ready(function() {

  var months_array = ['January', 'February', 'March', 'April', 'May',
   'June', 'July', 'August', 'September', 'October',
     'November', 'December'];

   var letter_r_months = $.grep(months_array, function(value, index) {
    return value.indexOf('r') >= 0;
   });

  $('#all-months').html(months_array.join('<br/> '));
  $('#r-months').html(letter_r_months.join('<br/> '));
  
});
