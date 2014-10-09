// In this script I retrieve the data stored inside a paragraph elements
// attribute by using the jQuery data() function.  In order to retrieve it
// the attribute name must begin with data-
$(document).ready(function() {

  $('button').click(function() {
    alert('The hidden data is: ' + $('#test-data').data('pattribute'));   
  });
  
});
