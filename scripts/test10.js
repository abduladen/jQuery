// Below I practice with jQuery functions related to determining the type of a variable
// as well as the merge and unique functions
$(document).ready(function() {
  
  var testObj = {},
      testVar = 1,
      testFun = function() { return true},
      testArr = [1, 2, 2];
  
  var results = [];
  
  results.push('testObj = ' + JSON.stringify(testObj));
  results.push('testVar = ' + JSON.stringify(testVar));
  results.push('testFunc = ' + JSON.stringify(testFun));
  results.push('testArr = ' + JSON.stringify(testArr));
  
  results.push('<br>');
  
  results.push('type(testObj) = ' + $.type(testObj));
  results.push('type(testVar) = ' + $.type(testVar));
  results.push('type(testFun) = ' + $.type(testFun));
  results.push('type(testArr) = ' + $.type(testArr));
  
  results.push('<br>');
  
  results.push('inArray(3, testArr) = ' 
                + $.inArray(3, testArr));
  
  results.push('isArray(testArr) = ' 
                + $.isArray(testArr));
  
  results.push('isEmptyObject(testObj) = ' 
                + $.isEmptyObject(testObj));
  
  results.push('isPlainObject(testObj) = ' 
                + $.isPlainObject(testObj));
  
  results.push('isFunction(testFun) = ' 
                + $.isFunction(testFun));
                
  results.push('<br>');
  
  results.push('merge(testArr, [3, 3, 4]) = ' 
                + $.merge(testArr, [3, 3, 4]));
  
  results.push('unique(testArr) = ' 
                + $.unique(testArr));
                
  results.push('merge(testArr, [5, 6]) = ' 
                + $.merge(testArr, [5, 6]));
                
  $('#placeholder').append(results.join('<br>'));
  
});
