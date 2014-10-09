// In the script below I demonstrate usage of the has() and is() jquery functions.
// In the first statement I select all div elements, then narrow that selection down to
// div elements that have an emphasis element nested within them.  I then apply a css styling
// to those elements.  In the second part I append() some text to the strong element and then check
// to see if that element contains the id #select
$(document).ready(function() {

  $('div').has('em').css('background-color', 'red');
  
  var strongElement = $('strong');
  strongElement.append(', and .is() = ' + strongElement.is('#select'));
});
