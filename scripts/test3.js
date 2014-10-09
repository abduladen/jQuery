// I start out by creating an array with four lowercase letters
// I then use the each function coupled with the toUpperCase function
// to make each letter uppercase.  $. is shorthand for the jQuery function.
// On line 30 I target all paragraph elements on the page and prepend their
// values with a dash.  On line 35 I target each paragraph element again and 
// prepend them with the corresponding letters from the letters array depending
// on the index of the element and the array value.  So, the first array element
// is the letter "a" which corresponds to array position 0 and paragraph element 0
// In the DOM, html elements are numbered starting from 0, so the p tag with the value 
// "First paragraph" is 0 indexed.

$(document).ready(function() {

  var array_of_letters = ['a', 'b', 'c', 'd'];

  $.each(array_of_letters, function(index, value) {
    array_of_letters[index] = value.toUpperCase();
  });

  $('p').each(function(index, value) {
    $(value).prepend(' - ');
  });

  $('p').each(function(index) {
    $(this).prepend(array_of_letters[index]);
  });
  
});
