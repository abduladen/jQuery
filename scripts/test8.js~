// In the script below I'm testing the jQuery data() function once again.  This time
// I'm storing data in hidden attributes.  The storage occurs outside the document rather
// than in the element itself.
$(document).ready(function() {


  $('#store').click(function() {
     $('#store-data').data('attributeName', 'some data to be stored');   
  });

  $('#show-data').click(function() {
    alert('The data is: ' + $('#store-data').data('attributeName'));    
  });
  
  $('#show-empty').click(function() {
    alert('The data is: ' + $('#empty-data').data('attributeName'));    
  });
});
