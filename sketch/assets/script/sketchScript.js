

$(document).ready(function () {
 
 function changeColor(){
  $('#tab').find('td').on('mouseover', function() {
   $(this).css('background-color', 'aqua');
  });
 }
  
 function newGrid(num) {
   var $tableArea = $('#tab');
  
   if (num <= 0) {
    console.log('error');
    return;
   } else if (num.isNaN) {
    console.log('error');
    return;
   } else if (num > 100) {
    console.log('error');
    return;
   }
  
   $tableArea.empty();
  
   for (i = 0; i < num; i++) {
    $tableArea.append("<tr></tr>");
   }
  
   for (i = 0; i < num; i++) {
    for (y = 0; y < num; y++) {
     $tableArea.find('tr').eq(i).append("<td></td>");
    }
   }
   
   changeColor();  
 }
 
 $('#reset').on('click', function() {
   $('#tab').find('td').css('background-color', 'black');
 });
 
 $('#changeSize').submit(function() {
   var newGridval = $('#gsize').val();
   newGrid(newGridval);
   event.preventDefault();
 });
 
 changeColor();
   
});