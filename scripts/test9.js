// In the script below I demonstrate that the data can also be removed once stored
// with the data() function.
$(document).ready(function() {


  $('#store-data').click(function() {
    $('#stored-data').data('attributeName', 
      {a: 'first piece of data', b: 'second piece of data'});   
  });

  $('#show-data').click(function() {
    alert('The data is: ' +     
      JSON.stringify($('#stored-data').data()));   
  });
  
  $('#remove-data').click(function() {
     $('#stored-data').removeData();   
  });
});
