// Here I apply additional styling to paragraphs in the document.
// Also, I replace the paragraph text in the paragraph that's a 
// member of the class paragraph_class with the text "Different content."
// Lastly, when the text in the paragraph with the ID paragraph_id is
// clicked it triggers an alert with the text "Hello world!"

$(document).ready(function() {

  $('p').css('font-weight', 'bold');
  
  $('.paragraph_class').html('Different content');
  
  $('#paragraph_id').click(function() {
    alert('Hello world!');
  });

});
