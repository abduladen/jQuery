// In the first part of the script below I select the children of the ul
// element with the id of ul-root.  I filter this result  by only selecting
// the children that are part of the class .special   I then apply a css styling
// to the selection.  In the second part I use the find() function to grab all the elements
// in the ul-root id with the class of special and apply a red background color to them.
// the children() function will only search for the child elements that are one level below the 
// parent element whereas the find() function will traverse all levels of the element.
$(document).ready(function() {

  $('#ul-root').children('.special').css('font-weight', 'bold');
  
  $('#ul-root').find('.special').css('background-color', 'red');

});
