// Below, I practice using pseudo-selectors and the prop() method which in this case
// will set values for the radio and checkbox inputs. 
$(document).ready(function() {

  $(':text').css('border-color', 'blue');
  $(':submit').css('border-color', 'red');
  $(':button').css('border-color', 'green');
  $(':radio').prop('checked', 'true');
  $(':checkbox').prop('checked', 'true');

});
